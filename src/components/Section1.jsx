import React, { useEffect, useRef, useState } from "react";
import "../components/css/Prim.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import bg from "../Assets/images/Transparent.png";
import icon3 from "../Assets/images/Carbon Neutral Schools.png";
import Detailed from "./details/Detailed";
import icon1 from "../Assets/images/Classroom Learning.png";
import icon2 from "../Assets/images/Experiential Learning.png";
import icon4 from "../Assets/images/Junior Green Compass +.png";
import SideBar from "./SideBar";
import DialogBoxMobile from "./Mobile/DialogBoxMobile";

const detailsConfig = [
  {
    id: "classRoomLearning",
    icon: icon1,
    title: "Classroom Learning",
    text: `Hello One of my passions about being a software developer is
    understanding and creating the unique features that we come across, as
    a user, using an app or browsing a website. When I first started
    building apps, Day/Night mode was on top of my list to understand.
    Today, using this tutorial, I was able to create an animated sidebar
    using Tailwind. This is my first time using Tailwind and I really
    enjoyed the breakdown from James’ Youtube video. This tutorial
    features React Hooks, useState, which is always great to implement in
    a tutorial.`,
    className: "absolute md:top-[30px] md:right-[126px] icon1 columns-2 ",
    classTitle:
      "top-10 titles md:font-semibold text-[24px] absolute -left-[210px]",
  },
  {
    id: "experimentalLearning",
    icon: icon2,
    title: "Experiential Learning",
    text: `testing going`,
    className: "absolute md:top-[220px] md:-right-[15px] icon2 columns-2 ",
    classTitle:
      "top-10 titles1 md:font-semibold text-[24px] absolute -left-[225px]",
  },
  {
    id: "neutralSchools",
    icon: icon3,
    title: "Carbon Neutral Schools",
    text: `Hello One of my passions about being a software developer is
    understanding and creating the unique features that we come across, as
    a user, using an app or browsing a website. When I first started
    building apps, Day/Night mode was on top of my list to understand.
    Today, using this tutorial, I was able to create an animated sidebar
    using Tailwind. `,
    className: "absolute md:top-[420px] md:-right-[30px] icon3 columns-2 ",
    classTitle:
      "top-10 titles2 md:font-semibold text-[24px] absolute -left-[255px]",
  },
  {
    id: "greenCompas",
    icon: icon4,
    title: " Junior Green Compass +",
    text: `Hello One of my passions about being a software developer is
    understanding and creating the unique features that we come across, as
    a user, using an app or browsing a website. When I first started
    building apps, `,
    className: "absolute md:top-[610px] md:right-[120px] icon4  columns-2",
    classTitle:
      "top-8 titles3 md:font-semibold text-[24px] absolute -left-[255px]",
  },
];

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarText, setSidebarText] = useState(null);

  const handleSideBarOpen = (id) => {
    setSidebarText(detailsConfig.find((item) => item.id === id).text);
    if (isOpen) {
    } else if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    } else if (!isOpen) {
    }
  };
  let containRef = useRef();

  let handler = (event) => {
    console.log(containRef.current);
    console.log(event.target);
    if (!containRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="bg-green-100 section1">
        <div
          ref={containRef}
          className={`sticky md:h-screen h-[100vh] w-2/3 bg-green-100 bg-contain secContainer bg-no-repeat ${
            !isOpen ? `mx-auto` : `mx-0`
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          {detailsConfig.map((item, index) => (
            <div className={item.className} key={index}>
              <span className={item.classTitle}>{item.title}</span>

              <Detailed
                handleOpen={handleSideBarOpen}
                icon={item.icon}
                id={item.id}
                isOpen={isOpen}
              />
            </div>
          ))}
        </div>
        {sidebarText ? (
          <>
            <SideBar isOpen={isOpen} text={sidebarText} />
          </>
        ) : null}
      </div>
      <DialogBoxMobile />
    </>
  );
}
