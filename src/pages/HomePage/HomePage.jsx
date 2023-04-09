import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [currentX, setX] = useState(0);
  const [currentY, setY] = useState(0);
  const navigate = useNavigate("/");

  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);
  const p5 = useRef(null);
  const p6 = useRef(null);
  const p7 = useRef(null);
  const p8 = useRef(null);
  const p9 = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);

  useEffect(() => {
    if (p1.current) {
      p1.current.style.top = -560 - currentY / 40 + "px";
      p1.current.style.left = 540 - currentX / 40 + "px";
    }
    if (p2.current) {
      p2.current.style.top = 190 - currentY / 25 + "px";
      p2.current.style.left = 180 - currentX / 25 + "px";
    }
    if (p3.current) {
      p3.current.style.top = -70 - currentY / 18 + "px";
      p3.current.style.left = -70 - currentX / 18 + "px";
    }
    if (p4.current) {
      p4.current.style.top = 410 - currentY / 18 + "px";
      p4.current.style.left = 400 - currentX / 18 + "px";
    }
    if (p5.current) {
      p5.current.style.top = 250 - currentY / 15 + "px";
      p5.current.style.left = 1260 - currentX / 15 + "px";
    }
    if (p6.current) {
      p6.current.style.top = 90 - currentY / 20 + "px";
      p6.current.style.left = 50 - currentX / 20 + "px";
    }
    if (p7.current) {
      p7.current.style.top = 90 - currentY / 25 + "px";
      p7.current.style.left = 65 - currentX / 25 + "px";
    }
    if (p8.current) {
      p8.current.style.top = 170 - currentY / 14 + "px";
      p8.current.style.left = 30 - currentX / 14 + "px";
    }
    if (p9.current) {
      p9.current.style.top = 350 - currentY / 17 + "px";
      p9.current.style.left = -80 - currentX / 17 + "px";
    }
  }, [
    p1.current,
    p2.current,
    p3.current,
    p4.current,
    p5.current,
    p6.current,
    p7.current,
    p8.current,
    p9.current,
    currentX,
    currentY,
  ]);

  return (
    <>
      <div className="home-page">
        <div className="parallax">
          <div ref={p1} className="shape1"></div>
          <div ref={p2} className="shape2"></div>
          <div ref={p3} className="shape3"></div>
          <div ref={p4} className="shape4"></div>
          <div ref={p5} className="shape5"></div>
          <div ref={p6} className="shape6"></div>
          <div ref={p7} className="shape7"></div>
          <div ref={p8} className="shape8"></div>
          <div ref={p9} className="shape9"></div>
        </div>

        <section
          className="presentation"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="title"
          >
            NovaDGT
          </h1>

          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="typewriter"
          >
            Let's start your{" "}
            <span>
              <Typewriter
                options={{
                  strings: ["digitalization.", "business.", "fly."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>

          <p>Hi, I'm Samuele Spina and I'm a front-end developer.</p>
          <p>
            I can help you to advertise your business by creating totally
            customizable websites for you, for the salling of your products or
            for sponsoring your company.
          </p>
          <p className="slogan">Start flying!</p>
        </section>
        <p className="sk-title" data-aos="fade-up">
          My Skills
        </p>
        <section className="skills">
          <div data-aos="fade-up" data-aos-delay={300}>
            <div className="skill-wrapper">
              <div
                className="skill"
                onClick={() => {
                  navigate("/skills-html5");
                }}
              >
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <p className="sk-p">HTML5</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay={600}>
            {" "}
            <div className="skill-wrapper">
              <div
                className="skill"
                onClick={() => {
                  navigate("/skills-css");
                }}
              >
                <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <p className="sk-p">CSS / SCSS</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay={900}>
            <div className="skill-wrapper">
              <div
                className="skill"
                onClick={() => {
                  navigate("/skills-javascript");
                }}
              >
                <FontAwesomeIcon icon={faSquareJs} />
              </div>
              <p className="sk-p">JAVASCRIPT</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay={1200}>
            <div className="skill-wrapper">
              <div
                className="skill"
                onClick={() => {
                  navigate("/skills-react.js");
                }}
              >
                <FontAwesomeIcon icon={faReact} />
              </div>
              <p className="sk-p">REACT</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
