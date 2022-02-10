import "./App.css";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import MyLibrary from "./components/pages/MyLibrary";
import AddBook from "./components/pages/AddBook";
// import api from "./posts";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <Navigation />
          <AddBook />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
