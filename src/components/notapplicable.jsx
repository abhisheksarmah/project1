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
import { Dialog } from "primereact/dialog";
import SideBar from "./SideBar";

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
      "top-8 titles2 md:font-semibold text-[24px] absolute -left-[255px]",
  },
];

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayPosition, setDisplayPosition] = useState(false);
  const [position, setPosition] = useState("center");
  const [sidebarText, setSidebarText] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const dialogFuncMap = {
    displayPosition: setDisplayPosition,
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const handleSideBarOpen = (status, id) => {
    setButtonClicked(true);
    console.log(status, id);
    if (id) {
      setSidebarText(detailsConfig.find((item) => item.id === id).text);
    }
    if (isOpen && status === true) {
      setIsOpen(true);
    } else if (isOpen && status === false) {
      setIsOpen(false);
    } else if (!isOpen && status === true) {
      setIsOpen(true);
    }
  };
  let containRef = useRef();
  let sideBarRef = useRef();

  let handler = (event) => {
    console.log("button clicked", buttonClicked);
    // console.log(containRef.current);
    // console.log(sideBarRef.current);
    // console.log(event.target);
    if (
      //   !containRef.current.contains(event.target) &&
      !sideBarRef.current.contains(event.target) &&
      buttonClicked === false
    ) {
      setIsOpen(false);
    } else {
      // setButtonClicked(false);
    }
  };

  useEffect(() => {}, [buttonClicked]);

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
          // ref={containRef}
          className={`sticky md:h-screen h-[100vh] w-2/3 bg-green-100 bg-contain secContainer bg-no-repeat ${
            !isOpen ? `mx-auto` : `mx-0`
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          {detailsConfig.map((item, index) => (
            <Detailed
              handleOpen={handleSideBarOpen}
              icon={item.icon}
              id={item.id}
              // text={item.text}
              isOpen={isOpen}
              className={item.className}
              classTitle={item.classTitle}
              title={item.title}
            />
          ))}
        </div>
        {sidebarText ? (
          <div ref={sideBarRef}>
            <SideBar isOpen={isOpen} text={sidebarText} />
          </div>
        ) : null}
      </div>
      <div className="section2 bg-green-100">
        <div
          className={`sticky md:h-screen h-[400px] w-2/3 mx-auto bg-green-100 bg-contain secContainer bg-no-repeat `}
          style={{ backgroundImage: `url(${bg})` }}
        >
          {detailsConfig.map((item, index) => (
            <div className={item.className} key={index}>
              <span className={item.classTitle}>{item.title}</span>
              <div onClick={() => onClick("displayPosition", "right")}>
                <Detailed icon={item.icon} text={item.text} />
              </div>
              <Dialog
                header="Header"
                visible={displayPosition}
                position={position}
                modal
                className="h-[50%] w-[82%] mx-auto"
                onHide={() => onHide("displayPosition")}
                draggable={false}
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



//SIDE BAR



import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

export default function SideBar(props) {
  // let sideRef = useRef();

  // let handler = (event) => {
  //   console.log(sideRef.current);
  //   console.log(event.target);
  //   if (!sideRef.current.contains(event.target)) {
  //     handleSideBarOpen();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);
  const handleSideBarOpen = () => {
    props.handleOpen(false);
  };
  return (
    <div>
      {props.isOpen ? (
        <Button
          onClick={handleSideBarOpen}
          icon="pi pi-times"
          className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[2210px] right-4"
        />
      ) : null}
      <div
        className={`-bottom-[2870px] absolute right-0 bg-green-200 w-[34vw] pt-6 px-3 h-[100vh] ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-700`}
      >
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}


//Detailed

import React, { useEffect, useRef, useState } from "react";

export default function Detailed(props) {
  let buttonRef = useRef();

  let handler = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      props.handleOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleSideBarOpen = (e) => {
    e.stopPropagation();
    // if (props.isOpen) {
    //   return;
    // }
    props.handleOpen(true, props.id);
  };

  return (
    <>
      <div className={props.className}>
        <span className={props.classTitle}>{props.title}</span>
        <button onClick={handleSideBarOpen} ref={buttonRef}>
          <img
            src={props.icon}
            alt="props.icon"
            className="lg:w-28 lg:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out "
          />
        </button>
      </div>

      {/* <div
        ref={buttonRef}
        className={`top-0 fixed right-0 bg-green-100 w-[34vw] pt-6 px-3 h-[200vh] ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-700`}
      >
        <h1>{props.text}</h1>
      </div> */}
    </>
  );
}

