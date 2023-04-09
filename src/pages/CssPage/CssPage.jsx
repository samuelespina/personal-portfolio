import { Project } from "../../components";
import pr from "../..//pngtree-img-file-document-icon-png-image_939156.jpg";
import { useEffect } from "react";
import AOS from "aos";

const CssPage = () => {
  const project1 = [
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="css">
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
        <h2 data-aos="fade-up">CSS</h2>
        <h3 data-aos="fade-up">What is CSS?</h3>
        <p data-aos="fade-up">
          CSS is the language for describing the presentation of Web pages,
          including colors, layout, and fonts.
        </p>
        <p data-aos="fade-up">
          It allows one to adapt the presentation to different types of devices,
          such as large screens, small screens, or printers.
        </p>
        <p data-aos="fade-up">
          CSS is independent of HTML and can be used with any XML-based markup
          language.
        </p>
        <p data-aos="fade-up">
          The separation of HTML from CSS makes it easier to maintain sites,
          share style sheets across pages, and tailor pages to different
          environments.
        </p>
        <p data-aos="fade-up">
          This is referred to as the separation of structure (or: content) from
          presentation.
        </p>
        <p data-aos="fade-up">
          I can also use SCSS,that offers a way to write styles for websites
          with more enhanced CSS syntax.
        </p>
        <p data-aos="fade-up">
          using this language we will greatly improve the development of the
          code
        </p>
        <p className="sep" data-aos="fade-up">
          I've already done some progects with HTML and CSS, see these below!
        </p>
      </article>
      <article>
        <h3 data-aos="fade-up" className="ptitle">
          Projects
        </h3>
        <div className="projects-container">
          {project1.map((elem, i) => (
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

export default CssPage;
