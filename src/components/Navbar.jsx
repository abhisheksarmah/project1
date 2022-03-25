import React, { createRef, useEffect, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import servicesArray from "../data/services.data";
import experiencesArray from "../data/experiences.data";
import navbarItems from "../data/navbarItems.data";
import {
  contact_us_aq_url,
  home_aqlife_url,
  home_aq_url,
} from "../data/urls.data";
import { atQuestLogo } from "../data/cdn.data";
import profilePanel from "../data/profilePanel.data";

const userProfileLogo = "/icons/profileImageUpload.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);
  const [isClosed, setIsClosed] = useState(false);
  const servicesRef = createRef();
  const servicesPanelRef = createRef();
  const experiencesRef = createRef();
  const experiencesPanelRef = createRef();
  const profileRef = createRef();
  const profilePanelRef = createRef();
  const navRef = createRef();
  const navPanelRef = createRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", onStorageEvent);
      onStorageEvent();
      return () => {
        window.removeEventListener("storage", onStorageEvent);
      };
    } else {
    }
  }, []);

  const toggleServicesPanel = (e) => {
    servicesPanelRef.current.show(e);
  };

  const toggleExperiencesPanel = (e) => {
    experiencesPanelRef.current.show(e);
  };

  const toggleNavPanel = (e) => {
    setNavbarOpen(!navbarOpen);
    navPanelRef.current.show(e);
  };

  const hideNavPanel = (e) => {
    setNavbarOpen(false);
    navPanelRef.current.hide(e);
  };

  const onStorageEvent = () => {
    if (localStorage.getItem("userInfo")) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log({ userInfo });
      if (userInfo.accessToken) {
        console.log({ userInfo });
        setIsLoggedIn(true);
      } else {
        console.log({ userInfo });
        setIsLoggedIn(false);
      }
    }
  };

  const toggleProfilePanel = (e) => {
    profilePanelRef.current.show(e);
    setIsClosed(!isClosed);
  };

  //   const logOut = () => {
  //     localStorage.removeItem("userInfo");
  //     window.location.href = "/";
  //   };

  return (
    <>
      <div className="w-full relative h-14 lg:h-16">
        <nav className="w-full fixed top-0 z-99 h-14 lg:h-16 flex flex-wrap bg-white shadow-lg lg:bg-white justify-between px-2 navbar-expand-lg">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full font-themefont  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold font-themefont leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap  text-black"
                href={home_aqlife_url}
              >
                <img
                  src={atQuestLogo}
                  alt="At Quest Care"
                  height="55"
                  width="165"
                />
              </a>
              <button
                className="text-black cursor-pointer  leading-none px-3  border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none"
                type="button"
                // onClick={() => setNavbarOpen(!navbarOpen)}
                onClick={(e) => {
                  toggleNavPanel(e);
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="menu w-6 h-6"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                </svg>
              </button>
            </div>
            {/* Desktop Navbar */}
            <div
              className={"hidden lg:block lg:flex flex-grow items-center"}
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {/* Home */}
                <li className="nav-item pt-1 flex flex-row justify-center content-center items-center">
                  <a
                    className="px-4 py-1 flex items-center text-xl leading-snug hover:text-primary"
                    href={home_aq_url}
                  >
                    <span className="text-black font-themefont">{`Home`}</span>
                  </a>
                </li>
                {/* Services */}
                <li className="nav-item pt-1 flex flex-row justify-center content-center items-center">
                  <div
                    className="px-4 py-1 cursor-pointer flex items-center text-xl leading-snug hover:text-primary"
                    // href={services_aqcare_url}
                    ref={servicesRef}
                    onClick={(e) => {
                      toggleServicesPanel(e);
                    }}
                  >
                    <span className="text-black font-themefont">
                      {`Services`}
                    </span>
                    <OverlayPanel
                      className={`bg-white border-0 rounded shadow-card-1 custom-overlay-panel`}
                      ref={servicesPanelRef}
                      for={servicesRef.current}
                      style={{ width: `fit-content` }}
                      modal={true}
                      closeOnEscape={true}
                      dismissableMask={true}
                    >
                      <div
                        className={`py-2 w-full w-fill flex flex-col justify-center content-center items-center`}
                      >
                        {servicesArray?.map((category, index) => {
                          return (
                            <div
                              className={`w-full w-fill flex flex-col justify-center content-center items-center`}
                              key={index}
                            >
                              <a
                                className={`px-4 text-lg text-left font-bold w-full w-fill flex flex-col justify-center content-center items-start ${
                                  category?.url !== null
                                    ? "cursor-pointer hover:bg-primary-variant"
                                    : "cursor-default"
                                }`}
                                href={
                                  category?.url !== null ? category?.url : ""
                                }
                              >
                                {`${category?.name}`}
                              </a>
                              {category?.items?.map((service, index2) => {
                                return (
                                  <a
                                    className={`pl-8 pr-4 w-full w-fill flex flex-col justify-center content-center items-center ${
                                      service?.url !== null
                                        ? "cursor-pointer hover:bg-primary-variant"
                                        : "cursor-default"
                                    }`}
                                    href={`${
                                      service?.url !== null ? service?.url : ""
                                    }`}
                                    key={index2}
                                  >
                                    <span
                                      className={`text-lg text-left font-semibold w-full w-fill flex flex-col justify-center content-center items-start`}
                                    >
                                      {`${service?.name}`}
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </OverlayPanel>
                  </div>
                </li>
                {/*  Experiences */}
                <li className="nav-item pt-1 flex flex-row justify-center content-center items-center">
                  <div
                    className="px-4 py-1 cursor-pointer flex items-center text-xl leading-snug hover:text-primary"
                    // href={services_aqcare_url}
                    ref={experiencesRef}
                    onClick={(e) => {
                      toggleExperiencesPanel(e);
                    }}
                  >
                    <span className="text-black font-themefont">
                      {`Experiences`}
                    </span>
                    <OverlayPanel
                      className={`bg-white border-0 rounded shadow-card-1 custom-overlay-panel`}
                      ref={experiencesPanelRef}
                      for={experiencesRef.current}
                      style={{ width: `fit-content` }}
                      modal={true}
                      closeOnEscape={true}
                      dismissableMask={true}
                    >
                      <div
                        className={`py-2 w-full w-fill flex flex-col justify-center content-center items-center`}
                      >
                        {experiencesArray?.map((experience, index) => {
                          return (
                            <a
                              className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                experience?.url !== null
                                  ? "cursor-pointer hover:bg-primary-variant"
                                  : "cursor-default"
                              }`}
                              href={`${
                                experience?.url !== null ? experience?.url : ""
                              }`}
                              key={index}
                            >
                              <span
                                className={`text-lg text-left font-semibold w-full w-fill flex flex-col justify-center content-center items-start`}
                              >
                                {`${experience?.name}`}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </OverlayPanel>
                  </div>
                </li>
                {/* Contact Us */}
                <li className="nav-item pt-1 flex flex-row justify-center content-center items-center">
                  <a
                    className="px-4 py-1 flex items-center text-xl leading-snug  hover:text-primary"
                    href={contact_us_aq_url}
                  >
                    <span className="text-black font-themefont">
                      Contact Us
                    </span>
                  </a>
                </li>
                {/* Profile Panel */}
                {isLoggedIn && (
                  <li
                    className="block lg:inline-block lg:mt-0 text-primary
                hover:text-primary cursor-pointer"
                  >
                    <div
                      className="px-4 py-1 cursor-pointer flex items-center text-xl leading-snug hover:text-primary"
                      // href={services_aqcare_url}
                      ref={profileRef}
                      onClick={(e) => {
                        toggleProfilePanel(e);
                      }}
                    >
                      <div
                        className={`focus:outline-none focus:border-white w-8 flex flex-row justify-center content-center items-center`}
                      >
                        <img src={userProfileLogo} alt="login" />
                        <i
                          className={`pi pi-angle-down transform duration-200 ${
                            isClosed ? "rotate-180" : "rotate-0"
                          }`}
                        ></i>
                      </div>
                      <OverlayPanel
                        className={`bg-white border-0 rounded shadow-card-1 custom-overlay-panel`}
                        ref={profilePanelRef}
                        for={profileRef.current}
                        style={{ width: `fit-content` }}
                        modal={true}
                        closeOnEscape={true}
                        dismissableMask={true}
                      >
                        <div
                          className={`py-2 w-full w-fill flex flex-col justify-center content-center items-center`}
                        >
                          {profilePanel?.map((item, index) => {
                            return (
                              <div
                                className={`w-full w-fill flex flex-col justify-center content-center items-center`}
                                key={index}
                              >
                                <a
                                  className={`px-4 text-lg text-left font-semibold w-full w-fill flex flex-col justify-center content-center items-start ${
                                    item?.url !== null
                                      ? "cursor-pointer hover:bg-primary-variant"
                                      : "cursor-default"
                                  }`}
                                  href={item?.url !== null ? item?.url : ""}
                                  //   onClick={() => {
                                  //     item?.name === "Sign Out" ? logOut() : null;
                                  //   }}
                                >
                                  {`${item?.name}`}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </OverlayPanel>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            {/* Mobile Navbar */}
            <div
              className={`w-full w-fill flex flex-col justify-center content-center items-center ${
                navbarOpen ? "block" : "hidden"
              }`}
              ref={navRef}
            >
              <OverlayPanel
                className={`bg-white border-0 rounded shadow-card-1 custom-overlay-panel`}
                ref={navPanelRef}
                for={navRef.current}
                style={{ width: `fit-content` }}
                modal={true}
                closeOnEscape={true}
                dismissableMask={true}
              >
                <div
                  className={`relative py-4 px-4 w-full w-fill flex flex-col justify-center content-center items-center`}
                >
                  <div
                    className={`absolute top-0 right-0 w-full flex flex-row justify-end content-center items-center`}
                  >
                    <div
                      className={`w-fit p-1 cursor-pointer flex flex-col justify-center content-center items-center`}
                      onClick={(e) => {
                        hideNavPanel(e);
                      }}
                    >
                      <i
                        className={`pi pi-times-circle text-15 text-gray-600 hover:text-gray-800 font-bold`}
                      />
                    </div>
                  </div>
                  {navbarItems?.map((element, index) => {
                    return (
                      <div
                        className={`w-full w-fill flex flex-col justify-center content-center items-center`}
                        key={index}
                      >
                        <a
                          className={`w-full w-fill flex flex-col justify-center content-center items-center ${
                            element?.url !== null
                              ? "cursor-pointer hover:bg-primary-variant "
                              : "cursor-default"
                          }`}
                          href={`${element?.url !== null ? element?.url : ""}`}
                          //   onClick={() => {
                          //     element?.name === "Sign Out" ? logOut() : "";
                          //   }}
                          key={`${index}_${index}`}
                        >
                          {(!element?.loggedIn ||
                            (element?.loggedIn && isLoggedIn)) && (
                            <span
                              className={`px-2 text-15 text-left font-semibold w-full w-fill flex flex-col justify-center content-center items-start`}
                            >
                              {`${element?.name}`}
                            </span>
                          )}
                        </a>
                        {element?.items?.map((element2, index2) => {
                          return (
                            <div
                              className={`pl-6 pr-4 w-full w-fill flex flex-col justify-center content-center items-center`}
                              key={index2}
                            >
                              <a
                                className={`w-full w-fill flex flex-col justify-center content-center items-center ${
                                  element2?.url !== null
                                    ? "cursor-pointer hover:bg-primary-variant "
                                    : "cursor-default"
                                }`}
                                // onClick={() => {
                                //   element2?.name === "Sign Out" ? logOut() : "";
                                // }}
                                href={`${
                                  element2?.url !== null ? element2?.url : ""
                                }`}
                                key={index2}
                              >
                                {
                                  // (element?.loggedIn && isLoggedIn) || !element?.loggedIn &&
                                  (!element2?.loggedIn ||
                                    (element2?.loggedIn && isLoggedIn)) && (
                                    <span
                                      className={`px-2 text-lg text-left font-semibold w-full w-fill flex flex-col justify-center content-center items-start`}
                                    >
                                      {`${element2?.name}`}
                                    </span>
                                  )
                                }
                              </a>
                              {element2?.items &&
                                element2?.items?.map((element3, index3) => {
                                  return (
                                    <a
                                      className={`px-6 w-full w-fill flex flex-col justify-center content-center items-center ${
                                        element3?.url !== null
                                          ? "cursor-pointer hover:bg-primary-variant "
                                          : "cursor-default"
                                      }`}
                                      href={`${
                                        element3?.url ? element3?.url : "#"
                                      }`}
                                      key={index3}
                                    >
                                      <span
                                        className={`text-lg text-left w-full w-fill flex flex-col justify-center content-center items-start`}
                                      >
                                        {`${element3?.name}`}
                                      </span>
                                    </a>
                                  );
                                })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </OverlayPanel>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
