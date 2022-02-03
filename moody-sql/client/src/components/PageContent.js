import React, { useState } from "react";
import Navbar from "./Navbar";
// import MyLibrary from "./pages/MyLibrary";
// import SingleBook from "./pages/SingleBook";
// import TagResults from "./pages/TagResults";
// import TagSearch from "./pages/TagSearch";

const ContentContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "MyLibrary") {
      return <MyLibrary />;
    } else if (currentPage === "SingleBook") {
      return <SingleBook />;
    } else {
      return <TagSearch />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
};

export default ContentContainer;
