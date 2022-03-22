import React, { useEffect, useRef, useState } from "react";
import icon1 from "../../Assets/images/Classroom Learning.png";
import bg from "../../Assets/images/Transparent.png";
import Section1 from "../Section1";

export default function Detailed(props) {
  const [isOpen, setIsOpen] = useState(false);
  let sideRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!sideRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSideBarOpen = () => {
    setIsOpen(!isOpen);
    props.handleOpen();
  };
  return (
    <>
      {!isOpen ? (
        <>
          <div onClick={handleSideBarOpen}>
            <img
              src={icon1}
              alt="icon1"
              className="lg:w-28 lg:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out "
            />
          </div>
        </>
      ) : (
        <>
          <button
            className="text-xl text-white fixed top-4 right-4 z-10"
            onClick={handleSideBarOpen}
          >
            x
          </button>
          <div onClick={handleSideBarOpen}>
            <img
              src={icon1}
              alt="icon1"
              className="lg:w-28 lg:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out "
            />
          </div>
        </>
      )}
      <div
        ref={sideRef}
        className={`top-0 fixed right-0 bg-green-100 w-[34vw] pt-6 px-3 h-[200vh] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-700`}
      >
        <h1>
          Hello One of my passions about being a software developer is
          understanding and creating the unique features that we come across, as
          a user, using an app or browsing a website. When I first started
          building apps, Day/Night mode was on top of my list to understand.
          Today, using this tutorial, I was able to create an animated sidebar
          using Tailwind. This is my first time using Tailwind and I really
          enjoyed the breakdown from James’ Youtube video. This tutorial
          features React Hooks, useState, which is always great to implement in
          a tutorial.
        </h1>
      </div>
    </>
  );
}
