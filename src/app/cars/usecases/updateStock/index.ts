import { CarsRepo } from "../../repo";
import { UpdateStockUsecase } from "./UpdateStockController";


export const updateStockController = new UpdateStockUsecase(CarsRepo);