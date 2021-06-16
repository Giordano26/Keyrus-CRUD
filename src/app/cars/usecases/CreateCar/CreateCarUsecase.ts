
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
        let car: CreateCarDTO = req.body as CreateCarDTO;
        let amount: string =  req.params.amount as string;

        try {

            car = this.titleCaseCarInfo(car);

            let { id, estoque } = await this.carRepo.count(car);

            // Se carro já existe, não criar uma nova linha na table, atualizar car.estoque (estoque) 
            if (estoque >= 1){
                car.estoque = estoque + Number(amount)
                await this.carRepo.update(id, car);

                res.json({ car, success: true, status: "updated" });
            }else{ //Se não, criação normal de um carro na table
                car.estoque = Number(amount);
                let carId = await this.carRepo.save(car);

                res.json({ id: carId, success: true, status: "created" });
            }
        } catch (err) {
            console.log(`[CreateCarUsecase][execute]: Uncaught controller error`);
            console.log(err);
        }
     
    }

    private titleCaseCarInfo(car: CreateCarDTO): CreateCarDTO{
        return {
            marca: this.titleCase(car.marca) ,
            modelo: this.titleCase(car.modelo),
            cor: this.titleCase(car.cor),
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