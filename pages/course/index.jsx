import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Courses</title>
            </Head>
            <div>
                <div className="container my-12 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <a href="#">
                                    <img alt="Placeholder" className="block h-auto w-full" src="/img/ml.webp" />
                                </a>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a className="no-underline hover:underline font-bold text-black" href="#">
                                            Introduction to ML
                                        </a>
                                    </h1>
                                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">3 Months</p>
                                </header>

                                <div>
                                    <p className="px-4">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                    </p>
                                </div>

                                <div className="px-4 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ML</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Software</span>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                        <p className="ml-2 text-sm">Virtusa</p>
                                    </a>
                                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                        <div className="flex flex-row">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="text-sm m-auto ml-2 justify-center ">Jhon.M Heart</p>
                                        </div>
                                    </a>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

Contact.layout = "main";
