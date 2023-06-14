import { useEffect, useState } from "react";
import AOS from "aos";
import { ScrollUx } from "../../components";

const HtmlPage = () => {
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setMaxScrollHeight(window.scrollMaxY);
  }, []);

  return (
    <div className="html">
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
      <article>
        <h2 data-aos="fade-right">HTML</h2>
        <h3 data-aos="fade-right">What is HTML?</h3>
        <p data-aos="fade-up">
          HTML is the language for describing the structure of Web pages.
          <br></br>
          HTML gives authors the means to:
        </p>
        <ul>
          <li data-aos="fade-up">
            Publish online documents with headings, text, tables, lists, photos,
            etc.
          </li>
          <li data-aos="fade-up">
            Retrieve online information via hypertext links, at the click of a
            button.
          </li>
          <li data-aos="fade-up">
            Design forms for conducting transactions with remote services, for
            use in searching for information, making reservations, ordering
            products, etc.
          </li>
          <li data-aos="fade-up">
            Include spread-sheets, video clips, sound clips, and other
            applications directly in their documents.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default HtmlPage;
