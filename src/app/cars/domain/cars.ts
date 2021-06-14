import { Entity } from "./entity";

interface CarsProps {  //propriedades da table
    id: string
    marca: string 
    modelo: string
    cor: string
    ano: number
    estoque: number
}

// Criação de uma classe cars que vai necessita implmentar carProps para de fato ser um carrro
export class Cars extends Entity<CarsProps> {    
   constructor(props: CarsProps, id: string){
    super(props, id)
   }

   // getters para conseguirmos acessar os atributos de cars

   get id(): string{
       return this.props.id
   }

   get marca(): string{
       return this.props.marca
   }

   get modelo(): string {
       return this.props.modelo
   }

   get cor(): string{
       return this.props.cor
   }

   get ano(): number{
       return this.props.ano
   }

   get estoque(): number {
       return this.props.estoque
   }


   public static create(props: CarsProps, id: string): CarsProps {

    // ADICIONAR VALIDAÇÃO SOBRE OQ ESTA SENDO PAASSADO


    return new Cars({...props}, id) 
   }

 
}
