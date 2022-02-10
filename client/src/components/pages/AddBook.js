import BookForm from "../partials/BookForm";

const AddBook = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="display-3 text-align-center m-3">Add a book</h1>
      <BookForm />
    </div>
  );
};

export default AddBook;
