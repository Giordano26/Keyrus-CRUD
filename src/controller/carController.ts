import { Request, Response } from "express";
import Cars from "../db/model/cars.model";

class CarController{
    async read(req:Request,res:Response){ //função de leitura da db
        console.log("O pai ta funfando");
    }

    async create(req:Request, res:Response){ //função para inserir novo elemento na db
        await Cars.create({
            marca: "Honda",
            modelo: "Civic",
            cor: "Prata",
            ano: 2021,
        })
    }

    async update(req:Request, res:Response){
        console.log("O pai ta dando update");
    }

    async delete(req:Request, res:Response){
        console.log("O pai esta deletando");
    }
}


export default new CarController();