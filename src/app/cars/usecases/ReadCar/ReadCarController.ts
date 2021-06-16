import { Request, Response} from "express"

import { ICarsRepo } from "../../repo/carsRepo";

export class ReadCarUsecase {
    private carRepo: ICarsRepo;

    // Não importa de qual database estamos usando (SQL, NO-SQL) desde que o carRepo siga a interface exigida ele será aceito
    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request , res: Response): Promise<void>{
        try {
            let cars = await this.carRepo.read()

            res.json({ cars })
        } catch (err) {
            console.log(`[ReadCarUsecase][execute]: Uncaught controller error`);
            console.log(err);
        }
     
    }
}