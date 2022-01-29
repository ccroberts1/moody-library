const sequelize = require("../config/connection");
const { Book, Tag, BookTag } = require("../models");

const bookSeedData = require("./bookSeedData.json");
// const tagSeedData = require("./tagSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const books = await Book.bulkCreate(bookSeedData);

  process.exit(0);
};

seedDatabase();
