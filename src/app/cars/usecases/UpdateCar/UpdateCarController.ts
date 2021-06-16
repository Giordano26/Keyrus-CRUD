import { Request, Response} from "express"

import { ICarsRepo } from "../../repo/carsRepo";
import { CreateCarDTO } from "../CreateCar/createCarDTO";

export class UpdateCarUsecase {
    private carRepo: ICarsRepo;

    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request , res: Response): Promise<void>{
        try {
            let car: CreateCarDTO = req.body as CreateCarDTO;
            let id = req.params.id as string

            let cars = this.carRepo.update(id, car)

            res.json({success: "true"})
        } catch (err) {
            console.log(`[UpdateCarUsecase][execute]: Uncaught controller error`);
            console.log(err);

            res.json({error: err})
        }
     
    }
}