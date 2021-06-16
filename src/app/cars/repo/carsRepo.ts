import { Cars, CarsProps } from "../domain/cars";
import { CreateCarDTO } from "../usecases/CreateCar/createCarDTO";

// O que o repositorio da entidade Carros deve ter pra ser considerado como tal?
export interface ICarsRepo {
    save(cars: CreateCarDTO): Promise<boolean>
    read():  Promise<CarsProps[]>
    update(id: string, cars: CreateCarDTO): Promise<void> // retorna id
    delete(id: string): Promise<void>
}