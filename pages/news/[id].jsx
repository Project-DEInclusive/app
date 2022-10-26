/*    Imports    */
import { useRouter } from "next/router";

import fetcher from "../../constants/fetch/news";
import ReactHtmlParser from "react-html-parser";

import { CalendarIcon } from "@heroicons/react/solid";

// const requiedFields = { _id: 1, name: 1, description: 1, content: 1, thumbnail: 1, createdAt: 1 };

export async function getServerSideProps(context) {
    const cookie = context?.req?.headers?.cookie;
    if (!context.query.id) return { props: { news: null }, notFound: true };
    const news = await fetcher.getById_Public(context.query.id, {}, () => {}, {
        headers: {
            Cookie: cookie,
        },
    });
    return {
        notFound: !news,
        props: { news },
    };
}

const Index = ({ news }) => {
    const router = useRouter();

    // convert string date to date object
    const getDate = (strdate) => {
        const date = new Date(strdate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`;
    };

    return (
        <main className="max-w-7xl mx-auto px-10">
            <div className="mt-10">
                <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6mt-3 text-gray-500 md:gap-x-8 lg:gap-x-8">
                    <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                        <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${news._id}?key=${news.thumbnail.src}`} alt={news.name} className="object-center object-cover w-full" />
                        </div>
                    </div>
                    <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                        <h1 className="text-3xl font-semibold text-gray-900">{news.name}</h1>
                        {/* <p className="font-medium text-gray-400 mt-2 mb-3 flex flex-row">
                            <CalendarIcon className="w-5 h-5 mr-5" />
                            {getDate(news.time.starttime)}
                        </p> */}
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">Post Description</h3>
                        <p className="text-gray-500 mt-3 text-base">{news.description}</p>
                    </div>
                    <div className="sm:col-span-12 md:col-span-7">
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">News Article</h3>
                        <div className="text-gray-800 mt-6 text-base">{ReactHtmlParser(news.content)}</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;

Index.layout = "main";