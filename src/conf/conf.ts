import dotenv from "dotenv";
dotenv.config();

const conf = {
    PORT: parseInt(<string>process.env.PORT)
};


export default conf;