import { Cars } from "../domain/cars";

// O que o repositorio da entidade Carros deve ter pra ser considerado como tal?
export interface ICarsRepo {
    save(cars: Cars): Promise<boolean>
    read(): Promise<Cars>
    update(id: string, cars: Cars): string // retorna id
    delete(id: string): Promise<boolean>
}