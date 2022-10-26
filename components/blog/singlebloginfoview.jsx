import { DotsVerticalIcon, StarIcon, BriefcaseIcon, ClockIcon, CashIcon, FireIcon, UserAddIcon, LocationMarkerIcon, StopIcon } from "@heroicons/react/solid";
const Component = ({ blog, onClick }) => {
    const getDateDiffString = (date) => {
        const diff = new Date() - new Date(date);
        const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diff / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diff / (1000 * 60));
        if (diffDays > 0) {
            return `${diffDays} days ago`;
        } else if (diffHours > 0) {
            return `${diffHours} hours ago`;
        } else if (diffMinutes > 0) {
            return `${diffMinutes} minutes ago`;
        } else {
            return "just now";
        }
    };
    function formatAMPM(_date) {
        const date = new Date(_date);
        var first = date.toDateString();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = first + " " + hours + ":" + minutes + " " + ampm;
        return strTime;
    }
    const IsNew = (date) => {
        return new Date() - new Date(date) / (1000 * 60 * 60) < 36;
    };
    const IsOver = () => {
        if (!blog.time) return false;
        return new Date(blog.time.endtime).getTime() < new Date().getTime();
    };

    return (
        <>
            <div className={`border cursor-pointer rounded-lg  shadow-lg hover:border-indigo-700 my-4 border-gray-300`} onClick={onClick}>
                <div className="flex relative w-full">
                    <div>
                        {IsNew(blog?.createdAt) && (
                            <span className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm text-xs font-medium bg-green-100 text-green-800"> New </span>
                        )}
                        {blog?.featured == true && (
                            <span className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm text-xs font-medium bg-cyan-100 text-cyan-800"> Featured </span>
                        )}
                    </div>
                    <DotsVerticalIcon className="w-7 h-7 mr-4 mt-3 border border-gray-300 absolute right-0 left-auto rounded-full bg-white px-1 py-1 text-gray-800" />
                    <img
                        className=" mt-0  w-full rounded-t-md aspect-[16/9]"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?._id}?key=${blog?.thumbnail?.src}`}
                        alt={blog?.name}
                    />
                </div>
                <div className="px-5 py-3">
                    <h3 className="text-gray-800 font-semibold text-xl hover:underline">{blog?.name}</h3>
                    {/* <p className="text-gray-600 flex flex-row text-sm align-middle">
                        {blog?.company?.name}
                        <span className="font-semibold ml-4 text-gray-700  inline-flex">
                            2.9 <StarIcon className="w-5 h-5 ml-1 text-gray-500" />
                        </span>
                    </p> */}
                    <div className="inline-flex text-gray-700 font-medium">
                        <p>{blog?.category}</p>
                        {/* <LocationMarkerIcon className="w-5 h-5 text-gray-500 mr-1 ml-4" />
                        <p className="font-normal text-sm text-gray-500  hover:underline">
                            {blog?.place?.city}, {blog?.place?.state}, {blog?.place?.country}
                        </p> */}
                    </div>
                    {/* <div className="flex flex-row gap-x-3 gap-y-2 flex-wrap mt-1">
                        <div className="bg-gray-200 py-1 px-2 rounded-md text-sm">
                            <span className="font-bold text-gray-700 inline-flex align-middle">
                                <ClockIcon className="w-5 h-5 mr-2 " /> {formatAMPM(blog?.time?.starttime)}
                            </span>
                        </div>
                    </div> */}
                    {blog?.tags && blog?.tags.length > 0 && (
                        <div className="flex flex-row gap-x-3 flex-wrap mt-3">
                            {blog?.tags.map((tag, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="flex align-middle justify-between gap-x-3 mt-4">
                        <p className="text-gray-500 text-xs">posted {getDateDiffString(blog?.createdAt)}</p>
                        <div className="flex  px-1 items-center -space-x-1 overflow-hidden">
                            {blog?.schedule?.map((schedule) =>
                                schedule?.speakers
                                    .slice(0, 3)
                                    .map((speaker, index) => (
                                        <img
                                            layout="fill"
                                            key={index}
                                            className="inline-block object-center object-cover h-6 w-6 rounded-full ring-2 ring-white"
                                            src={speaker?.thumbnail?.src}
                                            alt={speaker?.name}
                                        />
                                    ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Component;
