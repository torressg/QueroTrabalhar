const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const { sequelize } = require('./db/connection');
const bodyParser = require('body-parser')
const { Job } = require('./models/Job')
const Sequelize = require ('sequelize')
const Op = Sequelize.Op

const port = 3000;

// handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))


// static folder
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.get('/', (req, res) => {

    let search = req.query.job
    let query = '%'+search+'%'

    if (!search) {
        Job.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then(jobs => {
                res.render('index', {
                    jobs
                })

            })
            .catch(error=>console.log(error))
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(jobs => {
            res.render('index', {
                jobs, search
            })
            
        })
        .catch(error=>console.log(error))

    }

})

app.use('/jobs', require('./Routes/jobs'));

app.listen(port, function () {
    console.log(`O express está rodando na porta ${port}`)
    console.log(`Acesse: localhost:${port}`)
})