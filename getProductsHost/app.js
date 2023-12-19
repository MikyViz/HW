const express = require('express');
const app = express();
const path = require('path');
const port = 3232;
const productsRouter = require('./routers/productsRouter')
const getData = require('./middleware/getData')

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(getData)

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5175');
    res.send(data);
})

app.use('/getProduct', getData, productsRouter)


app.listen(port, () => {
    console.log('Молодец, что незабыл!');
})