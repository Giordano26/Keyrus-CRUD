import  { App } from "./server"

async function main(){

    const app = new App('3000'); //passagem de parametro da porta, referida na classe App
    await app.listen(); //chamada da função listen com o parametro da porta acima
}

main(); 
