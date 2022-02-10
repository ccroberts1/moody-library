import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyLibrary from "./components/pages/MyLibrary";
import AddBook from "./components/pages/AddBook";
// import api from "./posts";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <Navbar />
          <AddBook />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
