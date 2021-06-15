import express from "express"

const carRouter = express.Router();

// Substituir por usecases com validação
carRouter.get("/", carController.read); //rota para chamada da função de read, metodo get

carRouter.post("/", carController.create); //rota para chamada da função create, metodo post

carRouter.put("/",  carController.update) //rota para chamada da função update, metodo put

carRouter.delete("/", carController.delete) //rota para chamada da função delete, metodo delete

export default carRouter;