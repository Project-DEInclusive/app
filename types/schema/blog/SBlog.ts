/*    Imports    */
import mongoose from "mongoose";
import CBlog from "../../classes/blog/CBlog";
// schema implimentation for event
const Schema = new mongoose.Schema<CBlog>(
    {
        name: { type: String, required: true, default: "" },
        description: { type: String, default: "" },
        content: { type: String, default: "" },

        category: { type: String, default: "" },
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

        status: { type: Number, default: 0 },
        featured: { type: Boolean, default: false },
        owner: { type: String, default: "" },

        draft: { type: Boolean, default: false },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.Blogs || mongoose.model<CBlog>("Blogs", Schema);
