import express,{ Application } from "express";
import  "./db";
import carRoutes from "./app/cars/infra/routes/index"

export class App{

    
    private app:Application; //declaração do tipo app como Application, express

    constructor(){
        this.app = express(); //istancia o app com as rotas do express
        this.middlewares();
        this.routes(); 
    }

    async listen(port: string){ //função de listen para entrar na porta 3000
        await this.app.listen(port);
        console.log("aplicação rodando na porta 3000");
    }

    routes(){
        this.app.use("/cars", carRoutes); //quando bater na rota '/cars' a o que está definido nas rotas do carro
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

}

