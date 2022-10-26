import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ArrowLeftIcon,
    Bars3Icon,
    MenuAlt4Icon,
    BookmarkAltIcon,
    CalendarIcon,
    ChatAltIcon,
    CheckIcon,
    CursorClickIcon,
    LibraryIcon,
    PhoneIcon,
    PlayIcon,
    PlusIcon,
    ShieldCheckIcon,
    ChartSquareBarIcon,
    UserAddIcon,
    ViewGridAddIcon,
    XMarkIcon,
} from "@heroicons/react/outline";
import Script from "next/script";
import Head from "next/head";
import Meta from "../components/_common/meta";

const donate = () => {
    return (
        <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
            <Head>
                <Meta
                    title="Donate to us - DEInclusive"
                    description="We connect diverse talent to top employers through virtual events. featuring prominent keynotes, virtual information sessions, online recruiter Q&As, and unmatched job search assistance, the DEInclusive is the best place to land your dream job!"
                    keywords="deinclusive, diversity, equity, inclusion, diverse talent to top employers, virtual events, virtual information sessions, online recruiter, unmatched job search assistance,best place to land your dream job"
                    url="https://www.deinclusive.org/"
                    imagefb={"https://www.deinclusive.org/img/DEInclusive Logo - Final icon.png"}
                    imagetw={"https://www.deinclusive.org/img/DEInclusive Logo - Final icon.png"}
                    width={100}
                    height={100}
                    alt="DEInclusive Logo"
                />
            </Head>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <svg
                    className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    role="img"
                    aria-labelledby="svg-workcation"
                >
                    <title id="svg-workcation">deinclusive</title>
                    <defs>
                        <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                </svg>

                <div className="relative">
                    <img className="mx-auto h-9 md:h-12 lg:h-16" src="/img/DEInclusive Logo - Final icon.png" alt="Deinclusive" />
                    <blockquote className="mt-10">
                        <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
                            <p>&ldquo;Help us out by donating, and be a part of the great community service we are providing.&rdquo;</p>
                        </div>
                        <footer className="mt-8">
                            <div className="md:flex md:items-center md:justify-center">
                                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a
                                            className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-800 md:py-4 md:text-lg md:px-10"
                                            href="https://donate.stripe.com/aEU8zLadO78Ef3WeUU"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Donate now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default donate;
donate.layout = "main";
