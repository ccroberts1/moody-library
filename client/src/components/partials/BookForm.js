import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../../styles/Form.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [format, setFormat] = useState("Novel");
  const [genre, setGenre] = useState("Fantasy");
  const [pages, setPages] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, format, genre, pages, img };
    console.log(newBook);
    axios
      .post("http://localhost:3001/api/books", {
        title: newBook.title,
        author: newBook.author,
        format: newBook.format,
        genre: newBook.genre,
        pages: newBook.pages,
        img: newBook.img,
      })
      .then((response) => {
        console.log(response);
        console.log("Book added to the database");
      });
  };
  return (
    <div>
      <Form className="m-3 p-3 border" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="format">
          <Form.Label>Format</Form.Label>
          <Form.Select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="Novella">Novella</option>
            <option value="Novel">Novel</option>
            <option value="Anthology">Anthology</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Contemporary Fiction">Contemporary Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Classic">Classic</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="pages">
          <Form.Label>Page Count</Form.Label>
          <Form.Control
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pages">
          <Form.Label>Image URL</Form.Label>
          <Form.Control value={img} onChange={(e) => setImg(e.target.value)} />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BookForm;
