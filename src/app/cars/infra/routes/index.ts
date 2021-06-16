import express from "express"

import { createCarController } from "../../usecases/CreateCar";
import { deleteCarController } from "../../usecases/DeleteCar";
import { readCarController } from "../../usecases/ReadCar";
import { updateCarController } from "../../usecases/UpdateCar";

const carRouter = express.Router();

// Substituir por usecases com validação
carRouter.get("/", (req, res) => readCarController.execute(req, res)); // rota para chamada da função de read, metodo get

carRouter.post("/", (req, res) => createCarController.execute(req, res)); // rota para chamada da função create, metodo post

carRouter.put("/:id",  (req, res) => updateCarController.execute(req, res)) // rota para chamada da função update, metodo put

carRouter.delete("/",  (req, res) => deleteCarController.execute(req, res)) // rota para chamada da função delete, metodo delete

export default carRouter;