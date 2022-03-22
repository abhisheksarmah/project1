import React, { useEffect, useRef, useState } from "react";
import "./Prim.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import bg from "../Assets/images/Transparent.png";
import Detailed from "./details/Detailed";
import Detailed1 from "./details/Detailed1";
import Detailed2 from "./details/Detailed2";
import Detailed3 from "./details/Detailed3";
// import Siab from "./Siab";
import icon1 from "../../Assets/images/Classroom Learning.png";

const detailsConfig = [
  {
    icon: icon1,
    text: `Hello One of my passions about being a software developer is
    understanding and creating the unique features that we come across, as
    a user, using an app or browsing a website. When I first started
    building apps, Day/Night mode was on top of my list to understand.
    Today, using this tutorial, I was able to create an animated sidebar
    using Tailwind. This is my first time using Tailwind and I really
    enjoyed the breakdown from James’ Youtube video. This tutorial
    features React Hooks, useState, which is always great to implement in
    a tutorial.`,
  },
];

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarOpen = () => {
    setIsOpen(!isOpen);
  };
  let containRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!containRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="bg-green-100">
        <div
          ref={containRef}
          className={`sticky md:h-screen h-screen w-2/3 bg-green-100 bg-contain bg-no-repeat ${
            !isOpen ? `mx-auto duration-700` : `mx-0 duration-700`
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute md:top-14 md:right-44  grid grid-cols-2">
            <span className="md:text-2md  md:font-semibold md:pt-6">
              Classroom Learning
            </span>

            <Detailed handleOpen={handleSideBarOpen} />
          </div>

          <div className="absolute md:top-64 md:right-10  grid grid-cols-2">
            <span className="md:text-2md md:font-semibold md:pt-6 ">
              Experiential Learning
            </span>
            <Detailed1 handleOpen={handleSideBarOpen} />
          </div>
          <div className="absolute md:bottom-56 md:right-6  grid grid-cols-2">
            <span className="md:text-2md md:font-semibold md:pt-6">
              Carbon Neutral Schools
            </span>
            <Detailed2 handleOpen={handleSideBarOpen} />
          </div>
          <div className="absolute md:bottom-10 md:right-48  grid grid-cols-2">
            <span className="md:text-2md md:font-semibold md:pt-6">
              Junior Green Compass +
            </span>
            <Detailed3 handleOpen={handleSideBarOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
