import BookForm from "../partials/BookForm";

const AddBook = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="display-6 text-center m-3">Add a Book</h1>
      <BookForm />
    </div>
  );
};

export default AddBook;
