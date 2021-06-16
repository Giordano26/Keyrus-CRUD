import  { App } from "./server"

async function main(){

    const app = new App(); //passagem de parametro da porta, referida na classe App
    await app.listen('3000'); //chamada da função listen com o parametro da porta acima
}

main(); 
