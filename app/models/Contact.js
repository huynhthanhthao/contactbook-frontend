import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Friend",
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("contact", contactSchema);
