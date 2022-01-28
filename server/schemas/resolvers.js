const { Book } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },

    book: async (parent, args) => {
      return Book.findOne({ _id: bookId });
    },
    tags: async (parent, {tagName}) => {
      return Book.find({tags: { $elemMatch: { $eq: {tagName} }}});
    }
  },

  Mutation: {
    addBook: async (parent, { title, author }) => {
      return Book.create({ title, author });
    },
    removeBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ _id: bookId });
    },
    //TODO: Consider whether to add mutations for adding and removing tags
  },
};

module.exports = resolvers;
