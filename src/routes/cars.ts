import { Router } from "express";
import carController from "../controller/carController"


const router = Router();

router.get("/",carController.read); //rota para chamada da função de read, metodo get

router.post("/",carController.create); //rota para chamada da função create, metodo post

router.put("/", carController.update) //rota para chamada da função update, metodo put

router.delete("/",carController.delete) //rota para chamada da função delete, metodo delete

export default router;