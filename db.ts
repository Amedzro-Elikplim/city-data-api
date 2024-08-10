import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//set up dotenv
dotenv.config();

let DATABASE_NAME: string  = process.env.DATABASE_NAME || "";
let DATABASE_USER: string = process.env.DATABASE_USER || "";
let DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || "";
let DATABASE_HOST: string = process.env.DATABASE_HOST || "";
let DATABASE_PORT: number = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306;



const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: "mysql",
    logging: false,
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to database successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();


export default sequelize
