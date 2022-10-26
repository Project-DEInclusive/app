/*    Imports    */
import { useState } from "react";
import fetcher from "../../constants/fetch/demo";
import CDemo from "../../types/classes/demo/CDemo";

const DemoRequest = (props) => {
    const [dataObj, setDataObj] = useState(new CDemo());
    const [errors, setErrors] = useState({}); // errors object
    const [loading, setLoading] = useState(false);

    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Demo : ", dataObj);
        await fetcher.create(dataObj, false, setLoading);
        props?.onSuccess();
        clear();
    };
    // reset data
    const clear = () => {
        setDataObj(new CDemo());
    };
    // handle change of input fields
    const handleChange = (e) => {
        const paras = e.target.name.split(".");
        const value = e.target.value;

        if (paras.length === 1) setDataObj({ ...dataObj, [paras[0]]: value });
        else if (paras.length === 2) setDataObj({ ...dataObj, [paras[0]]: { ...dataObj[paras[0]], [paras[1]]: value } });
        else if (paras.length === 3) setDataObj({ ...dataObj, [paras[0]]: { ...dataObj[paras[0]], [paras[1]]: { ...dataObj[paras[0]][paras[1]], [paras[2]]: value } } });
    };
    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
                <label htmlFor="requester.name" className="sr-only">
                    Full name
                </label>
                <input
                    type="text"
                    name="requester.name"
                    id="requester.name"
                    required
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="requester.email" className="sr-only">
                    Email
                </label>
                <input
                    id="requester.email"
                    name="requester.email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="requester.phone" className="sr-only">
                    Phone
                </label>
                <input
                    type="text"
                    name="requester.phone"
                    id="requester.phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Phone"
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
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default DemoRequest;
