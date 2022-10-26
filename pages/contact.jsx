/*    Imports    */
import { useState } from "react";
import Head from "next/head";

import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import fetcher from "../constants/fetch/contact";
import CContact from "../types/classes/contact/CContact";

const Contact = () => {
  const [dataObj, setDataObj] = useState(new CContact());
  const [errors, setErrors] = useState({}); // errors object
  const [loading, setLoading] = useState(false);

  // submit data to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact : ", dataObj);
    await fetcher.create(dataObj, false, setLoading);
    NotificationManager.success("Message Sent!", "Success");
    clear();
  };
  // reset data
  const clear = () => {
    setDataObj({
      name: {
        first: "",
      },
      email: "",
      phone: "",
      title: "",
      message: "",
    });
  };
  // handle change of input fields
  const handleChange = (e) => {
    const paras = e.target.name.split(".");
    const value = e.target.value;

    if (paras.length === 1) setDataObj({ ...dataObj, [paras[0]]: value });
    else if (paras.length === 2)
      setDataObj({
        ...dataObj,
        [paras[0]]: { ...dataObj[paras[0]], [paras[1]]: value },
      });
    else if (paras.length === 3)
      setDataObj({
        ...dataObj,
        [paras[0]]: {
          ...dataObj[paras[0]],
          [paras[1]]: { ...dataObj[paras[0]][paras[1]], [paras[2]]: value },
        },
      });
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="w-full bg-blend-darken bg-gray-400 relative">
        <img
          src="/img/diversity.webp"
          className="h-[200px] w-full object-cover"
          alt=""
        />
        <h1 className="absolute text-white font-bold text-4xl z-10">
          Contact Us
        </h1>
      </div>
      <div className="relative py-10">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How Can We Help You?
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Need Help, Don’t worry we are here for you. Please draft a mail
                to us at{" "}
                <span className="text-indigo-600">support@deinclusive.com</span>{" "}
                we would love to help you or you can call us on the given
                number.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Alpharetta, GA 30005</p>
                    <p>United States</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">(+1)4706283793</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@deinclusive.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                Looking for careers?
                {/* <Link href="/jobs" passHref>
									<div className="cursor-pointer font-medium text-gray-700 underline">
										View all job openings.
									</div>
								</Link> */}
              </p>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="name.first" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name.first"
                    id="name.first"
                    required
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                    value={dataObj?.name?.first}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    value={dataObj?.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                    value={dataObj?.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="title" className="sr-only">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Title"
                    value={dataObj?.title}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    value={dataObj?.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <NotificationContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

Contact.layout = "main";
