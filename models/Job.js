const {DataTypes} = require('sequelize');
const {sequelize} = require('../db/connection');

const Job = sequelize.define('Jobs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
    },
    salary: {
        type: DataTypes.TEXT,
    },
    company: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.TEXT,
    },
    new_job: {
        type: DataTypes.INTEGER,
    }
});

module.exports = {Job};