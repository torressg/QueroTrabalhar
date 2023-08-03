const express = require('express');
const app = express();
const db = require('./db/connection')


const port = 3000;

app.listen(port, function () {
    console.log(`O express está rodando na porta ${port}`)
    console.log(`Acesse: localhost:${port}`)
})

// db connection


app.get('/', (req, res) => {
    res.send('11')
})