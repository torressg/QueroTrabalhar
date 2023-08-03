const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Conectou ao Banco com sucesso.')
    })
    .catch(error => {
        console.log('Ocorreu um erro, ', error)
    })

module.exports = {sequelize}