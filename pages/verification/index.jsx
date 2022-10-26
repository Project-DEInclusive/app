import Head from "next/head";
import Link from "next/link";

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, PlusIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

import dynamic from "next/dynamic";
import EUsertype from "../../types/enum/_common/EUsertype";
const DemoRequestForm = dynamic(() => import("../../components/forms/rolerequest"));
const Modal = dynamic(() => import("../../components/_common/modal"));

const includedFeaturesVerified = ["Add Events", "resource 2", "resource 3", "resource 4"];
const includedFeaturesPro = ["Add Jobs", "resource 2", "resource 3", "resource 4"];
const includedFeaturesBlogwritter = ["Write Blogs", "resource 2", "resource 3", "resource 4"];

const Index = () => {
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [role, setRole] = useState(EUsertype.default);
    return (
        <div>
            <Head>
                <title>DEInclusive - Verification</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className="max-w-7xl m-auto justify-center content-center mt-10 flex gap-x-5 lg:flex-row flex-wrap">
                <div className="max-w-lg mb-6 mx-auto rounded-lg shadow-lg overflow-hidden border w-96 lg:max-w-none min-w-5 hover:border-indigo-500 lg:flex flex-col">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Organize Your Event with Us.</h3>
                        <p className="mt-6 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What&#39;s included</h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {includedFeaturesVerified.map((feature) => (
                                    <li key={feature} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="pb-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center pt-0">

                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <button
                                    onClick={() => {
                                        setRole(EUsertype.verified);
                                        setShowDemoForm(true);
                                    }}
                                    type="button"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Verified
                                </button>
                            </div>
                            <p className="mt-4 text-sm">
                                <a href="#" className="font-medium text-gray-500 underline">
                                    Learn about this role
                                </a>
                            </p>
                        </div>
                        <div className="mt-4 text-sm">
                            <a href="#" className="font-medium text-gray-900">
                                Contact DEI team for
                                <span className="font-normal text-gray-500"> more info.</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mb-6 mx-auto rounded-lg shadow-lg overflow-hidden w-96 border hover:border-indigo-500 lg:max-w-none lg:flex flex-col">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Organize Your Event with Us.</h3>
                        <p className="mt-6 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What&#39;s included</h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {includedFeaturesPro.map((feature) => (
                                    <li key={feature} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center pt-0">

                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <button
                                    onClick={() => {
                                        setRole(EUsertype.pro);
                                        setShowDemoForm(true);
                                    }}
                                    type="button"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Pro
                                </button>
                            </div>
                            <p className="mt-4 text-sm">
                                <a href="#" className="font-medium text-gray-500 underline">
                                    Learn about this role
                                </a>
                            </p>
                        </div>
                        <div className="mt-4 text-sm">
                            <a href="#" className="font-medium text-gray-900">
                                Contact DEI team for
                                <span className="font-normal text-gray-500"> more info.</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto mb-6 rounded-lg shadow-lg overflow-hidden w-96 border hover:border-indigo-500 lg:max-w-none lg:flex flex-col">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Organize Your Event with Us.</h3>
                        <p className="mt-6 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What&#39;s included</h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {includedFeaturesBlogwritter.map((feature) => (
                                    <li key={feature} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center pt-0">

                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <button
                                    onClick={() => {
                                        setRole(EUsertype.blogwriter);
                                        setShowDemoForm(true);
                                    }}
                                    type="button"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Blog Writer
                                </button>
                            </div>
                            <p className="mt-4 text-sm">
                                <a href="#" className="font-medium text-gray-500 underline">
                                    Learn about this role
                                </a>
                            </p>
                        </div>
                        <div className="mt-4 text-sm">
                            <a href="#" className="font-medium text-gray-900">
                                Contact DEI team for
                                <span className="font-normal text-gray-500"> more info.</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={showDemoForm} setOpen={setShowDemoForm}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            <PlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                Request Role - {EUsertype[role]}
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Request role.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3">
                    <DemoRequestForm onSuccess={() => setShowDemoForm(false)} role={role}></DemoRequestForm>
                </div>
            </Modal>
        </div>
    );
};

export default Index;

Index.layout = "main";