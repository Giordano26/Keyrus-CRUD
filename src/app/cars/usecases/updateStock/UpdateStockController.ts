import { Request, Response} from "express"

import { ICarsRepo } from "../../repo/carsRepo";
import { CreateCarDTO } from "../CreateCar/createCarDTO";

export class UpdateStockUsecase {
    private carRepo: ICarsRepo;

    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request , res: Response): Promise<void>{
        try {
            let amount: string = req.params.amount as string;
            let carId: string = req.params.carId as string;

            let { id, estoque } = await this.carRepo.countByID(carId);

            if (Number(amount) >= 0){ //valores de estoque x>= 0, estoque pode ser zerado porém não negativo
                let cars = await this.carRepo.updateStock(id, Number(amount));
            } else {
                res.json({ error: "Valor inserido incorreto" });
                return
            }

            res.json({success: "true"});
        } catch (err) {
            console.log(`[UpdateCarUsecase][execute]: Uncaught controller error`);
            console.log(err);

            res.json({error: err});
        }
     
    }
}