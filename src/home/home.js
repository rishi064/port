import React from "react";
import { useState } from "react";
import FirstView from "./firstview";
import Footer from "./footer";
import Projects from "./projects";
import Skills from "./skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./navbar";

export const Home = () => {
  const style = {};
  const scroll = useRef(null);
  const handlescroll = (ref) => {
    window.scrollTo({ top: ref.offsetTop, left: 0 });
  };

  const [mode, setmode] = useState(
    localStorage.getItem("mode") !== null
      ? localStorage.getItem("mode")
      : "light"
  );
  document.body.style.backgroundColor = mode === "dark" ? "#001A00" : "#FCFAFA";
  const [color, setcolor] = useState(mode === "dark" ? "white" : "black");

  const clickmode = () => {
    if (mode === "light") {
      setmode("dark");
      localStorage.setItem("mode", "dark");
      setcolor("white");
    } else {
      setmode("light");
      localStorage.setItem("mode", "light");
      setcolor("black");
    }
    return mode;
  };
  return (
    <>
      <Router>
        <Navbar
          clickmode={clickmode}
          color={color}
          handlescroll={handlescroll}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FirstView color={color} />

                <Skills />
                <Projects color={color} refscroll={scroll} />
                <Footer color={color} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
