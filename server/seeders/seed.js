const db = require("../config/connection");
const { Book } = require("../models");
const bookSeeds = require("./bookSeeds.json");

db.once("open", async () => {
  try {
    await Book.deleteMany({});
    await Book.create(bookSeeds);

    console.log("Database has been seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
