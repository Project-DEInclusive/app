/*    Imports    */
import mongoose from "mongoose";
import CEvent from "../../classes/event/CEvent";
// schema implimentation for event
const Schema = new mongoose.Schema<CEvent>(
    {
        name: { type: String, required: true, default: "" },
        description: { type: String, default: "" },
        content: { type: String, default: "" },

        category: { type: String, default: "" },

        time: {
            starttime: { type: String, default: new Date(1930, 1, 1).toISOString() },
            endtime: { type: String, default: new Date(1930, 1, 1).toISOString() },
            timezone: { type: String, default: "" },
        },
        place: {
            street: { type: String, default: "" },
            city: { type: String, default: "" },
            state: { type: String, default: "" },
            country: { type: String, default: "" },
            zip: { type: String, default: "" },

            latitude: { type: Number, default: 0.0 },
            longitude: { type: Number, default: 0.0 },
            location: { type: String, default: "" },
        },
        thumbnail: {
            alt: { type: String, default: "" },
            src: { type: String, default: "" },
            width: { type: Number, default: 100 },
            height: { type: Number, default: 100 },
        },
        social: {
            type: [
                {
                    url: { type: String, default: "" },
                    name: { type: String, default: "" },
                    description: { type: String, default: "" },
                    iconsrc: { type: String, default: "" },
                },
            ],
            default: [],
        },
        registration: {
            open: { type: Boolean, default: false },
            openforpublic: { type: Boolean, default: true },
            hasstarttime: { type: Boolean, default: false },
            hasendtime: { type: Boolean, default: false },
            time: {
                starttime: { type: String, default: new Date(1930, 1, 1).toISOString() },
                endtime: { type: String, default: new Date(1930, 1, 1).toISOString() },
                timezone: { type: String, default: "" },
            },
            usesystemform: { type: Boolean, default: true },
            formurl: { type: String, default: "" },
        },

        schedule: {
            type: [
                {
                    name: { type: String, default: "" },
                    description: { type: String, default: "" },
                    content: { type: String, default: "" },
                    thumbnail: {
                        alt: { type: String, default: "" },
                        src: { type: String, default: "" },
                        width: { type: Number, default: 100 },
                        height: { type: Number, default: 100 },
                    },
                    time: {
                        starttime: { type: String, default: new Date(1930, 1, 1).toISOString() },
                        endtime: { type: String, default: new Date(1930, 1, 1).toISOString() },
                        timezone: { type: String, default: "" },
                    },
                    place: {
                        street: { type: String, default: "" },
                        city: { type: String, default: "" },
                        state: { type: String, default: "" },
                        country: { type: String, default: "" },
                        zip: { type: String, default: "" },

                        latitude: { type: Number, default: 0.0 },
                        longitude: { type: Number, default: 0.0 },
                        location: { type: String, default: "" },
                    },
                    speakers: {
                        type: [
                            {
                                name: { type: String, default: "" },
                                description: { type: String, default: "" },
                                content: { type: String, default: "" },

                                position: { type: String, default: "" },
                                thumbnail: {
                                    alt: { type: String, default: "" },
                                    src: { type: String, default: "" },
                                    width: { type: Number, default: 100 },
                                    height: { type: Number, default: 100 },
                                },

                                social: {
                                    type: [
                                        {
                                            url: { type: String, default: "" },
                                            name: { type: String, default: "" },
                                            description: { type: String, default: "" },
                                            iconsrc: { type: String, default: "" },
                                        },
                                    ],
                                    default: [],
                                },
                            },
                        ],
                        default: [],
                    },
                },
            ],
            default: [],
        },
        speakers: {
            type: [
                {
                    name: { type: String, default: "" },
                    description: { type: String, default: "" },
                    content: { type: String, default: "" },

                    position: { type: String, default: "" },
                    thumbnail: {
                        alt: { type: String, default: "" },
                        src: { type: String, default: "" },
                        width: { type: Number, default: 100 },
                        height: { type: Number, default: 100 },
                    },

                    social: {
                        type: [
                            {
                                url: { type: String, default: "" },
                                name: { type: String, default: "" },
                                description: { type: String, default: "" },
                                iconsrc: { type: String, default: "" },
                            },
                        ],
                        default: [],
                    },
                },
            ],
            default: [],
        },
        videos: {
            type: [
                {
                    name: { type: String, default: "" },
                    description: { type: String, default: "" },
                    content: { type: String, default: "" },

                    thumbnail: {
                        alt: { type: String, default: "" },
                        src: { type: String, default: "" },
                        width: { type: Number, default: 100 },
                        height: { type: Number, default: 100 },
                    },
                    url: { type: String, default: "" },
                    provider: { type: String, default: "" },
                    recorded: { type: Boolean, default: true },
                },
            ],
            default: [],
        },
        tags: { type: [String], default: [] },

        status: { type: Number, default: 0 },
        featured: { type: Boolean, default: false },
        owner: { type: String, default: "" },

        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Events || mongoose.model<CEvent>("Events", Schema);
