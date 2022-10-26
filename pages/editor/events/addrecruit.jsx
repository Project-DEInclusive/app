/*    Imports    */
import { useState, useEffect, useRef } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import CRecruit from "../../../types/classes/recruit/CRecruit";

//import collectionfetcher from "../../../constants/fetch/collection";

// form component
const Add = (props) => {
    // form state object
    const [dataObj, setDataObj] = useState(props.data || new CRecruit());
    const [errors, setErrors] = useState({}); // errors object
    const [_collections, _setCollections] = useState(); // collections object

    const [thumbnail, setThumbnail] = useState(null);
    const [thumblstup, setThumblstup] = useState(null);

    // ckeditor state object and props
    const editorRef = useRef();
    const pageRef = useRef();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const { ClassicEditor } = editorRef.current || {};
    useEffect(() => {
        editorRef.current = {
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
        setEditorLoaded(true);
        //getCollections();
    }, []);

    // get required collections
    // const getCollections = async () => {
    //     if (_collections == null) _setCollections(await collectionfetcher.getCollections(["jobcategory", "countries"], () => {}));
    // };

    // get required collection values
    // const getCollectionValues = (key) => {
    //     if (_collections == null) return [];
    //     const res = _collections.find((x) => x.key == key);
    //     if (res == null) return [];
    //     return res.values;
    // };

    // handle change of input fields
    const handleChange = (e) => {
        if (props.readOnlyProps && props.readOnlyProps.includes(e.target.name)) return;

        const paras = e.target.name.split(".");
        const value = e.target.value;

        if (paras.length === 1) setDataObj({ ...dataObj, [paras[0]]: value });
        else if (paras.length === 2) setDataObj({ ...dataObj, [paras[0]]: { ...dataObj[paras[0]], [paras[1]]: value } });
        else if (paras.length === 3) setDataObj({ ...dataObj, [paras[0]]: { ...dataObj[paras[0]], [paras[1]]: { ...dataObj[paras[0]][paras[1]], [paras[2]]: value } } });
    };

    // check if all required fields are filled and vaild
    const validate = (mode = 0) => {
        let _errors = { time: {} };
        let isValid = true;

        // Draft
        if (mode <= 10) {
            // if (!dataObj.name || dataObj.name?.length < 3) {
            //     _errors.name = "Recruit title is required";
            //     isValid = false;
            // } else _errors.name = "";
        }
        console.log("Errors", _errors);
        setErrors(_errors);
        return isValid;
    };

    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Recruit : ", dataObj);
        const check = validate();
        if (check) {
            props?.onSubmit(dataObj);
        } else {
            pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    // reset data
    const clear = () => {
        setDataObj(new CRecruit());
    };

    // set styles for input fields
    const getInputSytle = (error) => {
        return !error || error === ""
            ? "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            : "block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-red-300 rounded-md";
    };
    // get error message for input fields
    const getErrorStyle = (error) => {
        if (error && error !== "")
            return (
                <div className="mt-2 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    <p className="ml-2 text-sm text-red-600">{error}</p>
                </div>
            );
    };
    // get if the input field is readonly
    const getReadOnly = (name) => {
        if (props.readOnlyProps && props.readOnlyProps.includes(name)) return true;
        return false;
    };

    // convert string date to date object
    const getDate = (strdate) => {
        return new Date(strdate).getDate();
    };

    return (
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit} ref={pageRef}>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Basic Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Title
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Reason for the request"
                                    className={getInputSytle(errors.title)}
                                    value={dataObj.title}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("title")}
                                />
                                {getErrorStyle(errors.title)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Message
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={10}
                                    className={getInputSytle(errors.message)}
                                    defaultValue={dataObj.message}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("message")}
                                />
                                {/* <p className="mt-2 text-sm text-gray-500">Write a few sentences about event.</p> */}
                                {getErrorStyle(errors.message)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Event Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="eventid" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Event Id
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="eventid"
                                    id="eventid"
                                    placeholder="12345"
                                    className={getInputSytle(errors.eventid)}
                                    value={dataObj.eventid}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("eventid")}
                                />
                                {getErrorStyle(errors.eventid)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="eventname" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Event Name / Title
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="eventname"
                                    id="eventname"
                                    placeholder="Recruit Name"
                                    className={getInputSytle(errors.eventname)}
                                    value={dataObj.eventname}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("eventname")}
                                />
                                {getErrorStyle(errors.eventname)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="eventownerid" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Event Owner Id
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="eventownerid"
                                    id="eventownerid"
                                    placeholder="12345"
                                    className={getInputSytle(errors.eventownerid)}
                                    value={dataObj.eventownerid}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("eventownerid")}
                                />
                                {getErrorStyle(errors.eventownerid)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Requester Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="requester.id" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                User Id
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="requester.id"
                                    id="requester.id"
                                    placeholder="12345"
                                    className={getInputSytle(errors.requester?.id)}
                                    value={dataObj.requester?.id}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("requester.id")}
                                />
                                {getErrorStyle(errors.requester?.id)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="requester.name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                User Name
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="requester.name"
                                    id="requester.name"
                                    placeholder="John Doe"
                                    className={getInputSytle(errors.requester?.name)}
                                    value={dataObj.requester?.name}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("requester.name")}
                                />
                                {getErrorStyle(errors.requester?.name)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="requester.email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Email
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="email"
                                    name="requester.email"
                                    id="requester.email"
                                    placeholder="someone@abc.com"
                                    className={getInputSytle(errors.requester?.email)}
                                    value={dataObj.requester?.email}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("requester.email")}
                                />
                                {getErrorStyle(errors.requester?.email)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="requester.phone" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Phone / Contact
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="tel"
                                    name="requester.phone"
                                    id="requester.phone"
                                    placeholder="+1 (123) 456-7890"
                                    className={getInputSytle(errors.requester?.phone)}
                                    value={dataObj.requester?.phone}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("requester.phone")}
                                />
                                {getErrorStyle(errors.requester?.phone)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            props?.onCancel();
                        }}
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};
export default Add;
