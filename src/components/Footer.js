import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">More informations</p>
        {/* <p className="footer-subscription-text">blbabla</p> */}
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Our team</Link>
            <Link to="/">Location</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Phone</Link>
            <Link to="/">Email</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Gallery</h2>
            <Link to="/">Photo gallery</Link>
            <Link to="/">Videos</Link>
          </div>

          <div className="footer-link-items">
            <h2>Details</h2>
            <Link to="/sign-up">Join to see best offers</Link>
            <Link to="/">Reviews</Link>
          </div>
        </div>

        {/* <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link> <Link to="/">Careers</Link>{" "}
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link> <Link to="/">Careers</Link>{" "}
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div> */}
      </div>

      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            {/* <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3" />
            </Link> */}
            <small className="website-rights">TRVL &copy; 2021</small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>

              <Link
                className="social-icon-link instagram"
                to="/"
                target="blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="blank"
                aria-label="youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="blank"
                aria-label="twitter"
              >
                <i className="fab fa-twitter" />
              </Link>

              <Link
                className="social-icon-link linkedin"
                to="/"
                target="blank"
                aria-label="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
