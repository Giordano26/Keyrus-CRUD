import { Column, Model, Table } from "sequelize-typescript";



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


}

export default Cars;