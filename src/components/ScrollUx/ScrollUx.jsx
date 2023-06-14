import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

const ScrollUx = (props) => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollUxRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    console.log(scrollValue);
    if (scrollUxRef.current) {
      if (scrollValue > props.vanishHeight) {
        scrollUxRef.current.classList.add("active");
      } else {
        scrollUxRef.current.classList.remove("active");
      }
    }
  }, [scrollValue, scrollUxRef.current]);

  return (
    <div className="scroll-ux">
      <FontAwesomeIcon
        className="arrows"
        ref={scrollUxRef}
        icon={faAnglesDown}
      />
      <p>{props.vanishHeight}</p>
      <p>{scrollValue}</p>
    </div>
  );
};

export default ScrollUx;
