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
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                            <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width={404} height={392} fill="none" viewBox="0 0 404 392">
                                <defs>
                                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            {/* Testimonial card*/}
                            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img className="absolute inset-0 h-full w-full object-cover" src="/img/fish.webp" alt="" />
                                <div className="absolute inset-0 bg-slate-500 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-600 via-slate-400 opacity-90" />
                                <div className="relative px-8">
                                    <div>
                                        <img className="h-12" src="/img/DEInclusive Logo - Final 2.png" alt="Workcation" />
                                    </div>
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-slate-400"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="relative">
                                                In a world where glass ceiling has been persistent over the course of many years, DEInclusive is a platform which works in the best
                                                interest of diverse communities. Thanks to DEInclusive i was able to break through the glass ceiling. DEInclusive brings
                                                employability skills to the table. it doesn&apos;t put people in boxes. Instead, DEInclusive tries to bring out the best in people.
                                                I&apos;m glad I gave DEInclusive a chance
                                            </p>
                                        </div>

                                        <footer className="mt-4">
                                            <p className="text-base font-semibold text-indigo-200">Hari P, CEO at DEInclusive</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Our Service</h2>
                            <div className="mt-6 text-gray-500 space-y-6">
                                <p className="text-lg">
                                    <span className="font-bold">DEInclusive </span> helps the diverse job seeker to get an opportunity to directly interact with employers via
                                    events & based on their skillset, recruiters will hire them. We connect & help diverse talents to make smarter choices in navigating their job
                                    search and career paths to optimize their career potential and fulfilment.
                                </p>
                                <h2 className="font-bold text-gray-700 text-2xl">Our Mission</h2>
                                <p className="text-base leading-7">
                                    <span className="font-bold">DEInclusive </span>
                                    started as an alternative to staffing consultancy. Our service now supports and helps a variety of communities like people of color, LGBTQ+,
                                    Women.. Many communities feel humiliated & discriminated against and struggle a lot to get a good job and there comes DEInclusive. We not only
                                    help them to provide jobs but also groom their personality and confidence, which is why we work consistently for them and stay connected. Behind
                                    every community, our decision is our desire to let people get jobs anywhere in the world through our event without any barriers.
                                </p>
                                <h2 className="font-bold text-gray-700 text-2xl">Our Team</h2>
                                <p className="text-base leading-7">
                                    <span className="font-bold">DEInclusive </span> was founded by Hari who had previously spent 15 years combined in the Staffing consulting
                                    industry. Tarun joined at an early stage to back the startup, who is a Youtuber and has experience in the sales, marketing sector and worked as
                                    career coach. We focus on building a company that does justice to all the communities and provide opportunities to them so that work anywhere in
                                    the world without any humiliation or discrimination. We believe that by simply shifting our perspectives to take a broader view of our careers,
                                    we can bridge learning and jobs more effectively and purposefully. With our passion for technology and data, user experience, and social good,
                                    we created <span className="font-bold">DEInclusive </span>.
                                </p>
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
									Learn more about how we're changing the world{" "}
									<span aria-hidden="true">&rarr;</span>{" "}
								</a>
							</div>
						</div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

About.layout = "main";
