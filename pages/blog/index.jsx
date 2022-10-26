/*    Imports    */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import fetcher from "../../constants/fetch/blog";
import collectionfetcher from "../../constants/fetch/collection";

import SingleBlogCard from "../../components/blog/singlebloginfoview";
import SingleBlogCardLoading from "../../components/blog/singlebloginfoviewloading";

const requiredProps = {
    name: 1,
    category: 1,
    featured: 1,
    time: 1,
    "thumbnail.src": 1,
    "place.city": 1,
    "place.state": 1,
    "place.country": 1,
    createdAt: 1,
};

const types = [
    { name: "All", value: 0 },
    { name: "Upcoming", value: 1 },
    { name: "Live", value: 2 },
    { name: "Past", value: 3 },
];

const Index = ({ _collections }) => {
    const router = useRouter();
    //const [_collections, _setCollections] = useState(); // collections object
    const [blogs, setBlogs] = useState([]); // blogs object
    const [clearBlogs, setClearBlogs] = useState(false);
    const [filterChange, setFilterChange] = useState(false);

    const [_up, _setUp] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchObj, setSearchObj] = useState();

    const [loading, setLoading] = useState(false);

    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect(() => {
    //     getCollections();
    // }, []);

    // update data on change of the parameters
    useEffect(() => {
        // wait until roter.isReady is true
        if (router.isReady) {
            if (!searchObj) {
                setSearchObj(router.query);
            }
            if (router.query.search) {
                setSearchText(router.query.search);
            }
            fetchdata();
        }
    }, [_up, router.isReady]);

    // tigger the update of the data
    const updateUI = () => {
        _setUp(!_up);
    };

    // data fetching main function
    const fetchdata = async () => {
        const res = await fetcher.get_Public(
            buildSearchQuery(),
            requiredProps,
            true,
            false,
            10,
            clearBlogs ? 0 : currentPage - 1,
            router.query.sort ? JSON.parse(router.query.sort) : { createdAt: -1 },
            setLoading
        );
        if (res != null) {
            if (clearBlogs) {
                setBlogs(res.values);
                setCurrentPage(1);
                setClearBlogs(false);
            } else setBlogs([...blogs, ...res.values]);
            setTotal(res.count);
            setPages(Math.ceil(res.count / res.itemsperpage));
            setFilterChange(false);
        }
        if (searchObj != null) router.push({ query: { ...searchObj } });
    };

    // get search query according to the parameters
    const buildSearchQuery = () => {
        let query = { ...(searchObj == null ? router.query : searchObj) };
        if (query["type"]) {
            switch (query["type"]) {
                case "1":
                    query["time.starttime"] = { $gt: new Date() };
                    break;
                case "2":
                    query = {
                        ...query,
                        "time.starttime": { $lte: new Date() },
                        "time.endtime": { $gt: new Date() },
                    };
                    break;
                case "3":
                    query["time.endtime"] = { $lt: new Date() };
                    break;
            }
            query["type"] = undefined;
        }
        if (query["search"]) {
            query["name"] = { $regex: query["search"], $options: "i" };
            query["search"] = undefined;
        }
        return query;
    };

    const categoryChange = (e) => {
        setSearchObj({ ...searchObj, category: e.target.value == "All" ? undefined : e.target.value });
    };
    const searchChange = (e) => {
        setSearchText(e.target.value);
        setSearchObj({ ...searchObj, search: e.target.value });
        setFilterChange(true);
    };

    const applyFilter = () => {
        setClearBlogs(true);
        updateUI();
    };

    const clearFilter = () => {
        setSearchText("");
        setFilterChange(true);
        setSearchObj({});
        setClearBlogs(true);
        updateUI();
    };

    const loadMore = () => {
        if (pages > currentPage) {
            setCurrentPage(currentPage + 1);
            updateUI();
        }
    };

    // get required collection values
    const getCollectionValues = (key) => {
        if (_collections == null) return [];
        const res = _collections.find((x) => x.key == key);
        if (res == null) return [];
        return res.values;
    };

    return (
        <main className="max-w-7xl mx-auto">
            <div className="md:pt-6 lg:py-12">
                <h1 className="text-gray-800 font-bold text-3xl text-center mb-4 md:mb-0 ">Blog</h1>
                <div className="mx-auto justify-center px-4 py-t md:pt-6 lg:pt-12 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-x-5">
                    <div className="mt-1 mb-2 flex rounded-md shadow-sm w-full lg:w-5/12">
                        <span className="inline-flex items-center font-semibold px-4 rounded-l-md border border-r-0 border-gray-700 text-gray-700 sm:text-sm">What</span>
                        <input
                            type="text"
                            value={searchText}
                            onChange={searchChange}
                            placeholder="Keyword, blog title, or company name"
                            className="block  border-l-0 w-full py-3 shadow-sm  sm:text-sm border-gray-700 rounded-r-md focus:ring-0 focus:border-gray-700"
                        />
                    </div>
                    <div className="mt-1 flex mb-2 rounded-md shadow-sm w-full lg:w-5/12">
                        <span className="inline-flex items-center font-semibold px-4 rounded-l-md border border-r-0 border-gray-700 text-gray-700 sm:text-sm">Category</span>
                        <select
                            value={(searchObj && searchObj.category) || router.query.category || 0}
                            onChange={categoryChange}
                            className="block border-l-0 w-full py-3 shadow-sm  sm:text-sm border-gray-700 rounded-r-md focus:ring-0 focus:border-gray-700"
                        >
                            <option selected disabled value={""}>
                                Select Category
                            </option>
                            <option value="All">All</option>
                            {getCollectionValues("blogcategory").map((v) => (
                                <option key={v.key} value={v.value}>
                                    {v.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-1 mb-2 flex rounded-md shadow-sm w-full lg:w-auto">
                        <button
                            disabled={loading}
                            onClick={applyFilter}
                            className="flex items-center w-full justify-center px-4 py-2 border border-transparent text-base  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        >
                            Find Blogs
                        </button>
                    </div>
                </div>
                <div className="flex flex-row align-middle justify-center mb-8 mt-3 px-3 text-center">
                    <p className="text-gray-700 mt-3 text-base font-semibold">
                        This section will provide you with insightful articles put forth by our research team who takes pride in keeping up with the professional world!
                        
                    </p>
                </div>
                <div className="mx-auto border-b border-gray-200 pb-8 px-4  sm:px-6 md:px-8 flex justify-center flex-row flex-wrap gap-x-5 gap-y-3 justify-items-stretch">
                    {searchObj && Object.keys(searchObj).length > 0 && (
                        <>
                            <button
                                onClick={clearFilter}
                                className="flex items-center justify-center w-full md:w-auto px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-100 border-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                            >
                                Reset Filter
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="mx-auto px-4 sm:px-6">
                <div className="mt-10 lg:mt-0">
                    <h2 className="text-gray-800 font-semibold text-xl">
                        {types.filter((v) => v.value == ((searchObj && searchObj.type) || router.query.type || 0))[0].name} Posts (Found {total} posts)
                    </h2>

                    <div className="mt-4 flex flex-row ">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 flex-wrap ">
                            {blogs &&
                                blogs.length > 0 &&
                                blogs?.map((blog, index) => <SingleBlogCard key={index} blog={blog} onClick={() => router.push(`/blog/${blog._id}`)}></SingleBlogCard>)}

                            {(!blogs || filterChange || blogs.length == 0) &&
                                loading &&
                                Array(10)
                                    .fill(1)
                                    .map((_, index) => <SingleBlogCardLoading key={index}></SingleBlogCardLoading>)}
                            {blogs && total > blogs.length && (
                                <button
                                    disabled={loading}
                                    onClick={loadMore}
                                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    {loading ? "Loading..." : "Load More"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

Index.getInitialProps = async (ctx) => {
    return {
        _collections: await collectionfetcher.getCollections(["blogcategory"], () => {}),
    };
};

Index.layout = "main";

export default Index;
