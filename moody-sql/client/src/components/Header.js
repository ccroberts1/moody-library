import React from "react";
import "../styles/Hero.css";

const Header = () => {
  return (
    <>
      <div id="hero" className="d-flex flex-column justify-content-between">
        <h1 className="text-center">Moody Library</h1>
        <h2 className="text-center">What are you in the mood for?</h2>
        <p className="text-muted">
          Photo by{" "}
          <a href="https://unsplash.com/@agaputrantara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Aga Putra
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/reading-rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </>
  );
};

export default Header;
