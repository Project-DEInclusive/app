/*    Imports    */
import { TrashIcon, ClipboardCopyIcon } from "@heroicons/react/solid";
import { useState } from "react";
import filehandler from "../../constants/filehandler";

const LinkEditor = (props) => {
    const [data, setData] = useState(props.data || []);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumblstup, setThumblstup] = useState(null);

    // submit data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.readonly == true) return;
        if (props.max && data.length >= props.max) {
            alert("Max record count exceded! Remove a record to continue.");
            return;
        }
        if (name.length < 3) {
            alert("Name is too short");
            return;
        }
        if (position.length < 2) {
            alert("Position is required");
            return;
        }
        if (!thumbnail || !thumbnail.src) {
            alert("Picture is required");
            return;
        }
        // // check if url is valid
        // if (!url.match(/^(http|https):\/\/[^ "]+$/)) {
        //     alert("Invalid url");
        //     return;
        // }
        props?.onSubmit([...data, { name: name, position, thumbnail }]);
        setData([...data, { name, position, thumbnail }]);
        setName("");
        setPosition("");
        setThumbnail(null);
        setUrl("");
    };

    // handle upload thumbnail
    const handleImage = async (e) => {
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
            const key = Date.now();
            const imgok = await filehandler.uploadEventSpeakerPicture(key, file);
            if (imgok) {
                setThumblstup(Date.now());
                setThumbnail({ src: `events/spk-${key}.png` });
            } else {
                alert("Image upload failed.");
            }
        } catch (er) {
            console.log(er);
            alert("Error uploading image.");
        }
    };

    return (
        <div className={`bg-white shadow overflow-hidden rounded-md border border-gray-200 ${props.className}`}>
            <ul role="list" className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                    <div className="flex gap-2">
                        <div className="basis-1/12">
                            <label htmlFor="photospk" className="block text-sm font-medium text-gray-700">
                                Picture
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="flex items-center">
                                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                        {thumbnail && thumbnail?.src && (
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}spk-${thumblstup}?key=${thumbnail?.src}`}
                                                alt="Profile Picture"
                                                className="h-full w-full"
                                            />
                                        )}
                                        {!thumbnail?.src && thumbnail ? (
                                            <img src={thumbnail} alt="Profile Picture" className="h-full w-full" />
                                        ) : (
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        )}
                                    </span>
                                    <input type="file" id="photospk" name="photospk" className="hidden" onChange={handleImage} accept="image/png, image/jpeg" />
                                    <label
                                        htmlFor="photospk"
                                        type="button"
                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Change
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="basis-4/12">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Jhon Doe"
                                />
                            </div>
                        </div>
                        <div className="basis-4/12">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Position
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Ex - CEO"
                                />
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
                {data.map((item, index) => (
                    <li key={index} className="px-6 py-4 flex-1 flex items-center justify-between">
                        <div className="flex flex-row gap-x-5">
                            <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.name}?key=${item.thumbnail?.src}`} alt="Profile Picture" className="h-full w-full" />
                            </span>
                            <div>
                                <p className="text-base font-semibold">{item.name}</p>
                                <p className="text-sm text-indigo-700 hover:text-indigo-500">{item.position}</p>
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
                            <p className="text-sm">No speaker information added yet.</p>
                            <p className="text-sm">Add one by clicking the button above.</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default LinkEditor;
