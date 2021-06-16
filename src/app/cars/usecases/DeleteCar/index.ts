import { CarsRepo } from "../../repo";
import { DeleteCarUsecase } from "./DeleteCarUsecase";


export const deleteCarController = new DeleteCarUsecase(CarsRepo)