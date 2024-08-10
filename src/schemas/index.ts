import { Sequelize } from "sequelize";
import sequelize from "../../db"
import { CitySchema } from "./CitySchema";
import { database } from "../interfaces/global_interface";

const db: database = {};
db.Sequelize = sequelize;


db.Cities = CitySchema(sequelize, Sequelize);


export default db;