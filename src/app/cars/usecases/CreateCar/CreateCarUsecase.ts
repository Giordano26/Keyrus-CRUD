import { ICarsRepo } from "../../repo/carsRepo";



export class CreateCarUsecase{
    private carRepo: ICarsRepo;

    // Não importa de qual database estamos usando (SQL, NO-SQL) desde que o carRepo siga a interface exigida ele será aceito
    constructor(carRepo: ICarsRepo){
        this.carRepo = carRepo;
    }

    async execute(): Promise<boolean>{
        // Check if car dont exist by id

        
    }
}