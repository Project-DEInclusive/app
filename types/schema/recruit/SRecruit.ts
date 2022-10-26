/*    Imports    */
import mongoose from "mongoose";
import CRecruit from "../../classes/recruit/CRecruit";
// schema implimentation for recruit request
const Schema = new mongoose.Schema<CRecruit>(
    {
        eventid: { type: String, required: true, default: "" },
        eventname: { type: String, required: true, default: "" },
        eventownerid: { type: String, required: true, default: "" },

        title: { type: String, default: "" },
        message: { type: String, default: "" },

        requester: {
            id: { type: String, required: true, default: "" },
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

        ownerapproval: { type: Number, default: 0 },
        adminapproval: { type: Number, default: 0 },
        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Recruit || mongoose.model<CRecruit>("Recruit", Schema);
