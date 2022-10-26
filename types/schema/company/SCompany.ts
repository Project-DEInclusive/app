/*    Imports    */
import mongoose from "mongoose";
import CCompany from "../../classes/company/CCompany";
// schema implimentation for company
const Schema = new mongoose.Schema<CCompany>(
    {
        name: { type: String, default: "", required: true },
        description: { type: String, default: "" },
        content: { type: String, default: "" },

        email: { type: String, default: "", required: true },
        phone: { type: String, default: "" },
        website: { type: String, default: "" },

        address: {
            street: { type: String, default: "" },
            city: { type: String, default: "" },
            state: { type: String, default: "" },
            country: { type: String, default: "" },
            zip: { type: String, default: "" },

            latitude: { type: Number, default: 0.0 },
            longitude: { type: Number, default: 0.0 },
            location: { type: String, default: "" },
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
        thumbnail: {
            alt: { type: String, default: "" },
            src: { type: String, default: "" },
            width: { type: Number, default: 100 },
            height: { type: Number, default: 100 },
        },
        cover: {
            alt: { type: String, default: "" },
            src: { type: String, default: "" },
            width: { type: Number, default: 100 },
            height: { type: Number, default: 100 },
        },

        status: { type: Number, default: 0 },
        owner: { type: String, default: "" },

        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Company || mongoose.model<CCompany>("Company", Schema);
