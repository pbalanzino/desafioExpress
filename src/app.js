import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;

const server = app.listen(PORT, (req,res) => {
    console.log(`Server on port: ${server.address().port}`)
})

app.get('/items', async (req, res) => {
    try{
        await fs.promises.readFile('../tools/productos.txt', 'utf-8')
        foreach(product => res.send({items:[`${product.item}`], cantidad: "(cantidad de productos)"}))
    } catch (err){
        console.log(`Can't read file. Error: ${err}`)
    }
})

app.get('/item-random', (req, res) => {
    res.send({item:'producto'})
})

app.get('/items', (req, res) => {
    res.send({items:[`${producto}`], cantidad: "(cantidad de productos)"})
})