import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "app/.env") });

const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    database: {
        username: process.env.USERNAME_DB,
        password: process.env.PASSWORD,
    },
};

export default config;
