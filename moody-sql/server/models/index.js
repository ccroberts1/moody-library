const Book = require("./Book");
const Tag = require("./Tag");

Book.belongsToMany(Tag, { through: "BookTag" });
Tag.belongsToMany(Book, { through: "BookTag" });
