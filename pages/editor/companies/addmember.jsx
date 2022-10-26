/*    Imports    */
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { ExclamationCircleIcon, CheckIcon } from "@heroicons/react/solid";
import CCompanyMember from "../../../types/classes/company/CCompanyMember";

import EMemberRole from "../../../types/enum/company/EMemberRole";
//import collectionfetcher from "../../../constants/fetch/collection";

import Companyselector from "../../../components/_common/companyselector";
import Userselector from "../../../components/_common/userselector";

import fetcher from "../../../constants/fetch/companies";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

// form component
const Add = (props) => {
    // form state object
    const [dataObj, setDataObj] = useState(props.data || new CCompanyMember());
    const [errors, setErrors] = useState({}); // errors object

    const [_company, _setCompany] = useState(null);
    const [_member, _setMember] = useState(null);
    const [_companies, _setCompanies] = useState([]);
    //const [_collections, _setCollections] = useState(); // collections object

    useEffect(() => {
        if (dataObj.member) {
            _setMember([dataObj.member]);
            _setCompany([dataObj.company]);
        }
        getCompanies();
    }, []);

    const getCompanies = async () => {
        const comp = await fetcher.getMyCompanies({}, { company: 1 }, false, false, 100000, 0, { "company.name": -1 }, () => {});
        if (comp) _setCompanies(comp.values.map((v) => v.company));
        console.log(comp);
    };

    // ckeditor state object and props
    //const editorRef = useRef();
    const pageRef = useRef();
    const [editorLoaded, setEditorLoaded] = useState(false);
    // const { ClassicEditor } = editorRef.current || {};
    // useEffect(() => {
    //     editorRef.current = {
    //         ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    //     };
    //     setEditorLoaded(true);
    //     //getCollections();
    // }, []);

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
            //     _errors.name = "CompanyMember title is required";
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
        console.log("CompanyMember : ", dataObj);
        const check = validate();
        if (check) {
            props?.onSubmit(dataObj);
        } else {
            pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    // reset data
    const clear = () => {
        setDataObj(new CCompanyMember());
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
                <div className="mt-2 pr-3 flex items-center pointer-companys-none">
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

    const getRoleStatus = (status) => {
        switch (status) {
            case EMemberRole.default:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"> Default </span>;
            case EMemberRole.regular:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"> Member </span>;
            case EMemberRole.manager:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"> Manager </span>;
            case EMemberRole.owner:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"> Owner </span>;
        }
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
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Company
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Companyselector
                                    max={1}
                                    readOnly={getReadOnly("company")}
                                    data={_company}
                                    companies={_companies}
                                    onSubmit={(v) => {
                                        if (v.length > 0) handleChange({ target: { name: "company", value: v[0] } });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="member" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Member
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <Userselector
                                    max={1}
                                    data={_member}
                                    readOnly={getReadOnly("member")}
                                    onSubmit={(v) => {
                                        if (v.length > 0) {
                                            handleChange({ target: { name: "member", value: v[0] } });
                                            _setMember(v[0]);
                                        } else {
                                            handleChange({ target: { name: "member", value: undefined } });
                                            _setMember([]);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="memberrole" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Role
                            </label>
                            <div className="relative mt-1 sm:mt-0 sm:col-span-2">
                                <Listbox
                                    value={EMemberRole[dataObj.memberrole]}
                                    onChange={(v) => {
                                        handleChange({ target: { name: "memberrole", value: EMemberRole[v] } });
                                    }}
                                >
                                    {({ open }) => (
                                        <>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate">{EMemberRole[dataObj.memberrole]}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-companys-none">
                                                        {/* <ChevronUpDown className="h-5 w-5 text-gray-400" ariaHidden="true"></ChevronUpDown> */}
                                                    </span>
                                                </Listbox.Button>

                                                <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                    <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm z-50">
                                                        {Object.keys(EMemberRole)
                                                            .filter((x) => !/^[0-9]+$/.test(x) || x == "owner")
                                                            .map((val) => (
                                                                <Listbox.Option
                                                                    key={val}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            active ? "text-white bg-indigo-600" : "text-gray-900",
                                                                            "cursor-default select-none relative py-2 pl-8 pr-4"
                                                                        )
                                                                    }
                                                                    value={val}
                                                                >
                                                                    {({ selected, active }) => (
                                                                        <>
                                                                            <span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{val}</span>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                        "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                                                                    )}
                                                                                >
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                                {getErrorStyle(errors.memberrole)}
                            </div>
                        </div>
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
                                {/* <p className="mt-2 text-sm text-gray-500">Write a few sentences about company.</p> */}
                                {getErrorStyle(errors.message)}
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
