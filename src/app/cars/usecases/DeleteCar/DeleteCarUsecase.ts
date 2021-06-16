
import { Request, Response} from "express"
import { ICarsRepo } from "../../repo/carsRepo";
import { DeleteCarDTO } from "./deleteCarDTO";


export class DeleteCarUsecase {
    private carRepo: ICarsRepo;

    // Não importa de qual database estamos usando (SQL, NO-SQL) desde que o carRepo siga a interface exigida ele será aceito
    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request, res: Response): Promise<void>{
        let carId: string = req.params.id as string// passar por req.params

        try { //Deleta a linha completa do carro
            await this.carRepo.delete(carId);

            res.json({ success: true, status: "deleted" });
        } catch (err) {
            console.log(`[DeleteCarUsecase][execute]: Uncaught controller error`);
            console.log(err);
        }
     
    }
}