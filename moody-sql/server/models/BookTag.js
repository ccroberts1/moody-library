// const { Model, DataTypes } = require("sequelize");
// const Book = require("./Book");
// const Tag = require("./Tag");
// const sequelize = require("../config/connection");

// class BookTag extends Model {}

// BookTag.init(
//   {
//     bookTagId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     BookId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Book,
//         key: "id",
//       },
//     },
//     TagId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Tag,
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     modelName: "bookTag",
//   }
// );

// module.exports = BookTag;
