import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ArrowLeftIcon, CheckIcon, ThumbUpIcon, HomeIcon, SearchIcon, PaperClipIcon, QuestionMarkCircleIcon, UserIcon } from "@heroicons/react/solid";
import { MenuIcon, BellIcon, XIcon } from "@heroicons/react/outline";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import userfetcher from "../../constants/fetch/user";
import jobfetcher from "../../constants/fetch/job";
import eventfetcher from "../../constants/fetch/event";
import blogfetcher from "../../constants/fetch/blog";
import companyfetcher from "../../constants/fetch/companies";

import ReactHtmlParser from "react-html-parser";

import useUserStore from "../../constants/stores/userstore";
import EUsertype from "../../types/enum/_common/EUsertype";
import EApprovalState from "../../types/enum/_common/EApprovalState";

const attachments = [
    { name: "resume_front_end_developer.pdf", href: "#" },
    { name: "coverletter_front_end_developer.pdf", href: "#" },
];
const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: ThumbUpIcon, bgColorClass: "bg-blue-500" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
    {
        id: 1,
        type: eventTypes.applied,
        content: "Applied to",
        target: "Front End Developer",
        date: "Sep 20",
        datetime: "2020-09-20",
    },
    {
        id: 2,
        type: eventTypes.advanced,
        content: "Advanced to phone screening by",
        target: "Bethany Blake",
        date: "Sep 22",
        datetime: "2020-09-22",
    },
    {
        id: 3,
        type: eventTypes.completed,
        content: "Completed phone screening with",
        target: "Martha Gardner",
        date: "Sep 28",
        datetime: "2020-09-28",
    },
    {
        id: 4,
        type: eventTypes.advanced,
        content: "Advanced to interview by",
        target: "Bethany Blake",
        date: "Sep 30",
        datetime: "2020-09-30",
    },
    {
        id: 5,
        type: eventTypes.completed,
        content: "Completed interview with",
        target: "Katherine Snyder",
        date: "Oct 4",
        datetime: "2020-10-04",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Profile = () => {
    const router = useRouter();

    const [loadingUser, setLoadingUser] = useState(false);
    const [userData, setUserData] = useState(null);

    const [loadingJob, setLoadingJob] = useState(false);
    const [jobData, setJobData] = useState(null);

    const [loadingEvent, setLoadingEvent] = useState(false);
    const [eventData, setEventData] = useState(null);

    const [loadingBlog, setLoadingBlog] = useState(false);
    const [blogData, setBlogData] = useState(null);

    const [loadingCompany, setLoadingCompany] = useState(false);
    const [companyData, setCompanyData] = useState(null);

    const [loadingNotification, setLoadingNotification] = useState(false);
    const [notificationData, setNotificationData] = useState(null);

    const [loadingSaved, setLoadingSaved] = useState(false);
    const [savedData, setSavedData] = useState(null);

    const user = useUserStore((state) => state);

    useEffect(() => {
        getUserDetails();
        getJobDetails();
        getEventDetails();
        getBlogDetails();
        getCompanyDetails();
    }, [user.value?.id]);

    const getUserDetails = async () => {
        if (!user.value?.id) return;
        const dta = await userfetcher.getById(user.value?.id, {}, setLoadingUser);
        if (dta) {
            setUserData(dta);
        }
    };
    const getJobDetails = async () => {
        if (!user.value?.id) return;
        const dta = await jobfetcher.get_Public(
            { owner: user.value?.id, status: EApprovalState.approved },
            { name: 1, createdAt: 1, "thumbnail.src": 1 },
            false,
            false,
            5,
            0,
            { createdAt: -1 },
            setLoadingJob
        );
        if (dta) {
            setJobData(dta.values);
        }
    };
    const getEventDetails = async () => {
        if (!user.value?.id) return;
        const dta = await eventfetcher.get_Public(
            { owner: user.value?.id, status: EApprovalState.approved },
            { name: 1, createdAt: 1, "thumbnail.src": 1 },
            false,
            false,
            5,
            0,
            { createdAt: -1 },
            setLoadingEvent
        );
        if (dta) {
            setEventData(dta.values);
        }
    };
    const getBlogDetails = async () => {
        if (!user.value?.id) return;
        const dta = await blogfetcher.get_Public(
            { owner: user.value?.id, status: EApprovalState.approved },
            { name: 1, createdAt: 1, "thumbnail.src": 1 },
            false,
            false,
            5,
            0,
            { createdAt: -1 },
            setLoadingBlog
        );
        if (dta) {
            setBlogData(dta.values);
        }
    };

    const getCompanyDetails = async () => {
        if (!user.value?.id) return;
        const dta = await companyfetcher.getMyCompanies(
            {},
            { "company.id": 1, "company.name": 1, createdAt: 1, "company.thumbnail.src": 1, "company.website": 1 },
            false,
            false,
            5,
            0,
            { createdAt: -1 },
            setLoadingCompany
        );
        if (dta) {
            setCompanyData(dta.values.map((v) => v.company));
        }
    };

    // convert string date to date object
    const getDate = (strdate) => {
        const date = new Date(strdate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    return (
        <>
            <div className="min-h-full">
                <main className="py-10">
                    {/* Page header */}
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        className="h-16 w-16 rounded-full"
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${userData?._id}?key=${userData?.thumbnail?.src}`}
                                        alt={`${userData?.name?.first} ${userData?.name?.last}`}
                                    />
                                    <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {userData?.name?.first} {userData?.name?.last}
                                </h1>
                                <p className="text-sm font-medium text-gray-500">
                                    Member Since <time dateTime={getDate(userData?.createdAt)}>{getDate(userData?.createdAt)}</time>
                                </p>
                            </div>
                        </div>
                        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                            <button
                                onClick={() => {
                                    router.push("/my/settings");
                                }}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            >
                                Edit Details
                            </button>
                            {user.value?.status > EUsertype.regular && (
                                <button
                                    onClick={() => {
                                        router.push("/editor/dashboard");
                                    }}
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                >
                                    Go To Dashboard
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                            {/* Description list*/}
                            <section aria-labelledby="applicant-information-title ">
                                <div className="bg-white shadow sm:rounded-lg border border-gray-300">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                                            My Information
                                        </h2>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Your personal details.</p>
                                    </div>
                                    <div className="border-t border-gray-300 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{userData?.email}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{userData?.phone}</dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">About</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{userData?.description}</dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">More about me</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{ReactHtmlParser(userData?.content)}</dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">Companies</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {" "}
                                                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        {companyData?.map((item, itemIdx) => (
                                                            <div
                                                                key={itemIdx}
                                                                className="relative flex items-center space-x-3 rounded-lg border border-indigo-600 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-700 focus-within:ring-offset-2 hover:border-indigo-800"
                                                            >
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full"
                                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}company-${item.id}?key=${item.thumbnail?.src}`}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <div className="focus:outline-none">
                                                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                                        <a className="truncate text-sm text-indigo-600 " href={item.website} target="_blank" rel="noreferrer">
                                                                            {item.website}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </dd>
                                            </div>

                                            {/* <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                        {attachments.map((attachment) => (
                                                            <li key={attachment.name} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                                <div className="flex w-0 flex-1 items-center">
                                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                    <span className="ml-2 w-0 flex-1 truncate">{attachment.name}</span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0">
                                                                    <a href={attachment.href} className="font-medium text-blue-600 hover:text-blue-500">
                                                                        Download
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </div> */}
                                        </dl>
                                    </div>
                                    {/* <div>
                                        <a href="#" className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg">
                                            Read full application
                                        </a>
                                    </div> */}
                                </div>
                            </section>
                        </div>

                        <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3 ">
                            <div className="bg-white px-4 py-5  shadow sm:rounded-lg sm:px-6 border border-gray-300">
                                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                                    My Job Postings
                                </h2>

                                {/* Activity Feed */}
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-mb-8">
                                        {jobData?.map((item, itemIdx) => (
                                            <li key={item._id}>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            {item.thumbnail && item.thumbnail?.src && (
                                                                <img
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}evt-${item._id}?key=${item.thumbnail?.src}`}
                                                                    alt="job thumbnail"
                                                                    className="h-full w-full"
                                                                />
                                                            )}
                                                            {!item.thumbnail?.src && item.thumbnail ? (
                                                                <img src={item.thumbnail} alt="job thumbnail" className="h-full w-full" />
                                                            ) : (
                                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div onClick={() => router.push(`/job/${item._id}`)}>
                                                                <p className="text-sm text-gray-500 hover:underline">{item.name}</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <time dateTime={getDate(item.createdAt)}>{getDate(item.createdAt)}</time>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                        {(!jobData || jobData.length == 0) && (
                                            <li>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div>
                                                                <p className="text-sm text-gray-500 hover:underline">You didn&#39;t posted any content yet!</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="justify-stretch mt-6 flex flex-col">
                                    <button
                                        onClick={() => {
                                            router.push("/job");
                                        }}
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        View All
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-5 mt-5  shadow sm:rounded-lg sm:px-6 border border-gray-300">
                                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                                    My Events
                                </h2>

                                {/* Activity Feed */}
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-mb-8">
                                        {eventData?.map((item, itemIdx) => (
                                            <li key={item._id}>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            {item.thumbnail && item.thumbnail?.src && (
                                                                <img
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}evt-${item._id}?key=${item.thumbnail?.src}`}
                                                                    alt="job thumbnail"
                                                                    className="h-full w-full"
                                                                />
                                                            )}
                                                            {!item.thumbnail?.src && item.thumbnail ? (
                                                                <img src={item.thumbnail} alt="job thumbnail" className="h-full w-full" />
                                                            ) : (
                                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div onClick={() => router.push(`/events/${item._id}`)}>
                                                                <p className="text-sm text-gray-500 hover:underline">{item.name}</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <time dateTime={getDate(item.createdAt)}>{getDate(item.createdAt)}</time>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                        {(!eventData || eventData.length == 0) && (
                                            <li>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div>
                                                                <p className="text-sm text-gray-500 hover:underline">You didn&#39;t posted any content yet!</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="justify-stretch mt-6 flex flex-col">
                                    <button
                                        onClick={() => {
                                            router.push("/events");
                                        }}
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        View All
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-5 mt-5  shadow sm:rounded-lg sm:px-6 border border-gray-300">
                                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                                    My Blog Posts
                                </h2>

                                {/* Activity Feed */}
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-mb-8">
                                        {blogData?.map((item, itemIdx) => (
                                            <li key={item._id}>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            {item.thumbnail && item.thumbnail?.src && (
                                                                <img
                                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog-${item._id}?key=${item.thumbnail?.src}`}
                                                                    alt="blog thumbnail"
                                                                    className="h-full w-full"
                                                                />
                                                            )}
                                                            {!item.thumbnail?.src && item.thumbnail ? (
                                                                <img src={item.thumbnail} alt="blog thumbnail" className="h-full w-full" />
                                                            ) : (
                                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div onClick={() => router.push(`/blog/${item._id}`)}>
                                                                <p className="text-sm text-gray-500 hover:underline">{item.name}</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <time dateTime={getDate(item.createdAt)}>{getDate(item.createdAt)}</time>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                        {(!blogData || blogData.length == 0) && (
                                            <li>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <span className="h-12 aspect-[16/9] w-auto overflow-hidden bg-gray-100">
                                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div>
                                                                <p className="text-sm text-gray-500 hover:underline">You didn&#39;t posted any content yet!</p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="justify-stretch mt-6 flex flex-col">
                                    <button
                                        onClick={() => {
                                            router.push("/blog");
                                        }}
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        View All
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Profile;

Profile.layout = "main";
