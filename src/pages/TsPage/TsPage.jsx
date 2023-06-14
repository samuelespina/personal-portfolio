import React from "react";
import { useState, useEffect } from "react";
import { Project, ScrollUx } from "../../components";
import pr from "../..//Immagine 2023-04-17 083451.png";
import AOS from "aos";

const TsPage = () => {
  const project4 = [
    {
      title: "Travelly",
      img: pr,
      link: "https://travelly-headless-blog.netlify.app/",
    },
  ];

  const [maxScrollHeight, setMaxScrollHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setMaxScrollHeight(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  }, []);

  return (
    <>
      <div className="typescript">
        <ScrollUx vanishHeight={maxScrollHeight - 350} />
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
        <section>
          <h2 data-aos="fade-right">Typescript</h2>
          <h3 data-aos="fade-right">What is typescript?</h3>
          <p data-aos="fade-up">
            TypeScript is a syntactic superset of JavaScript which adds static
            typing.
          </p>
          <p data-aos="fade-up">
            This basically means that TypeScript adds syntax on top of
            JavaScript, allowing developers to add types.
          </p>
          <p data-aos="fade-up"> Why should I use TypeScript?</p>
          <p data-aos="fade-up">JavaScript is a loosely typed language.</p>
          <p data-aos="fade-up">
            It can be difficult to understand what types of data are being
            passed around in JavaScript.
          </p>
          <p data-aos="fade-up">
            In JavaScript, function parameters and variables don't have any
            information!
          </p>
          <p data-aos="fade-up">
            So developers need to look at documentation, or guess based on the
            implementation.
          </p>
          <p data-aos="fade-up">
            TypeScript allows specifying the types of data being passed around
            within the code, and has the ability to report errors when the types
            don't match.
          </p>
          <p data-aos="fade-up">
            For example, TypeScript will report an error when passing a string
            into a function that expects a number.
          </p>
          <p data-aos="fade-up"> JavaScript will not.</p>
          <p data-aos="fade-up">TypeScript uses compile time type checking.</p>
          <p data-aos="fade-up">
            Which means it checks if the specified types match before running
            the code, not while running the code.
          </p>
          <p data-aos="fade-up">As a result typescript is safer</p>
          <p data-aos="fade-up">
            Using typescript I created Travelly, a travel blog based on a
            start-up created in Copenaghen during my last year of high school.
          </p>
          <p data-aos="fade-up">
            I used a Wordpress page as a "database", from which I get the data
            of the articles through API calls in GraphQL with the axios library.
          </p>
          <p data-aos="fade-up">
            Then I manipulate the data and view it on the website.
          </p>
          <p data-aos="fade-up">
            {" "}
            This mix ensures good fluidity within the React website and at the
            same time great ease of editing articles via the Wordpress page
            itself.
          </p>
          <p data-aos="fade-up">
            This type of technology is called "headless".
          </p>
        </section>
        <article>
          <h3 data-aos="fade-up" className="ptitle">
            Projects
          </h3>
          <div className="projects-container">
            {project4.map((elem, i) => (
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
    </>
  );
};

export default TsPage;
