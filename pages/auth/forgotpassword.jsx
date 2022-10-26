import { useState } from "react";
import { useRouter } from "next/router";
import auth from "../../constants/hooks/useAuth";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import { ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/solid";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (codeSent) {
      if (password.length < 8) {
        NotificationManager.error(
          "Password must be at least 8 characters long.",
          "Error"
        );
      } else if (!/\d/.test(password)) {
        NotificationManager.error("Password must contain a number.", "Error");
      } else if (!/[a-z]/.test(password)) {
        NotificationManager.error(
          "Password must contain a lowercase letter.",
          "Error"
        );
      } else if (!/[A-Z]/.test(password)) {
        NotificationManager.error(
          "Password must contain an uppercase letter.",
          "Error"
        );
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        NotificationManager.error(
          "Password must contain a special character.",
          "Error"
        );
      } else if (password === confirmPassword) {
        const res = await auth.confirmForgotPassword(
          email,
          confirmCode,
          password,
          (load) => setLoading(load)
        );
        if (res.awsresponse === "SUCCESS") {
          router.push(
            router.query.callback == undefined
              ? "/auth/signin"
              : router.query.callback
          );
        } else {
          NotificationManager.error("Password update failed!", "Error");
        }
      } else {
        NotificationManager.error("Passwords do not match!", "Error");
      }
    } else {
      const res = await auth.forgotPassword(email, (load) => setLoading(load));
      if (res.success) {
        NotificationManager.success(
          "Password reset code sent to your email.",
          "Success"
        );
        setCodeSent(true);
      } else {
        NotificationManager.error("Sending Failed!", "Error");
      }
    }
  };

  const resendCode = async (e) => {
    await handleSubmit(e);
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
            Reset your password
          </p>
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            {codeSent ? (
              <>
                <div>
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Verification Code
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password1"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Confirm New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password1"
                      name="password1"
                      type="password"
                      autoComplete="current-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex flex-col lg:flex-row justify-between align-middle gap-x-5 w-full">
                <button
                  disabled={loading}
                  type="submit"
                  className="inline-flex w-auto shadow items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                >
                  {codeSent ? "Update" : "Continue"}
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
    </div>
  );
};
export default ForgotPassword;
