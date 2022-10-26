/*    Imports    */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { TrashIcon, ClipboardCopyIcon, CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const CompanySelector = (props) => {
    const [data, setData] = useState(props.data || []);
    const [selected, setSelected] = useState(null);

    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selected == null) {
            alert("Please select a company!");
            return;
        }
        if (props.readonly == true) return;
        if (props.max && data.length >= props.max) {
            alert("Max record count exceded! Remove a record to continue.");
            return;
        }

        props?.onSubmit([
            ...data,
            {
                id: selected.id,
                name: selected.name,
                thumbnail: selected.thumbnail,
                email: selected.email,
                website: selected.website,
                phone: selected.phone,
                owner: selected.owner,
            },
        ]);
        setData([
            ...data,
            {
                id: selected.id,
                name: selected.name,
                thumbnail: selected.thumbnail,
                email: selected.email,
                website: selected.website,
                phone: selected.phone,
                owner: selected.owner,
            },
        ]);
        setSelected(null);
    };

    return (
        <div className={`bg-white shadow overflow-hidden rounded-md border border-gray-200 ${props.className} overflow-y-visible`}>
            <ul role="list" className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                    <div className="flex gap-2">
                        <div className="basis-10/12">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <div className="mt-1">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({ open }) => (
                                        <>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                    {selected ? (
                                                        <span className="flex items-center">
                                                            <img
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${selected.name}?key=${selected.thumbnail?.src}`}
                                                                alt=""
                                                                className="h-6 w-6 flex-shrink-0 rounded-full"
                                                            />
                                                            <span className="ml-3 block truncate">{selected.name}</span>
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center">
                                                            <span className="ml-3 block truncate">Select Company</span>
                                                        </span>
                                                    )}
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                    <Listbox.Options className="absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {(!props.companies || props.companies.length == 0) && (
                                                            <Listbox.Option className="relative cursor-default select-none py-2 pl-3 pr-9 text-white bg-indigo-600" value={null}>
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <span className="font-semibold ml-3 block truncate">No Options Available</span>
                                                                        </div>

                                                                        <span className="text-white absolute inset-y-0 right-0 flex items-center pr-4">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        )}
                                                        {props.companies?.map((company) => (
                                                            <Listbox.Option
                                                                key={company._id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? "text-white bg-indigo-600" : "text-gray-900",
                                                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                    )
                                                                }
                                                                value={company}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <img
                                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${company?.name}?key=${company?.thumbnail?.src}`}
                                                                                alt=""
                                                                                className="h-6 w-6 flex-shrink-0 rounded-full"
                                                                            />
                                                                            <span className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}>
                                                                                {company?.name}
                                                                            </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? "text-white" : "text-indigo-600",
                                                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
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
                            </div>
                        </div>
                        <div className="basis-1/12">
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="inline-flex items-center justify-center mt-6 w-full px-3 py-2 border border-indigo-700 text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </li>
                {data?.map((item, index) => (
                    <li key={index} className="px-6 py-4 flex-1 flex items-center justify-between">
                        <div className="flex flex-row gap-x-5">
                            <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.name}?key=${item?.thumbnail?.src}`} alt="Profile Picture" className="h-full w-full" />
                            </span>
                            <div>
                                <p className="text-base font-semibold">{item?.name}</p>
                                <span className="inline-flex gap-x-3">
                                    <p className="text-sm text-indigo-700 hover:text-indigo-500">{item?.email}</p>
                                    <p className="text-sm text-green-700 hover:text-green-500">{item?.website}</p>
                                </span>
                            </div>
                        </div>
                        <div className="relative flex gap-2">
                            {/* copy link to clipboard */}
                            <button
                                type="button"
                                onClick={() => {
                                    if (props.readonly == true) return;
                                    setData(data.filter((_, i) => i !== index));
                                    props?.onSubmit(data.filter((_, i) => i !== index));
                                }}
                                className="inline-flex items-center justify-center w-full px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </li>
                ))}
                {data.length === 0 && (
                    <li className="px-6 py-4">
                        <div className="text-center text-gray-500">
                            <p className="text-sm">No company added yet.</p>
                            <p className="text-sm">Add one by clicking the button above.</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CompanySelector;
