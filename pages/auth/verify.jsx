import { useRouter } from "next/router";
import { useState } from "react";
import auth from "../../constants/hooks/useAuth";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import { ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/solid";

const Verify = (props) => {
  const router = useRouter();
  const [confirmCode, setConfirmCode] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await auth.confirmSignUp(
      router.query.email,
      confirmCode,
      (load) => setLoading(load)
    );
    if (res.success) {
      // notification needed
      NotificationManager.success("Verified Successfully!", "Success");
      if (res.awsresponse === "SUCCESS") {
        router.push(
          router.query.callback == undefined
            ? "/"
            : router.query.callback
        );
      }
    } else {
      // notification needed
      NotificationManager.error("Verification Failed!", "Failed");
    }
  };

  const resendCode = async (e) => {
    const res = await auth.resendConfirmSignUp(router.query.email, (load) =>
      setLoading(load)
    );
    // notification needed
    NotificationManager.warning("Code resent!", "Resent");
    // console.log("aws response : ", res);
  };

  return (
    <div className="relative bg-white h-screen">
      <div className="relative bg-indigo-600 h-72 md:absolute md:left-0 md:h-screen md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/img/login-bg.png"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:px-8 lg:px-16">
          <h2 className="text-lg font-semibold text-gray-500">DEInclusive</h2>
          <p className="mt-2 text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
            Verify your email
          </p>
          <p className="mt-3 text-base text-gray-500">
            Verification code has been sent to &apos;{router.query.email}&apos;
          </p>
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-900"
              >
                Code
              </label>
              <div className="mt-1">
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={confirmCode}
                  onChange={(e) => setConfirmCode(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-between align-middle gap-x-5 w-full">
                <button
                  disabled={loading}
                  type="submit"
                  className="inline-flex w-auto shadow items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                >
                  Verify
                  {loading ? (
                    <PlusCircleIcon className="-mr-1 ml-3 h-5 w-5 text-white animate-spin" />
                  ) : (
                    <ArrowRightIcon
                      className="-mr-1 ml-3 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  )}
                </button>

                <div className="text-sm w-auto text-justify pt-4">
                  Didn&apos;t got the code?{" "}
                  <a
                    onClick={() => resendCode()}
                    className="font-medium text-indigo-500 hover:text-indigo-700"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};
export default Verify;
