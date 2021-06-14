import express,{ Application } from "express";
import  "./db";
import carRoutes from "./routes/cars"

export class App{
    private app:Application; //declaração do tipo app como Application, express

    constructor(port:string){
        this.app = express(); //istancia o app com as rotas do express
        this.routes(); 
    }

    async listen(){ //função de listen para entrar na porta 3000
        await this.app.listen(3000);
        console.log("ONLINE");
    }

    routes(){
        this.app.use("/cars",carRoutes); //quando bater na rota '/cars' a o que está definido nas rotas do carro
    }

    middlewares(){ //sem uso por enquanto
    }
}

