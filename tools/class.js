const fs = require('fs');

const fileName = "./productos.txt"

export class Archivo{
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async leer(){
        try {
            if(!fs.existsSync('./productos.txt')) fs.promises.writeFile('./productos.txt', '[]');
            let file = await fs.promises.readFile(fileName, 'utf-8');
            console.log(file);
        } catch (err){
            console.log(`La ruta del archivo no coincide. ${err}`);
        }
    }

    async guardar(product){
        try{
            let file = await fs.promises.readFile(fileName, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const content = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                id: fileParsed.length + 1
               }
            fileParsed.push(content);
            await fs.promises.writeFile(fileName, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`No se pudo guardar el archivo: ${err}`);
        }
    }

    async borrar(){
        try{
            await fs.promises.unlink(fileName);
        } catch (err) {
            console.log(`No se pudo borrar el archivo. ${err}`);
        }
    }
};


