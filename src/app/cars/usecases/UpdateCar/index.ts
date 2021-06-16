import { CarsRepo } from "../../repo";
import { UpdateCarUsecase } from "./UpdateCarController";


export const updateCarController = new UpdateCarUsecase(CarsRepo)