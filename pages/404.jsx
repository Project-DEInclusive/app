import Head from "next/head";
import Link from "next/link";

const Page404 = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>

            <div className="min-h-screen pt-16 pb-12 flex flex-col justify-center items-center bg-white">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex-shrink-0 flex justify-center">
                        <Link href="/">
                            <div className="inline-flex">
                                <span className="sr-only">Workflow</span>
                                <img className="h-12 w-auto" src="/img/DEInclusive Logo - Final icon.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                            <p className="mt-2 text-base text-gray-500">Sorry, we couldn&quot;t find the page you&quot;re looking for.</p>
                            <div className="mt-6">
                                <Link href="/" passHref>
                                    <div className="text-base cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                        Go back home<span aria-hidden="true"> &rarr;</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex justify-center space-x-4">
                        <Link href="/contact">
                            <div className="text-sm cursor-pointer font-medium text-gray-500 hover:text-gray-600">Contact Support</div>
                        </Link>

                        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                        <Link href="/about">
                            <div className="text-sm cursor-pointer font-medium text-gray-500 hover:text-gray-600">About</div>
                        </Link>
                        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                        <Link href="https://twitter.com/DEInclusive" target={"_blank"}>
                            <span className="text-sm cursor-pointer font-medium text-gray-500 hover:text-gray-600">Twitter</span>
                        </Link>
                    </nav>
                </footer>
            </div>
        </>
    );
};
export default Page404;

Page404.layout = "main";
