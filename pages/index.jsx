import Head from "next/head";
import Link from "next/link";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

import fetchnewsletter from "../constants/fetch/newsletter";
import dynamic from "next/dynamic";
const DemoRequestForm = dynamic(() =>
  import("../components/forms/demorequest")
);
const Modal = dynamic(() => import("../components/_common/modal"));

const features = [
  {
    name: "Recruit On DEInclusive",
    description:
      "Attend a webinar and the employer will hire according to your skillset or you can directly apply to the suitable job.",
    icon: GlobeAltIcon,
  },
  {
    name: "Build & Construct Career Roadmap",
    description:
      "Confused/Under confidence or facing challenges in communication. Don't worry! Our expert soft-skill trainer will help you.",
    icon: ScaleIcon,
  },
  {
    name: "Encourage Underserved Communities",
    description:
      "We encourage and help the underserved communities to get free and fair opportunities to grow career without any social discrimination.",
    icon: LightningBoltIcon,
  },
  {
    name: "Free Interaction Webinar For All",
    description:
      "On community demand, we organize different events that help to groom personality & get a high-paid salary.",
    icon: AnnotationIcon,
  },
];

const eventfeatures = [
  {
    name: "Career Fair",
    description:
      "We organize a career fair where employers hunt for diverse talent & skilled workforce. ",
  },
  {
    name: "Job Openings",
    description:
      "We mainly focused on underserved communities and provide jobs to them without any human injustice.",
  },
  {
    name: "Career Awareness",
    description:
      "We help you to describe your career attitudes, your knowledge, and your life experiences.",
  },
  {
    name: "Recruiting",
    description:
      "We provide an interactive platform where recruiters catch up with diverse talents as per their requirements.",
  },
  {
    name: "Startup Events",
    description:
      "We help startups to grow at 10X  times and provide all necessary mentorship to the startup.We help minimise cost of talent acquisition and also help in retaining talent.",
  },
  {
    name: "Career Gurus",
    description:
      "Master Gurus can help a person overcome their doubts and weakness and get a job in the skill they are good at.",
  },
];

// export async function getServerSideProps(context) {
//   const { res } = context;
//   const session = await getSession(context);

//   if (!session) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     return res.end();
//   }
//   console.log("session", session);
//   return {
//     props: { session },
//   };
// }

const Home = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState("");
  const submitEmail = async (e) => {
    e.preventDefault();
    // if (email?.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    //     alert("Invaid Email");
    //     return;
    // }
    await fetchnewsletter.subscribe(email, (load) => {});
  };
  return (
    <div>
      <Head>
        <title>DEInclusive</title>
      </Head>
      <main>
        <div className="w-full z-10 h-full ">
          <section className="py-32  mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Connecting Opportunities
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  to underserved communities.
                </span>
              </h1>
              <p className="mt-3 text-gray-700 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-4xl">
                We connect diverse talent to top employers through{" "}
                <span className="text-indigo-600">virtual events.</span>
                featuring prominent keynotes, virtual information sessions,
                online recruiter Q&As, and unmatched job search assistance, the
                <span className="text-indigo-600"> DEInclusive</span> is the
                best place to land your dream job!
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/donate">
                    <div className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-800 md:py-4 md:text-lg md:px-10">
                      Donate
                    </div>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    onClick={() => setShowDemoForm(true)}
                    className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Request demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}

          <section className="w-full bg-white">
            <div className="py-14 lg:py-32 mx-auto container max-w-7xl px-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base text-center lg:text-start text-indigo-600 font-semibold tracking-wide uppercase">
                    connecting communities
                  </h2>
                  <p className="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Recruiting on a Whole New Level{" "}
                    <span className="text-red-500">!</span>
                  </p>
                  <p className="mt-4 lg:max-w-3xl text-xl text-gray-500 lg:mx-auto">
                    <span className="font-bold">DEInclusive</span> is a Platform
                    where you will get an opportunity to directly interact with
                    employers via an event & based on your skillset employers
                    will hire you.
                  </p>
                </div>

                <div className="mt-20">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
                    {features.map((feature, index) => (
                      <div key={index} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200 text-indigo-700">
                            <feature.icon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* CEO's Message  */}
          {/* <section className="bg-slate-100 overflow-hidden py-6">
            <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
              <svg
                className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
                />
              </svg>

              <svg
                className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
                />
              </svg>

              <div className="relative lg:flex lg:items-center">
                <div className="hidden lg:block lg:flex-shrink-0">
                  <img
                    className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                    src="/img/hari-pulijala.jpeg"
                    alt=""
                  />
                </div>

                <div className="relative lg:ml-10">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 144 144"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth={2}
                      d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                    />
                  </svg>
                  <blockquote className="relative">
                    <div className="text-2xl leading-9 font-medium text-gray-900">
                      <p>
                        In a world where glass ceiling has been persistent over
                        the course of many years, DEInclusive is a platform
                        which works in the best interest of diverse communities.
                        Thanks to DEInclusive i was able to break through the
                        glass ceiling. DEInclusive brings employability skills
                        to the table. it doesn&apos;t put people in boxes.
                        Instead, DEInclusive tries to bring out the best in
                        people. I&apos;m glad I gave DEInclusive a chance
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex">
                        <div className="flex-shrink-0 lg:hidden">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="/img/hari-pulijala.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="ml-4 lg:ml-0">
                          <div className="text-base font-medium text-gray-900">
                            Hari P.
                          </div>
                          <div className="text-base font-medium text-indigo-600">
                            CEO, DEInclusive
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section> */}

          {/* Start your journey with us  */}

          <div className="bg-indigo-700">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Find your opportunities.</span>
                <span className="block">Start using DEInclusive today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Start your free account and stay connected with employers.
              </p>
              <Link href={"/auth/signup"}>
                <span className="mt-8 cursor-pointer w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                  Sign up for free
                </span>
              </Link>
            </div>
          </div>
          <section className="bg-white">
            <div className="bg-white max-w-7xl px-4 mx-auto container">
              <div className="w-full py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Organize Events
                  </h2>
                  <p className="mt-4 text-gray-500">
                    You can create events and share them with your community.
                    You will be able to add a date and time to your event, and
                    add a description.
                  </p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {eventfeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="border-t border-gray-200 pt-4"
                      >
                        <dt className="font-medium text-indigo-600">
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                  <img
                    src="/img/event1.webp"
                    alt="Event 1."
                    className="bg-gray-100 h-full w-full object-center object-cover lg:w-fit lg:h-fit rounded-lg"
                  />
                  <img
                    src="/img/event2.webp"
                    alt="Event 2."
                    className="bg-gray-100 h-full w-full object-center object-cover lg:w-fit lg:h-fit rounded-lg"
                  />
                  <img
                    src="/img/event3.webp"
                    alt="Event 3."
                    className="bg-gray-100 h-full w-full object-center object-cover lg:w-fit lg:h-fit rounded-lg"
                  />
                  <img
                    src="/img/event4.webp"
                    alt="Event 4."
                    className="bg-gray-100 h-full w-full object-center object-cover lg:w-fit lg:h-fit rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* News Letter  */}
          <div className="bg-slate-100">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Sign up for our{" "}
                  <span className="text-indigo-600">Newsletter</span>
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Get latest update to attend event & grab upcoming excited
                  opportunities to grow career only on Deinclusive.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
              <form className="sm:flex" onSubmit={submitEmail}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our{" "}
                  <Link href="/privacy">
                    <span className="font-medium cursor-pointer underline">
                      Privacy Policy.
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal open={showDemoForm} setOpen={setShowDemoForm}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
              <PlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Request System Demo
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Request system demonstration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3">
          <DemoRequestForm
            onSuccess={() => setShowDemoForm(false)}
          ></DemoRequestForm>
        </div>
      </Modal>
    </div>
  );
};

export default Home;

Home.layout = "main";

// export async function getStaticProps() {
//   const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
