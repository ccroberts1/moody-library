const sequelize = require("../config/connection");
const Book = require("../models/Book");

const bookSeedData = require("./bookSeedData.json");
// const tagSeedData = require("./tagSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync();

  await Book.bulkCreate(bookSeedData);

  process.exit(0);
};

seedDatabase();
