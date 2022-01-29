const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
    {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }, 
        format: {
            type: DataTypes.STRING
        }, 
        genre: {
            type: DataTypes.STRING
        }, 
        pages: {
            type: DataTypes.INTEGER
        }, 
        tags: {
            type: DataTypes.STRING //Need to figure out how to add in the schema
        }, 
    },
    {
        sequelize, 
        timestamps: false,
        modelName: "book"
    }
);

module.exports = Book;