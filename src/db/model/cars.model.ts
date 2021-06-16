import { Column, Model, Table } from "sequelize-typescript";

//Modelo da table na db

@Table
class Cars extends Model{
    @Column
    marca!: string;
    @Column
    modelo!: string; 
    @Column
    cor!: string;
    @Column
    ano!: number;
    @Column
    estoque!: number; //incrementar a cada ocorrencia 
}

export default Cars;