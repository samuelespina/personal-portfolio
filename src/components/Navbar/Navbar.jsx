import { faCaretDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const sk_a = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    if (navbar.current) {
      if (scrollValue > 100) {
        navbar.current.classList.add("active");
      } else {
        navbar.current.classList.remove("active");
      }
    }
  }, [scrollValue, navbar.current]);

  useEffect(() => {
    if (sk_a.current) {
      document.addEventListener("mousedown", (e) => {
        if (!sk_a.current.contains(e.target)) {
          sk_a.current.classList.remove("active");
        }
      });
    }
  }, [sk_a.current]);

  return (
    <>
      <header ref={navbar} className="navbar-wrapper">
        <nav className="navbar">
          <a className="home">
            <FontAwesomeIcon
              icon={faHome}
              onClick={() => {
                navigate("/");
              }}
            />
          </a>
          <a
            className="link"
            target="_blank"
            href="https://www.freecodecamp.org/fcc27ba8e1c-8461-4eb9-8423-5f3381cf70ab"
          >
            FCC curriculum
          </a>

          <div ref={sk_a} className="skills-area">
            <a
              className="link"
              onClick={() => {
                sk_a.current.classList.toggle("active");
              }}
            >
              Skills
              <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <div className="menu">
              <p
                onClick={() => {
                  navigate("/skills-html5");
                }}
              >
                HTML5
              </p>
              <hr />
              <p
                onClick={() => {
                  navigate("/skills-css");
                }}
              >
                CSS/SCSS
              </p>
              <hr />
              <p
                onClick={() => {
                  navigate("/skills-javascript");
                }}
              >
                JAVASCRIPT
              </p>
              <hr />
              <p
                onClick={() => {
                  navigate("/skills-react.js");
                }}
              >
                REACT.JS
              </p>
            </div>
          </div>

          <a
            className="link"
            onClick={() => {
              window.scrollTo(0, 20000);
            }}
          >
            Contacts
          </a>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
