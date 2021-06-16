import { CarsRepo } from "../../repo";
import { CreateCarUsecase } from "./CreateCarUsecase";


export const createCarController = new CreateCarUsecase(CarsRepo)