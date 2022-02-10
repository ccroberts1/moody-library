const router = require("express").Router();
const cors = require("cors");

const Book = require("../../models/Book");

router.get("/", cors(), async (req, res) => {
  try {
    const bookData = await Book.findAll();
    res.json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:bookId", async (req, res) => {
  try {
    const bookData = await Book.findOne({
      where: {
        id: req.params.bookId,
      },
    });
    res.json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:bookId", async (req, res) => {
  try {
    const updatedBook = await Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        format: req.body.format,
        genre: req.body.genre,
        pages: req.body.pages,
        tags: req.body.tags,
      },
      {
        where: {
          id: req.params.bookId,
        },
      }
    );
    res.json(updatedBook);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:bookId", async (req, res) => {
  try {
    const deletedBook = await Book.destroy({
      where: {
        id: req.params.bookId,
      },
    });
    res.json(deletedBook);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", cors(), async (req, res) => {
  try {
    const newBook = req.body;
    await Book.create(newBook);
    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
