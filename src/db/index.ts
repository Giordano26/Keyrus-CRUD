import  { Sequelize }  from "sequelize-typescript";
import Cars from "./model/cars.model";

const sequelize = new Sequelize({
    database: "Cars_DB",
    dialect: "sqlite",
    username: "root",
    password: "",
    storage: "./src/db/database.db", //local da db
    models: [__dirname +'/*/.model.ts']
})

sequelize.addModels([Cars]); 


export default sequelize;