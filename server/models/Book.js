const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  format: {
    type: String,
  },
  genre: {
    type: String,
  },
  length: {
    type: Number,
    trim: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Book = model("book", bookSchema);

module.exports = Book;
