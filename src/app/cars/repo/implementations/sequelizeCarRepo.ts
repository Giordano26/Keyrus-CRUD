import { Cars, CarsProps } from "../../domain/cars";
import { CreateCarDTO } from "../../usecases/CreateCar/createCarDTO";
import { ICarsRepo } from "../carsRepo";


export class SequelizeCarRepo implements ICarsRepo{
    private model: any;

    constructor(model: any){
        this.model = model
    }

    async save(cars: CreateCarDTO): Promise<boolean>{
        try {
            await this.model.create({...cars})
            return true
        }catch(e){
            console.log(e)
            return false
        }
    }

    async read(): Promise<CarsProps[]> {
        try {
            let cars = await this.model.findAll({raw: true}) as CarsProps[];

            return cars;
        } catch(e) {
            console.log(e)
            return e
        }
    }

    async update(id: string, newCar: CreateCarDTO): Promise<void> {
        try {
            await this.model.update({...newCar}, {where: {id}})   
        } catch (error) {
            console.log(error)
        }
    }


    async delete(id: string): Promise<void> {
        try {
            await this.model.destroy({ where: { id } })   
        } catch (error) {
            console.log(error)
        }
    }
}