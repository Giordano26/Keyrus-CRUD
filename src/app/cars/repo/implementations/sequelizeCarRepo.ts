import { Cars, CarsProps } from "../../domain/cars";
import { CountDTO } from "../../usecases/CountDTO";
import { CreateCarDTO } from "../../usecases/CreateCar/createCarDTO";
import { ICarsRepo } from "../carsRepo";


export class SequelizeCarRepo implements ICarsRepo{
    private model: any;

    constructor(model: any){
        this.model = model;
    }

    async save(cars: CreateCarDTO): Promise<string>{
        try {
            let newCar = await this.model.create({...cars}) as CarsProps
            return newCar.id;
        }catch(e){
            console.log(e);
            return e;
        }
    }

    async read(): Promise<CarsProps[]> {
        try {
            let cars = await this.model.findAll({raw: true}) as CarsProps[];

            return cars;
        } catch(e) {
            console.log(e); 
            return e
        }
    }

    async update(id: string, newCar: CreateCarDTO): Promise<void> {
        try {
            await this.model.update({...newCar}, { where: { id }});
        } catch (error) {
            console.log(error);
        }
    }


    async delete(id: string): Promise<void> {
        try {
            await this.model.destroy({ where: { id } });
        } catch (error) {
            console.log(error);
        }
    }

    async updateStock(id: string, amount: number): Promise<void>{
        try {
            await this.model.update({ estoque: amount }, { where: { id } });
        } catch (error) {
            console.log(error);
        }
    }

    async count(cars: CreateCarDTO): Promise<CountDTO>{
        try {
            let car = await this.model.findOne({ where: { modelo: cars.modelo, marca: cars.marca, cor: cars.cor, ano: cars.ano } }) as CountDTO;
          
            let carProps = {id: car.id, estoque: car.estoque}

            return carProps;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async countByID(id: string): Promise<CountDTO>{
        try {
            let car = await this.model.findOne({ where: { id } }) as CountDTO;
          
            let carProps = {id: car.id, estoque: car.estoque}

            return carProps;
        } catch (error) {
            console.log(error)
            return error
        }
    }
}