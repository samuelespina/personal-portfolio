import {
  faFreeCodeCamp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <footer>
      <div
        className="waves
      "
      >
        <Wave
          className="wave1"
          fill="#161616"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
        <Wave
          className="wave2"
          fill="#111111"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
        <Wave
          className="wave3"
          fill="#0a0a0a"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
        <Wave
          className="wave4"
          fill="#000000"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>

      <div className="contacts">
        <h2>Contact me</h2>
        <div className="flex-contacts">
          <a
            className="cnt"
            href="https://www.instagram.com/_samuele.spina_/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <p className="cnt">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+39 348 5249304"> +39 348 5249304 </a>
          </p>

          <a href="" target="_blank" className="cnt">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
