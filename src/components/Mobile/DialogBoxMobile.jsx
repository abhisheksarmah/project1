import React, { useState } from "react";
import "./DialogBox_Mobile.css";
import "primeicons/primeicons.css";
import bg from "../../Assets/images/Transparent.png";
import icon3 from "../../Assets/images/Carbon Neutral Schools.png";
import icon1 from "../../Assets/images/Classroom Learning.png";
import icon2 from "../../Assets/images/Experiential Learning.png";
import icon4 from "../../Assets/images/Junior Green Compass +.png";

export default function DialogBoxMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div>
      <div className="sections1 pt-50 bg-green-100">
        <div
          className={`relative md:h-screen h-[250px] w-2/3 mr-32  bg-green-100 bg-contain secContainer bg-no-repeat `}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>

      {/* icon1 */}
      {!isOpen ? (
        <>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={icon1} alt="icon1" className="absolute icons1 " />
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[1390px] left-0 z-50"
          >
            <i className="pi pi-angle-left" style={{ fontSize: "2em" }}></i>
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={icon1} alt="icon1" className="absolute icons1" />
          </div>
          <div
            className={`right-0 absolute bg-green-500 dialog z-10 -bottom-[1676px] w-[100%] h-[335px] p-10 ${
              isOpen ? `translate-x-0` : `translate-x-full`
            }ease-in-out duration-1000`}
          >
            <div className="flex justify-center">
              <img src={icon1} alt="icons" className="w-[100px] h-[100px]" />
            </div>
            Hello My Name is Abhi
          </div>
        </>
      )}
      {/* icon2 */}
      {!isOpen2 ? (
        <div onClick={() => setIsOpen2(!isOpen2)}>
          <img src={icon2} alt="icon2" className="absolute icons2 " />
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsOpen2(!isOpen2)}
            className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[1390px] left-0 z-50"
          >
            <i className="pi pi-angle-left" style={{ fontSize: "2em" }}></i>
          </div>
          <div onClick={() => setIsOpen2(!isOpen2)}>
            <img src={icon1} alt="icon1" className="absolute icons1" />
          </div>
          <div
            className={`right-0 absolute bg-green-500 dialog -bottom-[1676px] z-10 w-[100%] h-[335px] p-10 ${
              isOpen2 ? `translate-x-0` : `translate-x-full`
            }ease-in-out duration-1000`}
          >
            <div className="flex justify-center">
              <img src={icon2} alt="icons" className="w-[100px] h-[100px]" />
            </div>
            Hello My Name is Abhilekh
          </div>
        </>
      )}

      {/* icon3 */}
      {!isOpen3 ? (
        <div onClick={() => setIsOpen3(!isOpen3)}>
          <img src={icon3} alt="icon3" className="absolute icons3 " />
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsOpen3(!isOpen3)}
            className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[1390px] left-0 z-50"
          >
            <i className="pi pi-angle-left" style={{ fontSize: "2em" }}></i>
          </div>
          <div onClick={() => setIsOpen3(!isOpen3)}>
            <img src={icon3} alt="icon3" className="absolute icons3" />
          </div>
          <div
            className={`right-0 absolute bg-green-500 dialog -bottom-[1676px] z-10 w-[100%] h-[335px] p-10 ${
              isOpen3 ? `translate-x-0` : `translate-x-full`
            }ease-in-out duration-1000`}
          >
            <div className="flex justify-center">
              <img src={icon3} alt="icon3" className="w-[100px] h-[100px]" />
            </div>
            Hello My Name is Abhilekhz
          </div>
        </>
      )}

      {/* icon4 */}
      {!isOpen4 ? (
        <div onClick={() => setIsOpen4(!isOpen4)}>
          <img src={icon4} alt="icon4" className="absolute icons4 " />
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsOpen4(!isOpen4)}
            className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[1390px] left-0 z-50"
          >
            <i className="pi pi-angle-left" style={{ fontSize: "2em" }}></i>
          </div>
          <div onClick={() => setIsOpen4(!isOpen4)}>
            <img src={icon4} alt="icon4" className="absolute icons4" />
          </div>
          <div
            className={`right-0 absolute bg-green-500 dialog -bottom-[1676px] z-10 w-[100%] h-[335px] p-10 ${
              isOpen4 ? `translate-x-0` : `translate-x-full`
            }ease-in-out duration-1000`}
          >
            <div className="flex justify-center">
              <img src={icon4} alt="icons" className="w-[100px] h-[100px]" />
            </div>
            Hello My Name is Abhilekhs
          </div>
        </>
      )}
    </div>
  );
}
