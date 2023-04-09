import { Project } from "../../components";
import pr from "../..//pngtree-img-file-document-icon-png-image_939156.jpg";
import { useEffect } from "react";
import AOS from "aos";

const JsPage = () => {
  const project2 = [
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
    { title: "", img: pr, link: "" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="JavaScript">
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
        <h2 data-aos="fade-up">JavaScript</h2>
        <h3 data-aos="fade-up">What is JavaScript?</h3>
        <p data-aos="fade-up">
          JavaScript is a scripting language used to create and control dynamic
          website content, i.e. anything that moves, refreshes, or otherwise
          changes on your screen without requiring you to manually reload a web
          page.
        </p>
        <p data-aos="fade-up"> Features like:</p>
        <ul>
          <li data-aos="fade-up">animated graphics</li>
          <li data-aos="fade-up">photo slideshows</li>
          <li data-aos="fade-up">autocomplete text suggestions</li>
          <li data-aos="fade-up">interactive forms</li>
        </ul>
        <p data-aos="fade-up">
          I've already done some progects with JavaScript, see these below!
        </p>
      </article>
      <article>
        <h3 data-aos="fade-up" className="ptitle">
          Projects
        </h3>
        <div className="projects-container">
          {project2.map((elem, i) => (
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

export default JsPage;
