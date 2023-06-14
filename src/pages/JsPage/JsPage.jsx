import { Project, ScrollUx } from "../../components";
import pr from "../..//Immagine 2023-04-17 083451.png";
import { useState, useEffect } from "react";
import AOS from "aos";

const JsPage = () => {
  const project2 = [
    {
      title: "Caesars Cipher",
      img: pr,
      link: "https://glistening-sherbet-083360.netlify.app/",
    },
    {
      title: "Palindrome checker",
      img: pr,
      link: "https://soft-pegasus-6fd380.netlify.app/",
    },
    {
      title: "Roman Numeral Converter",
      img: pr,
      link: "https://stirring-moonbeam-0ebdb3.netlify.app/",
    },
    {
      title: "Telephone Number Validator",
      img: pr,
      link: "https://lovely-pony-13cd6c.netlify.app/",
    },
  ];

  const [maxScrollHeight, setMaxScrollHeight] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMaxScrollHeight(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  }, []);

  return (
    <div className="JavaScript">
      <ScrollUx vanishHeight={maxScrollHeight - 450} />
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
        <h2 data-aos="fade-right">JavaScript</h2>
        <h3 data-aos="fade-right">What is JavaScript?</h3>
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
