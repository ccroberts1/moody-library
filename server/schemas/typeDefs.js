const { gql } = require("apollo-server-express");
//TODO: Need to look up details on graphQL mutations and queries
const typeDefs = gql`
  type Book {
    _id: ID
    title: String!
    author: String!
    format: String
    genre: String
    length: Int
    tags: [String]
  }

  type Query {
    books: [Book]!
    book(bookId: ID!): Book
    tags(tagName: String!): Book
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      format: String
      genre: String
      length: Int
      tags: [String]
    ): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
