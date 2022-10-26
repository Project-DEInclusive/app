import Head from "next/head";

const stats = [
    { label: "Founded", value: "2022" },
    { label: "Employees", value: "5" },
    { label: "Beta Users", value: "521" },
    { label: "Raised", value: "$25M" },
];
const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="relative bg-slate-100 py-16 sm:py-24">
                <div className="relative mx-64">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Terms and Conditions</h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="font-bold">Welcome to DEInclusive!</p>
                            <p className="text-lg">
                                By accessing this website we assume you accept these terms and conditions. Do not continue to use DEInclusive if you do not agree to take all of the
                                terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice,
                                and all Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to you, the person who logs on this website and is compliant
                                with the Company&apos;s terms and conditions. &apos;The Company&apos;, &apos;Ourselves&apos;, &apos;We&apos;, &apos;Our&apos; and &apos;Us&apos;,
                                refers to our Company.&apos;Party&apos;, &apos;Parties&apos;, or &apos;Us&apos;, refers to both the Client and ourselves. All terms refer to the
                                offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner
                                for the express purpose of meeting the Client&apos;s needs in respect of the provision of the Company&apos;s stated services, in accordance with and
                                subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or
                                they, are taken as interchangeable and therefore as referring to the same.
                            </p>
                            <h2 className="font-bold text-gray-700 text-2xl">1. Cookies</h2>
                            <p className="text-base leading-7">
                                We employ the use of cookies. By accessing DEInclusive, you agreed to use cookies in agreement with the DEInclusive&apos;s Privacy Policy. Most
                                interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the
                                functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                            </p>
                            <h2 className="font-bold text-gray-700 text-2xl">2. License</h2>
                            <p className="text-base leading-7">
                                Unless otherwise stated, DEInclusive and/or its licensors own the intellectual property rights for all material on DEInclusive. All intellectual
                                property rights are reserved. You may access this from DEInclusive for your personal use, subject to restrictions set in these terms and conditions.
                                You must not:
                            </p>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    {/* Stats section */}
                    {/* <div className="mt-10">
							<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
								{stats.map((stat) => (
									<div
										key={stat.label}
										className="border-t-2 border-gray-100 pt-6"
									>
										<dt className="text-base font-medium text-gray-500">
											{stat.label}
										</dt>
										<dd className="text-3xl font-extrabold tracking-tight text-gray-900">
											{stat.value}
										</dd>
									</div>
								))}
							</dl>
							<div className="mt-10">
								<a href="#" className="text-base font-medium text-indigo-600">
									{" "}
									Learn more about how we&apos;re changing the world{" "}
									<span aria-hidden="true">&rarr;</span>{" "}
								</a>
							</div>
						</div> */}
                </div>
            </div>
        </>
    );
};

export default About;

About.layout = "main";
