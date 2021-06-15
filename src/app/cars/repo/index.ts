import CarsModel from "../../../db/model/cars.model";
import { SequelizeCarRepo } from "./implementations/sequelizeCarRepo";


export const CarsRepo = new SequelizeCarRepo(CarsModel)

