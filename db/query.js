const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Jobs = sequelize.define('Jobs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    salary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    company: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    new: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = {Jobs};