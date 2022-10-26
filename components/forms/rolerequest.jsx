/*    Imports    */
import { useState, useEffect } from "react";
import fetcher from "../../constants/fetch/roleverification";
import CRoleVerification from "../../types/classes/roleverification/CRoleVerification";

import useUserStore from "../../constants/stores/userstore";

const RoleVerificationRequest = (props) => {
    const [dataObj, setDataObj] = useState(new CRoleVerification());
    const [errors, setErrors] = useState({}); // errors object
    const [loading, setLoading] = useState(false);

    const user = useUserStore((state) => state);

    useEffect(() => {
        dataObj["role"] = props.role;
        dataObj["requester"] = { name: `${user?.value?.name?.first} ${user?.value?.name?.last}`, email: user?.value?.email, thumbnail: user?.value?.thumbnail };
    }, []);

    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("RoleVerification : ", dataObj);
        await fetcher.create(dataObj, false, setLoading);
        props?.onSuccess();
        clear();
    };
    // reset data
    const clear = () => {
        setDataObj(new CRoleVerification());
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
                <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
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
                    Request
                </button>
            </div>
        </form>
    );
};

export default RoleVerificationRequest;
