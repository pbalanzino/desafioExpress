import express from 'express';
import Archivo from '../tools/archivo.js';
import { itemsArray } from '../tools/funciones.js'

const app = express();
const PORT = 8080;

const server = app.listen(PORT, (req,res) => {
    console.log(`Server on port: ${server.address().port}`)
})

let items = 0;
let itemRandom = 0;

app.get('/items', async(req, res) => {
    try{
        // const file = new Archivo('./data/productos.txt');
        // const content = await file.leer();
        // const parsedContent = JSON.parse(content);
        // const arrayContent  = parsedContent.map(item => item.title)
        const arrayContent  = await itemsArray();
        res.send(`{items: ${arrayContent}, cantidad: ${arrayContent.length}}`);
        ++items
    } catch (err){
        console.log(`Error: ${err}`)
    }
})

app.get('/item-random', async(req, res) => {
    try {
        // const file = new Archivo('./data/productos.txt');
        // const content = await file.leer();
        // const parsedContent = JSON.parse(content);
        // const arrayContent  = parsedContent.map(item => item.title)
        const arrayContent  = await itemsArray()
        const random  = (Math.random() * (arrayContent.length - 1)).toFixed()
        res.send(`{item: ${arrayContent[random]}}`);
        ++itemRandom
    } catch (err){
        console.log(`Error: ${err}`)
    }
})

app.get('/visitas', (req, res) => {
    res.send(`{visitas: {items: ${items}, item: ${itemRandom}}}`
)})