import React, { createRef, useEffect, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import servicesArray from "../data/services.data";
import experiencesArray from "../data/experiences.data";
import { climastack } from "../data/navbarItems.data";
import {
  contact_us_aq_url,
  home_aqlife_url,
  home_aq_url,
} from "../data/urls.data";
import { atQuestLogo } from "../data/cdn.data";
import profilePanel from "../data/profilePanel.data";
import { Accordion, AccordionTab } from "primereact/accordion";

import {
  climastack_corporates,
  climastack_schools,
  climastack_residents,
  climastack_individuals,
  climastack_sustainable_experts,
} from "../data/climastack.data";
import { greenwall } from "../data/greenWall.data";

const userProfileLogo = "/icons/profileImageUpload.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);
  const [isClosed, setIsClosed] = useState(false);
  const servicesRef = createRef();
  const greenwallRef = createRef();
  const servicesPanelRef = createRef();
  const greenwallPanelRef = createRef();
  const experiencesRef = createRef();
  const experiencesPanelRef = createRef();
  const profileRef = createRef();
  const profilePanelRef = createRef();
  const navRef = createRef();
  const navPanelRef = createRef();
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

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
  const toggleGreenWallPanel = (e) => {
    greenwallPanelRef.current.show(e);
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

  const logOut = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

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
                      className={`bg-white border-0 rounded shadow-card-1`}
                      ref={servicesPanelRef}
                      for={servicesRef.current}
                      style={{ width: `fit-content` }}
                      modal={true}
                      closeOnEscape={true}
                      dismissableMask={true}
                    >
                      <div
                        className={`py-2 w-72 flex flex-col justify-center content-center items-center`}
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
                                      className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
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
                      <span className="text-greenCustom-600">CLIMA</span>STACK
                    </span>
                    <OverlayPanel
                      className={`ml-6 bg-white border-0 rounded shadow-card-1 custom_left_50  bg-white`}
                      ref={experiencesPanelRef}
                      for={experiencesRef.current}
                      style={{ width: `90%` }}
                      modal={true}
                      closeOnEscape={true}
                      dismissableMask={true}
                    >
                      <div
                        className={`py-2 w-full w-fill flex flex-col justify-center align-center content-center items-center`}
                      >
                        <div className="w-full w-fill px-4 py-2 flex align-left justify-start">
                          <span className="text-lg font-bold cursor-pointer">
                            CLIMASTACK Overview
                          </span>
                        </div>
                        <div className="w-full w-fit px-4">
                          <hr />
                        </div>
                        <div className="flex flex-row w-full w-fill px-4 py-2">
                          <div className="flex-col flex flex-grow  gap-4">
                            <div className="lg:h-12 xl:h-8 w-60">
                              <p className="text-lg font-bold">
                                For Corporates
                              </p>
                            </div>
                            {climastack_corporates?.map((experience, index) => {
                              return (
                                <a
                                  className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                    experience?.url !== null
                                      ? "cursor-pointer hover:bg-primary-variant"
                                      : "cursor-default"
                                  }`}
                                  href={`${
                                    experience?.url !== null
                                      ? experience?.url
                                      : ""
                                  }`}
                                  key={index}
                                >
                                  <span
                                    className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                  >
                                    {`${experience?.name}`}
                                  </span>
                                </a>
                              );
                            })}
                          </div>

                          <div className="flex-col flex flex-grow gap-2 border-l-1 px-2">
                            <div className="lg:h-12 xl:h-8 w-60">
                              <p className="text-lg font-bold">For Schools</p>
                            </div>
                            {climastack_schools?.map((experience, index) => {
                              return (
                                <a
                                  className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                    experience?.url !== null
                                      ? "cursor-pointer hover:bg-primary-variant"
                                      : "cursor-default"
                                  }`}
                                  href={`${
                                    experience?.url !== null
                                      ? experience?.url
                                      : ""
                                  }`}
                                  key={index}
                                >
                                  <span
                                    className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                  >
                                    {`${experience?.name}`}
                                  </span>
                                </a>
                              );
                            })}
                          </div>

                          <div className="flex-col flex flex-grow gap-2 border-l-1 px-2">
                            <div className="lg:h-12 xl:h-8 w-60">
                              <p className="font-bold text-lg">
                                For Residential Societies
                              </p>
                            </div>
                            {climastack_residents?.map((experience, index) => {
                              return (
                                <a
                                  className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                    experience?.url !== null
                                      ? "cursor-pointer hover:bg-primary-variant"
                                      : "cursor-default"
                                  }`}
                                  href={`${
                                    experience?.url !== null
                                      ? experience?.url
                                      : ""
                                  }`}
                                  key={index}
                                >
                                  <span
                                    className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                  >
                                    {`${experience?.name}`}
                                  </span>
                                </a>
                              );
                            })}
                          </div>

                          <div className="flex-col flex flex-grow gap-2 border-l-1 px-2">
                            <div className="lg:h-12 xl:h-8 w-60">
                              <p className="font-bold text-lg">
                                For Individuals
                              </p>
                            </div>
                            {climastack_individuals?.map(
                              (experience, index) => {
                                return (
                                  <a
                                    className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                      experience?.url !== null
                                        ? "cursor-pointer hover:bg-primary-variant"
                                        : "cursor-default"
                                    }`}
                                    href={`${
                                      experience?.url !== null
                                        ? experience?.url
                                        : ""
                                    }`}
                                    key={index}
                                  >
                                    <span
                                      className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                    >
                                      {`${experience?.name}`}
                                    </span>
                                  </a>
                                );
                              }
                            )}
                          </div>

                          <div className="flex-col flex flex-grow gap-2 border-l-1 px-2">
                            <div className="lg:h-12 xl:h-8 w-60">
                              <p className="font-bold text-lg w-fit">
                                For Sustainability Experts
                              </p>
                            </div>
                            {climastack_sustainable_experts?.map(
                              (experience, index) => {
                                return (
                                  <a
                                    className={`mx-2 px-4 py-1 w-full w-fill flex flex-col justify-center content-center items-center ${
                                      experience?.url !== null
                                        ? "cursor-pointer hover:bg-primary-variant"
                                        : "cursor-default"
                                    }`}
                                    href={`${
                                      experience?.url !== null
                                        ? experience?.url
                                        : ""
                                    }`}
                                    key={index}
                                  >
                                    <span
                                      className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                    >
                                      {`${experience?.name}`}
                                    </span>
                                  </a>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </OverlayPanel>
                  </div>
                </li>
                {/* The green wall */}
                <li className="nav-item pt-1 flex flex-row justify-center content-center items-center">
                  <div
                    className="px-4 py-1 cursor-pointer flex items-center text-xl leading-snug hover:text-primary"
                    // href={services_aqcare_url}
                    ref={greenwallRef}
                    onClick={(e) => {
                      toggleGreenWallPanel(e);
                    }}
                  >
                    <span className="text-black font-themefont">
                      {`The Green Wall`}
                    </span>
                    <OverlayPanel
                      className={`bg-white border-0 rounded shadow-card-1 ml-2`}
                      ref={greenwallPanelRef}
                      for={greenwallRef.current}
                      style={{ width: `fit-content` }}
                      modal={true}
                      closeOnEscape={true}
                      dismissableMask={true}
                    >
                      <div
                        className={`py-2 w-56 flex flex-col justify-center content-center items-center`}
                      >
                        {greenwall?.map((item, index) => {
                          return (
                            <div
                              className={`w-full w-fill flex flex-col justify-center content-center items-center`}
                              key={index}
                            >
                              <a
                                className={`pl-8 pr-4 w-full w-fill flex flex-col justify-start content-center items-center ${
                                  item?.url !== null
                                    ? "cursor-pointer hover:bg-primary-variant"
                                    : "cursor-default"
                                }`}
                                href={`${item?.url !== null ? item?.url : ""}`}
                                key={index}
                              >
                                <span
                                  className={`Montserrat_font text-base text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                >
                                  {`${item?.name}`}
                                </span>
                              </a>
                            </div>
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
                        className={`bg-white border-0 rounded shadow-card-1`}
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
                                  className={`px-4 text-lg text-left  w-full w-fill flex flex-col justify-center content-center items-start ${
                                    item?.url !== null
                                      ? "cursor-pointer hover:bg-primary-variant"
                                      : "cursor-default"
                                  }`}
                                  href={item?.url !== null ? item?.url : ""}
                                  // onClick={() => {
                                  //   item?.name === "Sign Out" ? logOut() : null;
                                  // }}
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
                className={`bg-white border-0 rounded shadow-card-1`}
                ref={navPanelRef}
                for={navRef.current}
                style={{ width: `fit-content` }}
                modal={true}
                closeOnEscape={true}
                dismissableMask={true}
              >
                <div
                  className={`relative py-6 px-6 w-full w-fill flex flex-col justify-center content-center items-center`}
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
                  <div
                    className={`w-full w-fill flex flex-col justify-center content-center items-center`}
                  >
                    <Accordion
                      expandIcon={""}
                      collapseIcon=""
                      className="w-72 text-15 text-left"
                      style={{
                        backgroundColor: "transparent",
                        border: "white",
                        background: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      <AccordionTab header="Home"></AccordionTab>
                      <AccordionTab header="Services">
                        <Accordion>
                          {servicesArray.map((item, index) => {
                            return (
                              <AccordionTab header={item.name} key={index}>
                                {item.items.map((item1, index1) => {
                                  return (
                                    <a
                                      className={`w-full w-fill flex flex-col justify-center content-center items-center cursor-pointer hover:bg-primary-variant`}
                                      href={item1.url}
                                      key={index1}
                                    >
                                      <span
                                        className={`Montserrat_font pl-10 px-2 text-10 text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                      >
                                        {`${item1.name}`}
                                      </span>
                                    </a>
                                  );
                                })}
                              </AccordionTab>
                            );
                          })}
                        </Accordion>
                      </AccordionTab>
                      <AccordionTab header="ClimaStack">
                        <Accordion>
                          {climastack.map((item, index) => {
                            return (
                              <AccordionTab header={item.name} key={index}>
                                {item.items.map((item1, index1) => {
                                  return (
                                    <a
                                      className={`w-full w-fill flex flex-col justify-center content-center items-center cursor-pointer hover:bg-primary-variant`}
                                      href={item1.url}
                                      key={index1}
                                    >
                                      <span
                                        className={`Montserrat_font pl-10 px-2 text-10 text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                                      >
                                        {`${item1.name}`}
                                      </span>
                                    </a>
                                  );
                                })}
                              </AccordionTab>
                            );
                          })}
                        </Accordion>
                      </AccordionTab>
                      <AccordionTab header="The Green Wall">
                        {greenwall.map((item, index) => {
                          return (
                            <a
                              className={`w-full w-fill flex flex-col justify-center content-center items-center cursor-pointer hover:bg-primary-variant`}
                              href={item.url}
                              key={index}
                            >
                              <span
                                className={`Montserrat_font pl-10 px-2 text-10 text-left  w-full w-fill flex flex-col justify-center content-center items-start`}
                              >
                                {`${item.name}`}
                              </span>
                            </a>
                          );
                        })}
                      </AccordionTab>
                      <AccordionTab header="Contact Us"></AccordionTab>
                    </Accordion>
                  </div>
                </div>
              </OverlayPanel>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
