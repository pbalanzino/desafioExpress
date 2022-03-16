import Archivo from './archivo.js';

const manager = new Archivo('./data/productos.txt');

const itemsArray = async() => {
    try{
        let file = await manager.leer();
        let fileParsed = JSON.parse(file)
        return fileParsed.map(item => item.title);
    } catch(err) {
        console.log(err)
        return `Error: ${err}`
    }
}

const counterArray = async() => {
    try{
        return (await itemsArray()).length
    } catch (err){
        console.log(err)
        return `Error: ${err}`
    }
}

export { itemsArray, counterArray };