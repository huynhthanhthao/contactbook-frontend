import mongoose from "mongoose";
import config from "../config/index.js";

const connectDb = async function () {
    try {
        const uri = `mongodb+srv://${config.database.username}:${config.database.password}@contact-book.dppxlxl.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database Connected!");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

export default connectDb;
