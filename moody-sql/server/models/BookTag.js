const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BookTag extends Model {}

BookTag.init({
  bookTagId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  BookId: {
    type: DataTypes.INTEGER,
    references: {
      model: Book,
      key: "id",
    },
  },
  TagId: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: "id",
    },
  },
});

module.exports = BookTag;
