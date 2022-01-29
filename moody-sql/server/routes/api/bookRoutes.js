const router = rquire("express").Router();

const Book = require("../../models/Book");

router.get("/allBooks", async (req, res) => {
    const bookData = Book.findAll().catch((err) => {
        res.json(err);
    });
    res.json(bookData);
});

router.get("/:bookId", async (req, res) => {
    const bookData = await Book.findOne(
        {
            where: {
               book_id: req.params.bookId
            },
        }
    ).catch((err) => {
        res.json(err)
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
            tags: req.body.tags
        },
        {
            where: {
                book_id: req.params.bookId
            },
        }
    ).catch((err) => {
        res.json(err)
    });
    res.json(updatedBook);
});

router.delete("/:bookId", async (req, res) => {
    const deletedBook = await Book.destroy({
        where: {
            book_id: req.params.bookId
        },
    }).catch((err) => {
        res.json(err)
    });
    res.json(deletedBook);
});

router.post("/addBook", async (req, res) => {
    try {
    const newBook = await Book.create(req.body);
    res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;