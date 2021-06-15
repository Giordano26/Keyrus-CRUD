import { Cars } from "../../domain/cars";
import { ICarsRepo } from "../carsRepo";


export class SequelizeCarRepo implements ICarsRepo{
    private model: any;

    constructor(model: any){
        this.model = model
    }

    async save(cars: Cars): Promise<boolean>{
        try {
            await this.model.create({
                marca: cars.marca,
                modelo: cars.modelo,
                cor: cars.cor,
                ano: cars.ano,
            })
            return true
        }catch(e){
            console.log(e)
            return false
        }
    }

    async read(): Promise<Cars>{
        //todo
    }

    async update(id: string, cars: Cars): Promise<string> {
          //todo
        return ""
    }


    async delete(id: string): Promise<boolean> {
          //todo
        return false
    }
}