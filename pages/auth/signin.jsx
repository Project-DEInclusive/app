import { useRouter } from "next/router";
import { GoogleIcon } from "../../constants/images";
import auth from "../../constants/hooks/useAuth";
import { useState } from "react";
import useUserStore from "../../constants/stores/userstore";

import { ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/solid";

const SignIn = (props) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    const user = useUserStore((state) => state);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await auth.signIn(email, password, (load) => setLoading(load));
        if (res.success) {
            if (res.awsresponse.userConfirmed == false) {
                router.push(`/auth/verify?email=${res.awsresponse.user.username}`);
            } else {
                user.setUser(res.user);
                router.push(router.query.callback == undefined ? "/" : router.query.callback);
            }
        } else {
            switch (res.error.type) {
                case "UserNotConfirmedException":
                    router.push(`/auth/verify?email=${email}`);
                    break;
                default:
                    console.log("error : ", res.error);
                    setLoginError(res.error.message);
                    break;
            }
        }
    };
    return (
        <div className="bg-white flex flex-col lg:flex-row px-8 md:py-10">
            {/* Picture  */}
            <div className="w-full lg:w-1/2 px-0 xl:px-12">
                <img className="w-full h-full object-cover" src="/img/login-bg.png" alt="" />
            </div>
            {/* Form  */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-0 xl:px-12">
                <div className="md:ml-auto md:px-8 lg:px-16">
                    <h2 className="text-lg font-semibold text-gray-500">DEInclusive</h2>
                    <p className="mt-2 text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">Sign in to your account</p>
                    <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
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

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Password
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
                            {loginError == "" ? <></> : <span className="text-red-400 pt-1 pl-1 font-medium">{loginError}</span>}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a onClick={() => router.push("/auth/forgotpassword")} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-700">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col lg:flex-row justify-between align-middle gap-x-5 w-full">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="inline-flex w-auto shadow items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                                >
                                    Sign in
                                    {loading ? (
                                        <PlusCircleIcon className="-mr-1 ml-3 h-5 w-5 text-white animate-spin" />
                                    ) : (
                                        <ArrowRightIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
                                    )}
                                </button>

                                <div className="text-sm w-auto text-justify pt-4">
                                    Don&apos;t have an account?{" "}
                                    <a onClick={() => router.push("/auth/signup")} className="font-medium cursor-pointer text-indigo-500 hover:text-indigo-700">
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                            {/* <div className="flex flex-row justify-between">
                <div className="border-b border-gray-500 w-full"></div>
                <span className="text-gray-600 translate-y-2 w-auto mx-3">
                  or
                </span>
                <div className="border-b border-gray-500 w-full"></div>
              </div> */}

                            {/* <button
                type="button"
                className="text-gray-600 mt-5 text-base inline-flex justify-center bg-white w-full hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
              >
                <img
                  layout="fill"
                  height="20"
                  width="20"
                  src={GoogleIcon.src}
                  alt="Google signup image"
                />
                <span className="ml-2">Sign in with Google</span>
              </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignIn;

SignIn.layout = "main";
