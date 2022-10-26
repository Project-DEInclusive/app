/*    Imports    */
import Link from "next/link";
import { useRouter } from "next/router";

import { Fragment, useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Menu, Popover, Transition } from "@headlessui/react";

import useUserStore from "../../constants/stores/userstore";

import fetcher from "../../constants/fetch/user";

import auth from "../../constants/hooks/useAuth";
import EUsertype from "../../types/enum/_common/EUsertype";

const navigation = [
    { name: "Events", href: "/events" },
    { name: "Jobs", href: "/job" },
    // { name: "Courses", href: "/course" },
    // { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const user = useUserStore((state) => state);

    useEffect(() => {
        getCurrentUserFromCookie();
    }, []);

    const getCurrentUserFromCookie = async () => {
        if (!user.value) {
            const usr = await fetcher.getMyInfo(setLoading);
            if (usr) {
                user.setUser({ ...usr, id: usr._id });
            }
        }
    };

    const getReturnUrl = () => {
        return router.asPath.includes("signin") || router.asPath.includes("signup") ? "/" : router.asPath;
    };

    return (
        <Popover>
            <div className="bg-white w-full z-40">
                <div className="max-w-7xl  mx-auto px-4 py-4 sm:px-6">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/" passHref>
                                    <div className="cursor-pointer">
                                        <span className="sr-only">Workflow</span>
                                        <img className="h-8 w-auto sm:h-10" src="/img/DEInclusive Logo - Final icon.png" alt="" />
                                    </div>
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:space-x-10">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <div className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">{item.name}</div>
                                </Link>
                            ))}
                        </div>
                        {(!user.value || user.value == {}) && (
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                <span className="inline-flex rounded-md shadow">
                                    <a
                                        disabled={loading}
                                        onClick={() => router.push(`/auth/signin?callback=${getReturnUrl()}`)}
                                        className="inline-flex items-center cursor-pointer px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                                    >
                                        Sign in
                                    </a>
                                </span>
                                <span className="inline-flex rounded-md shadow ml-4">
                                    <a
                                        className=" cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        disabled={loading}
                                        onClick={() => router.push(`/auth/signup?callback=${getReturnUrl()}`)}
                                    >
                                        Sign up
                                    </a>
                                </span>
                            </div>
                        )}

                        {user.value && user.value != {} && (
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                <Menu as="div" className="ml-3 z-40 relative">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className=" flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    {user?.value?.thumbnail?.src ? (
                                                        <img
                                                            layout="fill"
                                                            className="h-12 w-12 rounded-full"
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${user.value.id}?key=${user.value.thumbnail?.src}`}
                                                            alt={user.value.name?.first}
                                                        />
                                                    ) : (
                                                        <img
                                                            layout="fill"
                                                            className="h-12 w-12 rounded-full"
                                                            src="https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png"
                                                            alt={user.value.name?.first}
                                                        />
                                                    )}
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        <div className="py-3 px-4">
                                                            <span className="block text-sm text-gray-900 ">
                                                                {user.value.name?.first} {user.value.name?.last}
                                                            </span>
                                                            <span className="block text-sm font-medium text-gray-500 truncate ">{user.value.email}</span>
                                                        </div>
                                                    </Menu.Item>
                                                    {user.value.status > EUsertype.regular && (
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button className="w-full">
                                                                    <Link href={`/editor/dashboard`} passHref>
                                                                        <a
                                                                            className={classNames(
                                                                                active ? "bg-gray-100" : "",
                                                                                "block px-4 py-2 text-left text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                                                            )}
                                                                        >
                                                                            Switch To Dashboard
                                                                        </a>
                                                                    </Link>
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    )}
                                                    {/* ) : (
                            ""
                          )} */}

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button className="w-full">
                                                                <Link href={`/my`} passHref>
                                                                    <a
                                                                        className={classNames(
                                                                            active ? "bg-gray-100" : "",
                                                                            "block px-4 py-2 text-left text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                                                        )}
                                                                    >
                                                                        My profile
                                                                    </a>
                                                                </Link>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button className="w-full">
                                                                <Link href="/verification" passHref>
                                                                    <a
                                                                        className={classNames(
                                                                            active ? "bg-gray-100" : "",
                                                                            "block px-4 py-2 text-sm text-left text-gray-700 cursor-pointer hover:bg-gray-100"
                                                                        )}
                                                                    >
                                                                        Verification
                                                                    </a>
                                                                </Link>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    {/* <Menu.Item>
                                        {({active}) => (
                                          <button className="w-full">
                                            <Link href="/messages" passHref>
                                              <a
                                                className={classNames(
                                                  active ? 'bg-gray-100' : '',
                                                  'block px-4 py-2 text-sm text-left text-gray-700 cursor-pointer hover:bg-gray-100'
                                                )}
                                              >
                                                Messages
                                              </a>
                                            </Link>
                                          </button>
                                        )}
                                      </Menu.Item> */}

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button className="w-full">
                                                                <Link href="/my/settings" passHref>
                                                                    <a
                                                                        className={classNames(
                                                                            active ? "bg-gray-100" : "",
                                                                            "block px-4 py-2 text-sm text-left text-gray-700 cursor-pointer hover:bg-gray-100"
                                                                        )}
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </Link>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className="w-full"
                                                                disabled={loading}
                                                                onClick={() =>
                                                                    auth.signOut((success) => {
                                                                        if (success == true) user.setUser(null);
                                                                    })
                                                                }
                                                            >
                                                                <span className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-left text-gray-700")}>
                                                                    Sign out
                                                                </span>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        )}
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="/img/DEInclusive Logo - Final icon.png" alt="" />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Link href={item.href} key={item.name} passHref>
                                        <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{item.name}</a>
                                    </Link>
                                ))}
                            </div>
                            <a
                                disabled={loading}
                                onClick={() => router.push(`/auth/signin?callback=${getReturnUrl()}`)}
                                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                            >
                                Sign in
                            </a>
                            <a
                                disabled={loading}
                                onClick={() => router.push(`/auth/signup?callback=${getReturnUrl()}`)}
                                className="block w-full px-5 py-3 text-center font-medium bg-indigo-600 text-gray-50 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </Popover.Panel>
                </Transition>
            </div>
        </Popover>
    );
};

export default Navbar;
