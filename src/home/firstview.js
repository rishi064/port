import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bc from "./bc";
// import { useRef } from "react";

export default function FirstView(props) {
  const run = (e) => {
    e.target.children[0].style.translate = "2rem";
    // e.target.children.forEach(element => {
    //   element.style.translate="4rem"

    // });
  };
  // const refDemo=useRef();

  const [color, setcolor] = useState("#F3B61C");

  const styles = {
    // backgroundColor: color,
    backgroundColor: "green",
    color: props.color,
    transition: "1.5s ease",
    marginTop: "12rem",
  };
  const colorstyle = {
    color: props.color,
    display: "flex",
    flexDirection: "row",
  };

  setTimeout(() => {
    if (color === "#F3B61C") setcolor("#1e7727");
    else setcolor("#F3B61C");
  }, 3000);

  return (
    <div className="">
      <div className="firstview" style={{ backgroundColor: "" }}>
        <div className="desc">
          <div className={`name `} style={styles}>
            Hi<div>I'am Rishi</div>{" "}
            <div style={{ fontsize: "1.1rem" }}>Prasad Aryal</div>
          </div>

          <div className="text">
            <p className="short" style={colorstyle}>
              Passionate web enthusiast trying to set strong foot on web
              development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
