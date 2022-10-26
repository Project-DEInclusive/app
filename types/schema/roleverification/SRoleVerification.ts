/*    Imports    */
import mongoose from "mongoose";
import CRoleVerification from "../../classes/roleverification/CRoleVerification";
// schema implimentation for recruit request
const Schema = new mongoose.Schema<CRoleVerification>(
    {
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
        role: { type: Number, default: 0 },
        status: { type: Number, default: 0 },
        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.RoleVerification || mongoose.model<CRoleVerification>("RoleVerification", Schema);
