const sequelize = require("../config/connection");
const Book = require("../models/Book");
const Tag = require("../models/Tag");

const bookSeedData = require("./bookSeedData.json");
const tagSeedData = require("./tagSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Book.bulkCreate(bookSeedData);

  await Tag.bulkCreate(tagSeedData);

  process.exit(0);
};

seedDatabase();
