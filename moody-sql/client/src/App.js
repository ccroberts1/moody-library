import "./App.css";
// import axios from "axios";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3001/");
  // });
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <Navbar />
          <Header />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
