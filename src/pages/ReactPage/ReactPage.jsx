import { Project } from "../../components";
import pr from "../..//Immagine 2023-04-17 083451.png";
import AOS from "aos";
import { useEffect } from "react";

const ReactPage = () => {
  const project3 = [
    {
      title: "random quote machine",
      img: pr,
      link: "https://willowy-wisp-70657a.netlify.app/",
    },
    {
      title: "drum machine",
      img: pr,
      link: "https://merry-khapse-54bdc0.netlify.app/",
    },
    {
      title: "calculator",
      img: pr,
      link: "https://dashing-gecko-3e7b3a.netlify.app/",
    },
    {
      title: "markdown previewer",
      img: pr,
      link: "https://effervescent-mooncake-f6f69b.netlify.app/",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="React">
      <div className="animation-first-circle1">
        <div className="animation-second-circle1"></div>
      </div>
      <div className="animation-first-circle2">
        <div className="animation-second-circle2"></div>
      </div>
      <div className="animation-first-circle3">
        <div className="animation-second-circle3"></div>
      </div>
      <div className="animation-first-circle4">
        <div className="animation-second-circle4"></div>
      </div>
      <article>
        <h2 data-aos="fade-right">React.js</h2>
        <h3 data-aos="fade-right">What is React.js?</h3>
        <p>
          React JS is a JavaScript front-end framework created by FaceBook, that
          allows web developers to reuse traditional HTML code using components,
          to keep the code clean, dynamic, and fast.
        </p>
        <p>
          This framework is declarative, allowing you to automatically update
          your components according to changes in data.
        </p>
        <p>
          React JS can also help you make a faster website given that it
          leverages the concept of having a Single Paged Application (SPA).
        </p>
        <p>I've already done some progects with JavaScript, see these below!</p>
      </article>
      <article>
        <h3 data-aos="fade-up" className="ptitle">
          Projects
        </h3>
        <div className="projects-container">
          {project3.map((elem, i) => (
            <div data-aos="fade-up" data-aos-delay={`${i * 300}`}>
              <Project
                key={i}
                title={elem.title}
                img={elem.img}
                link={elem.link}
              />
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ReactPage;
