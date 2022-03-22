import React, { useEffect, useRef, useState } from "react";
import "./Prim.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import bg from "../Assets/images/Transparent.png";
import icon2 from "../Assets/images/Experiential Learning.png";
import icon3 from "../Assets/images/Carbon Neutral Schools.png";
import icon4 from "../Assets/images/Junior Green Compass +.png";
import icon1 from "../Assets/images/Classroom Learning.png";

const detailsConfig = {
  icon1: [
    " Hello One of my passions about being a software developer is understanding and creating the unique features that we come across, as a user, using an app or browsing a website. When I first started building apps, Day/Night mode was on top of my list to understand. Today, using this tutorial, I was able to create an animated sidebar using Tailwind. This is my first time using Tailwind and I really enjoyed the breakdown from James’ Youtube video. This tutorial features React Hooks, useState, which is always great to implement in a tutorial.",
  ],
  icon2: [
    " Hello One of my passions about being a software developer is understanding and creating the unique features that we come across, as a user, using an app or browsing a website. When I first started building apps, Day/Night mode was on top of my list to understand. Today, using this tutorial, I was able to create an animated sidebar using Tailwind. This is my first time using Tailwind and I really enjoyed the breakdown from James’ Youtube video. This tutorial features React Hooks, useState, which is always great to implement in a tutorial.",
  ],
  icon3: [
    " Hello One of my passions about being a software developer is understanding and creating the unique features that we come across, as a user, using an app or browsing a website. When I first started building apps, Day/Night mode was on top of my list to understand. Today, using this tutorial, I was able to create an animated sidebar using Tailwind. This is my first time using Tailwind and I really enjoyed the breakdown from James’ Youtube video. This tutorial features React Hooks, useState, which is always great to implement in a tutorial.",
  ],
  icon4: [
    " Hello One of my passions about being a software developer is understanding and creating the unique features that we come across, as a user, using an app or browsing a website. When I first started building apps, Day/Night mode was on top of my list to understand. Today, using this tutorial, I was able to create an animated sidebar using Tailwind. This is my first time using Tailwind and I really enjoyed the breakdown from James’ Youtube video. This tutorial features React Hooks, useState, which is always great to implement in a tutorial.",
  ],
};

const Siab = () => {
  return (
    <div>
      <div className="bg-green-100">
        <div
          className={`sticky lg:h-screen h-screen w-2/3 mx-auto bg-green-100 bg-contain bg-no-repeat `}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute lg:top-[42px] lg:right-[180px] md:top-[27px] md:right-[105px]  grid grid-cols-2">
            <span className="lg:text-2lg  lg:font-semibold md:pt-4 lg:pt-6">
              Classroom Learning
            </span>

            <div>
              <img
                src={icon1}
                alt="icon1"
                className="lg:w-28 lg:h-28 md:w-20 md:h-20 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out "
              />
            </div>
          </div>

          <div className="absolute lg:top-64 lg:right-10  grid grid-cols-2">
            <span className="lg:text-2lg lg:font-semibold lg:pt-6 ">
              Experiential Learning
            </span>
            <div>
              <img
                src={icon2}
                alt="icon1"
                className="md:w-28 md:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="absolute lg:bottom-56 lg:right-6  grid grid-cols-2">
            <span className="lg:text-2lg lg:font-semibold lg:pt-6">
              Carbon Neutral Schools
            </span>
            <div>
              <img
                src={icon3}
                alt="icon3"
                className="md:w-28 md:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="absolute lg:bottom-10 lg:right-48  grid grid-cols-2">
            <span className="lg:text-2lg lg:font-semibold lg:pt-6">
              Junior Green Compass +
            </span>
            <div>
              <img
                src={icon4}
                alt="icon1"
                className="w-28 h-28 md:w-26 md:h-26 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Siab;
