/*    Imports    */
import mongoose from "mongoose";
import CCompanyMember from "../../classes/company/CCompanyMember";
// schema implimentation for recruit request
const Schema = new mongoose.Schema<CCompanyMember>(
    {
        // companyid: { type: String, required: true, default: "" },
        // companyname: { type: String, required: true, default: "" },
        // "company.owner": { type: String, required: true, default: "" },

        title: { type: String, default: "" },
        message: { type: String, default: "" },

        company: {
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
            website: { type: String, default: "" },
            owner: { type: String, default: "" },
        },
        member: {
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
        memberrole: { type: Number, default: 0 },

        ownerapproval: { type: Number, default: 0 },
        adminapproval: { type: Number, default: 0 },
        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.CompanyMember || mongoose.model<CCompanyMember>("CompanyMember", Schema);
