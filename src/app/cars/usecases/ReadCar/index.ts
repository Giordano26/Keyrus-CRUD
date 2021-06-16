import { CarsRepo } from "../../repo";
import { ReadCarUsecase } from "./ReadCarController";


export const readCarController = new ReadCarUsecase(CarsRepo)