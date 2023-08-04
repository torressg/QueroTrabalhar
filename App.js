const express = require('express');
const app = express();
const {sequelize} = require('./db/connection');
const bodyParser = require('body-parser')

const port = 3000;

app.listen(port, function () {
    console.log(`O express está rodando na porta ${port}`)
    console.log(`Acesse: localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('11')
})




app.use('/jobs', require('./Routes/jobs'))