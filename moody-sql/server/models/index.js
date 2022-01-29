const Book = require("./Book");
const Tag = require("./Tag");
// const BookTag = require("./BookTag");

Book.belongsToMany(Tag, { through: "BookTag" });
Tag.belongsToMany(Book, { through: "BookTag" });
