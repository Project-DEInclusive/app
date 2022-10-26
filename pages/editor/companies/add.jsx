/*    Imports    */
import { useState, useEffect, useRef } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

import dynamic from "next/dynamic";
import CCompany from "../../../types/classes/company/CCompany";
import filehandler from "../../../constants/filehandler";

import collectionfetcher from "../../../constants/fetch/collection";

import LinkEditor from "../../../components/editor/linkeditor";

// import ck editor using dynamic import on client side
const CKEditor = dynamic(
    {
        loader: () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
        render: (props, CKEditor) => {
            const edt = new CKEditor();
            console.log("Props : ", props);
            return edt;
        },
    },
    {
        ssr: false,
    }
);
// form component
const Add = (props) => {
    // form state object
    const [dataObj, setDataObj] = useState(props.data || new CCompany());
    const [errors, setErrors] = useState({}); // errors object
    const [_collections, _setCollections] = useState(); // collections object

    const [thumbnail, setThumbnail] = useState(null);
    const [thumblstup, setThumblstup] = useState(null);
    const [cover, setCover] = useState(null);
    const [coverlstup, setCoverlstup] = useState(null);

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
        getCollections();
    }, []);

    // get required collections
    const getCollections = async () => {
        if (_collections == null) _setCollections(await collectionfetcher.getCollections(["countries"], () => {}));
    };
    // get required collection values
    const getCollectionValues = (key) => {
        if (_collections == null) return [];
        const res = _collections.find((x) => x.key == key);
        if (res == null) return [];
        return res.values;
    };
    // handle logo upload
    const handleLogo = async (e) => {
        try {
            if (!e.target.files || e.target.files.length == 0) {
                alert("No file selected.");
                return;
            }
            let file = e.target.files[0];
            if (file.type.indexOf("image") == -1) {
                alert("Please select an image file.");
                return;
            }
            if (file.size > 1024 * 1024) {
                alert("Image size must be less than 1MB");
                return;
            }
            var reader = new FileReader();
            reader.onloadend = function () {
                setThumbnail(reader.result);
            };
            reader.readAsDataURL(file);
            const key = dataObj._id || Date.now();
            const imgok = await filehandler.uploadCompanyThumbnail(key, file);
            if (imgok) {
                if (dataObj._id && dataObj.thumbnail.src && !dataObj.thumbnail.src.includes(dataObj._id)) {
                    filehandler.remove(dataObj.thumbnail.src);
                }
                setThumblstup(Date.now());
                handleChange({ target: { name: "thumbnail.src", value: `companies/cl-${key}.png` } });
            } else {
                alert("Image upload failed.");
            }
        } catch (er) {
            console.log(er);
            alert("Error uploading image.");
        }
    };
    // handle cover upload
    const handleCover = async (e) => {
        try {
            if (!e.target.files || e.target.files.length == 0) {
                alert("No file selected.");
                return;
            }
            let file = e.target.files[0];
            if (file.type.indexOf("image") == -1) {
                alert("Please select an image file.");
                return;
            }
            if (file.size > 1024 * 1024 * 2) {
                alert("Image size must be less than 2MB");
                return;
            }
            var reader = new FileReader();
            reader.onloadend = function () {
                setCover(reader.result);
            };
            reader.readAsDataURL(file);
            const key = dataObj._id || Date.now();
            const imgok = await filehandler.uploadCompanyCover(key, file);
            if (imgok) {
                if (dataObj._id && dataObj.cover.src && !dataObj.cover.src.includes(dataObj._id)) {
                    filehandler.remove(dataObj.cover.src);
                }
                setCoverlstup(Date.now());
                handleChange({ target: { name: "cover.src", value: `companies/cc-${key}.png` } });
            } else {
                alert("Image upload failed.");
            }
        } catch (er) {
            console.log(er);
            alert("Error uploading image.");
        }
    };
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
        let _errors = { name: {} };
        let isValid = true;

        // Draft
        if (mode <= 10) {
            if (!dataObj.name || dataObj.name?.length < 3) {
                _errors.name = "Company title is required";
                isValid = false;
            } else _errors.name = "";
        }
        if (mode <= 9) {
            if (!dataObj.description || dataObj.description.length < 10) {
                _errors.description = "Company description is required";
                isValid = false;
            } else _errors.description = "";
            if (!dataObj.content || dataObj.content.length < 10) {
                _errors.content = "Company content is required";
                isValid = false;
            } else _errors.content = "";
        }
        console.log("Errors", _errors);
        setErrors(_errors);
        return isValid;
    };
    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Company : ", dataObj);
        const check = validate();
        if (check) {
            props?.onSubmit(dataObj);
        } else {
            pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    // reset data
    const clear = () => {
        setDataObj(new CCompany());
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Name
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    placeholder="ABC Company"
                                    className={getInputSytle(errors.name)}
                                    value={dataObj.name}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("name")}
                                />
                                {getErrorStyle(errors.name)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Email address
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="abc@example.com"
                                    className={getInputSytle(errors.email)}
                                    value={dataObj.email}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("email")}
                                />
                                {getErrorStyle(errors.email)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Contact Number
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="phone"
                                    placeholder="+1 (555) 555-5555"
                                    className={getInputSytle(errors.phone)}
                                    value={dataObj.phone}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("phone")}
                                />
                                {getErrorStyle(errors.phone)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Company Website
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    autoComplete="website"
                                    placeholder="https://example.com"
                                    className={getInputSytle(errors.website)}
                                    value={dataObj.website}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("website")}
                                />
                                {getErrorStyle(errors.website)}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Company Description
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className={getInputSytle(errors.description)}
                                    defaultValue={dataObj.description}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("description")}
                                />
                                <p className="mt-2 text-sm text-gray-500">Write a few sentences about company.</p>
                                {getErrorStyle(errors.description)}
                            </div>
                        </div>
                        {editorLoaded && (
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="pcontent" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Content
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={dataObj.content || "<p>Your content...</p>"}
                                        config={{
                                            toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote", "undo", "redo", "insertTable"],
                                        }}
                                        onReady={(editor) => {}}
                                        onChange={(event, editor) => {
                                            const edata = editor.getData();
                                            handleChange({ target: { name: "content", value: edata } });
                                        }}
                                    />
                                    <p className="mt-2 text-sm text-gray-500">Your company article content.</p>
                                    {getErrorStyle(errors.content)}
                                </div>
                            </div>
                        )}
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Company Logo
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex justify-center pb-6 rounded-md">
                                    {dataObj.thumbnail && dataObj.thumbnail.src && (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataObj._id || "company"}${thumblstup}?key=${dataObj.thumbnail.src}`}
                                            alt="Company Logo"
                                            className="h-full w-full rounded-md"
                                        />
                                    )}
                                    {(!dataObj.thumbnail || !dataObj.thumbnail.src) && thumbnail && <img src={thumbnail} alt="Company Logo" className="h-full w-full rounded-md" />}
                                </div>
                                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleLogo} accept="image/png, image/jpeg" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Company Cover Image
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex justify-center pb-6 rounded-md">
                                    {dataObj.cover && dataObj.cover.src && (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataObj._id || "company"}${coverlstup}?key=${dataObj.cover.src}`}
                                            alt="Company cover"
                                            className="h-full w-full rounded-md"
                                        />
                                    )}
                                    {(!dataObj.cover || !dataObj.cover.src) && cover && <img src={cover} alt="Company cover" className="h-full w-full rounded-md" />}
                                </div>
                                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload1"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload1"
                                                    name="file-upload1"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleCover}
                                                    accept="image/png, image/jpeg"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Address Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="address.country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Country
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <select
                                    id="address.country"
                                    name="address.country"
                                    autoComplete="country-name"
                                    className={getInputSytle(errors.address?.country)}
                                    value={dataObj.address?.country}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("address.country")}
                                >
                                    <option selected disabled>
                                        Select Country
                                    </option>
                                    {getCollectionValues("countries").map((v) => (
                                        <option key={v.key} value={v.value}>
                                            {v.value}
                                        </option>
                                    ))}
                                </select>
                                {getErrorStyle(errors.address?.country)}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="address.street" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Street address
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="address.street"
                                    id="address.street"
                                    autoComplete="street-address"
                                    className={getInputSytle(errors.address?.street)}
                                    value={dataObj.address?.street}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("address.street")}
                                />
                                {getErrorStyle(errors.address?.street)}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="address.city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                City
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="address.city"
                                    id="address.city"
                                    autoComplete="address-level2"
                                    className={getInputSytle(errors.address?.city)}
                                    value={dataObj.address?.city}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("address.city")}
                                />
                                {getErrorStyle(errors.address?.city)}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="address.state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                State / Province
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="address.state"
                                    id="address.state"
                                    autoComplete="address-level1"
                                    className={getInputSytle(errors.address?.state)}
                                    value={dataObj.address?.state}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("address.state")}
                                />
                                {getErrorStyle(errors.address?.state)}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="address.zip" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                ZIP / Postal code
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name="address.zip"
                                    id="address.zip"
                                    autoComplete="postal-code"
                                    className={getInputSytle(errors.address?.zip)}
                                    value={dataObj.address?.zip}
                                    onChange={handleChange}
                                    readOnly={getReadOnly("address.zip")}
                                />
                                {getErrorStyle(errors.address?.zip)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Other Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="social" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Media Links
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <LinkEditor
                                    data={dataObj.social}
                                    onSubmit={(v) => {
                                        handleChange({ target: { name: "social", value: v } });
                                    }}
                                />
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
