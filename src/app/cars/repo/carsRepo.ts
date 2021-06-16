import { Cars, CarsProps } from "../domain/cars";
import { CountDTO } from "../usecases/CountDTO";
import { CreateCarDTO } from "../usecases/CreateCar/createCarDTO";

// O que o repositorio da entidade Carros deve ter pra ser considerado como tal?
export interface ICarsRepo {
    save(cars: CreateCarDTO): Promise<string> //bolean de verificação
    read():  Promise<CarsProps[]> //retorna o json com as props de carro
    update(id: string, newCar: CreateCarDTO): Promise<void>  //retorna vazio, função genérica de update
    delete(id: string): Promise<void> //retorno vazio, função de wipe na database do id
    updateStock(id: string, amount:number): Promise<void>; //retorna vazio, função de baixa no estoque 
    count(car: CreateCarDTO): Promise<CountDTO> //retorna um tipo numero, retorna o contador de numero de estoque da db
    countByID(id: string): Promise<CountDTO> 
}