import express from "express";
import cors from "cors";
import config from "./config/index.js";
import contactRouter from "./routes/contact.route.js";
import connectDb from "./utils/connectDb.utils.js";
import bodyParser from "body-parser";

const app = express();
const PORT = config.app.port;

// Call connect db
connectDb();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/contacts", contactRouter);

app.use((req, res, next) => {
    res.status(400).json({ success: false, message: "Invalid request!" });
});

app.listen(PORT, (req, res) => {
    console.log(`Server connected in port ${PORT}`);
});
