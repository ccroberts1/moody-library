import "./App.css";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <Navigation />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
