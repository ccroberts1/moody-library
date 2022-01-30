const router = require("express").Router();

const Book = require("../../models/Book");

router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll();
    res.json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:bookId", async (req, res) => {
  const bookData = await Book.findOne({
    where: {
      id: req.params.bookId,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(bookData);
});

router.put("/:bookId", async (req, res) => {
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
  ).catch((err) => {
    res.json(err);
  });
  res.json(updatedBook);
});

router.delete("/:bookId", async (req, res) => {
  const deletedBook = await Book.destroy({
    where: {
      id: req.params.bookId,
    },
  }).catch((err) => {
    res.json(err);
  });
  res.json(deletedBook);
});

router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      format: req.body.format,
      genre: req.body.genre,
      pages: req.body.pages,
    });
    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
