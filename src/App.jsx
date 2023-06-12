import {
  CssPage,
  HomePage,
  HtmlPage,
  JsPage,
  ReactPage,
  TsPage,
} from "./pages";
import React, { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes,
} from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
  const cursor = useRef(null);

  useEffect(() => {
    if (cursor.current) {
      document.addEventListener("mousemove", (e) => {
        cursor.current.style.top = `${e.clientY - 15}px`;
        cursor.current.style.left = `${e.clientX - 15}px`;
      });
      document.addEventListener("click", () => {
        cursor.current.classList.add("expand");

        setTimeout(() => {
          cursor.current.classList.remove("expand");
        }, 500);
      });
    }
  }, [cursor.current]);

  return (
    <BrowserRouter>
      <div ref={cursor} className="cursor"></div>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/skills-html5" element={<HtmlPage />}></Route>

          <Route path="/skills-css" element={<CssPage />}></Route>

          <Route path="/skills-javascript" element={<JsPage />}></Route>

          <Route path="/skills-react.js" element={<ReactPage />}></Route>

          <Route path="//skills-typescript" element={<TsPage />}></Route>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
