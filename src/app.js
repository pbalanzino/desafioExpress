import express from 'express';
import Archivo from '../tools/archivo.js';
import { counterArray, itemsArray } from '../tools/funciones.js'

const app = express();
const PORT = 8080;

const server = app.listen(PORT, (req,res) => {
    console.log(`Server on port: ${server.address().port}`)
})

let items = 0;
let itemRandom = 0;

app.get('/items', async(req, res) => {
    try{
        const file = new Archivo('./data/productos.txt');
        const content = await file.leer();
        const parsedContent = JSON.parse(content);
        const arrayContent  = parsedContent.map(item => item.title)
        res.send(`{items: ${arrayContent}, cantindad: ${arrayContent.length}}`);
        ++items
    } catch (err){
        console.log(`Can't read file. Error: ${err}`)
    }
})

app.get('/item-random', async(req, res) => {
    try {
        const file = new Archivo('../desafio/data/productos.txt');
        const content = await file.leer();
        const parsedContent = JSON.parse(content);
        const arrayContent  = parsedContent.map(item => item.title)
        const random  = (Math.random() * arrayContent.length).toFixed()
        res.send(`{item: ${arrayContent[random]}}`);
        ++itemRandom
    } catch (err){
        console.log(`Can't read file. Error: ${err}`)
    }
})

app.get('/visitas', (req, res) => {
    res.send(`{visitas: {items: ${items}, item: ${itemRandom}}}`
)})