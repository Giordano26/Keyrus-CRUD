
import { Request, Response} from "express"
import { ICarsRepo } from "../../repo/carsRepo";
import { CreateCarDTO } from "./createCarDTO";



export class CreateCarUsecase {
    private carRepo: ICarsRepo;

    // Não importa de qual database estamos usando (SQL, NO-SQL desde que o carRepo siga a interface exigida ele será aceito
    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request , res: Response): Promise<void>{
        // WARNING - CHECAR CARRO POR ID
        let car: CreateCarDTO = req.body as CreateCarDTO

        try {
            await this.carRepo.save(car)

            res.json({succes: true, car})
        } catch (err) {
            console.log(`[CreateCarUsecase][execute]: Uncaught controller error`);
            console.log(err);
        }
     
    }
}