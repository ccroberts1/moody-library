import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="mb-4 d-flex flex-column align-items-center">
        <p className="lead text-center mt-3">Created by Caitlin Roberts </p>
        <div className="links-container">
          <a
            href="https://github.com/ccroberts1"
            className="btn btn-outline-light btn-floating m-3"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a
            href="https://twitter.com/caitlincroberts"
            className="btn btn-outline-light btn-floating m-3"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
