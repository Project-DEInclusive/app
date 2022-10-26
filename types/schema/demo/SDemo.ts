/*    Imports    */
import mongoose from "mongoose";
import CDemo from "../../classes/demo/CDemo";
// schema implimentation for recruit request
const Schema = new mongoose.Schema<CDemo>(
    {
        requester: {
            id: { type: String, default: "" },
            name: { type: String, default: "" },
            email: { type: String, default: "" },
            phone: { type: String, default: "" },
            thumbnail: {
                alt: { type: String, default: "" },
                src: { type: String, default: "" },
                width: { type: Number, default: 100 },
                height: { type: Number, default: 100 },
            },
        },

        title: { type: String, default: "" },
        message: { type: String, default: "" },

        status: { type: Number, default: 0 },
        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Demo || mongoose.model<CDemo>("Demo", Schema);
