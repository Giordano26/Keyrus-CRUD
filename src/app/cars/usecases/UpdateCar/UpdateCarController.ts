import { Request, Response} from "express"

import { ICarsRepo } from "../../repo/carsRepo";
import { CreateCarDTO } from "../CreateCar/createCarDTO";

export class UpdateCarUsecase {
    private carRepo: ICarsRepo;

    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(req: Request , res: Response): Promise<void>{  // passando um id para função genérica de update
        try {
            let car: CreateCarDTO = req.body as CreateCarDTO;
            let carId: string = req.params.id as string

            car = this.titleCaseCarInfo(car);

            let cars = await this.carRepo.update(carId, car);

            res.json({ success: "true" });
        } catch (err) {
            console.log(`[UpdateCarUsecase][execute]: Uncaught controller error`);
            console.log(err);

            res.json({error: err});
        }
     
    }

    private titleCaseCarInfo(car: CreateCarDTO): CreateCarDTO{
        return {
            marca: car.marca ? this.titleCase(car.marca) : car.marca ,
            modelo: car.modelo ? this.titleCase(car.modelo) : car.modelo,
            cor: car.cor ? this.titleCase(car.cor) : car.cor,
            ano: car.ano,
            estoque: car.estoque
        }
    }

    //tratamento de string para primeira letra maiuscula 
    private titleCase(word: string): string{
        let new_word = word.slice(1).toLowerCase();
        let hCase = word[0].toUpperCase();

        let final = hCase + new_word
        return final;
      }
}