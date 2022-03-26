import React, { Component } from "react";
import {
  aqcare_magnifying_glass_logo,
  aqlife_magnifying_glass_logo,
  atQuestLogo,
  atQuest_magnifying_glass_logo,
} from "../data/cdn.data";
import "./css/Footer.css";
import { aq_contacts, aq_social_media } from "../data/footer.data";
import {
  contact_us_aq_url,
  corporates_aqcare_url,
  sustainability_experts_aqcare_url,
  green_compass_aqlife_url,
  home_aqcare_url,
  home_aqlife_url,
  individuals_aqlife_url,
  residential_societies_aqlife_url,
  schools_aqcare_url,
  sus360_benchmarker_aqcare_url,
  sus360_compass_aqcare_url,
  what_we_do_aq_url,
  whats_our_purpose_aq_url,
  who_we_are_aq_url,
  privacy_policy_aqlife_url,
  disclaimer_aqlife_url,
  terms_and_conditions_aqlife_url,
} from "../data/urls.data";

class DefaultFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      company: false,
      care: false,
      life: false,
      connect_With_Us: false,
      companyServices: [],
      careServices: [],
      lifeServices: [],
      currentYear: new Date().getFullYear(),
    };
  }

  handelExpander = (view) => {
    console.log(view);
    if (view === "Company") {
      this.setState({
        company: true,
      });
    }
    if (view === "Care") {
      this.setState({
        care: true,
      });
    }
    if (view === "Life") {
      this.setState({
        life: true,
      });
    }
    if (view === "Connect_With_Us") {
      this.setState({
        connect_With_Us: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="relative footers w-full flex items-center justify-between flex-wrap sm:p-1 sm:pt-1">
          {/* Mobile view menu rows for each section */}
          <div className="flex-col w-full justify-around text-white items-start bg-primary-color-100 text-left visible h-full  lg:invisible lg:h-0">
            {/* Company section */}
            <div className="w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1">
              <div className="flex justify-around w-10/12 items-center ">
                <div className="w-8 z-20">
                  <img
                    src={atQuest_magnifying_glass_logo}
                    alt="at-quest-icon"
                  />
                </div>
                <div className="text-h6 ml-2 flex-grow text-left">Company</div>
                <div
                  onClick={() => this.handelExpander("Company")}
                  className="w-8 z-20 cursor-pointer"
                >
                  <samp className="pi pi-sort-down"></samp>
                </div>
              </div>
            </div>
            {/* At Quest Care section */}
            <div className="w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1">
              <div className="flex justify-around w-10/12 items-center ">
                <div className="w-8">
                  <img
                    src={aqcare_magnifying_glass_logo}
                    alt="atquest-care-icon"
                  />
                </div>
                <div className="text-h6 ml-2 flex-grow text-left">
                  {" "}
                  At Quest Care
                </div>
                <div
                  onClick={() => this.handelExpander("Care")}
                  className="w-8 z-20 cursor-pointer"
                >
                  <samp className="pi pi-sort-down"></samp>
                </div>
              </div>
            </div>
            {/* At Quest Life section */}
            <div className="w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1">
              <div className="flex justify-around w-10/12 items-center ">
                <div className="w-8">
                  <img
                    src={aqlife_magnifying_glass_logo}
                    alt="atquest-life-icon"
                  />
                </div>
                <div className="text-h6 ml-2 flex-grow text-left">
                  {" "}
                  At Quest Life
                </div>
                <div
                  onClick={() => this.handelExpander("Life")}
                  className="w-8 z-20 cursor-pointer"
                >
                  <samp className="pi pi-sort-down"></samp>
                </div>
              </div>
            </div>
            {/* Connect with us section */}
            <div className="w-full flex justify-center bg-primary-color-900 opacity-50 h-10 my-1">
              {/* Connect with us section title */}
              <div className="flex justify-around w-10/12 items-center ">
                {/* empty div for spacing (or icon) */}
                <div className="w-8"></div>
                <div className="text-h6 ml-2 flex-grow text-left">
                  {" "}
                  Connect with us
                </div>
                <div
                  onClick={() => this.handelExpander("Connect_With_Us")}
                  className="w-8 z-20 cursor-pointer"
                >
                  <samp className="pi pi-sort-down"></samp>
                </div>
              </div>
            </div>
            {/* Footer Bottom section */}
            <div className="w-full text-sm text-black flex flex-col justify-around items-center p-2">
              <div className="w-full flex mb-2 sm:justify-around justify-between">
                {/* Privacy Policy */}
                <div>
                  <a
                    className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                    href={privacy_policy_aqlife_url}
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </div>
                {/* <div>
									<a
										className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
										href={refunds_cancellation_aqlife_url}
										target="_blank"
									>
										{"Refund & Cancellation Policy"}
									</a>
								</div> */}
              </div>

              <div className="w-full flex mb-2 sm:justify-around justify-between">
                <div>
                  <a
                    className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                    href={disclaimer_aqlife_url}
                    target="_blank"
                  >
                    Disclaimer
                  </a>
                </div>
                <div>
                  <a
                    className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                    href={terms_and_conditions_aqlife_url}
                    target="_blank"
                  >
                    Terms of service
                  </a>
                </div>
              </div>

              <div>
                {" "}
                &#169; {this.state.currentYear} At Quest Sustainable Solutions
                Pvt Ltd.
              </div>
            </div>
          </div>
          {/* Mobile View panels for each section */}
          {/* Company section panel */}
          {this.state.company ? (
            <div className="absolute bottom-0 text-sm text-black w-full bg-opacity rounded-t-lg z-10 customShadow lg:hidden">
              <div
                onClick={() => {
                  this.setState({
                    company: false,
                  });
                }}
                className="flex justify-center  w-8 z-20 h-10 cursor-pointer"
              >
                <samp className="pi text-h5 mt-4 pi-chevron-left"></samp>
              </div>
              <div className="flex justify-center h-8 items-center footerBox">
                <div className="w-8 z-20">
                  <img src={atQuest_magnifying_glass_logo} alt="atquest-icon" />
                </div>
                <div className="text-h5 font-semibold ml-2 text-left">
                  Company
                </div>
              </div>
              <div className="flex justify-start items-start flex-col text-blue-600 mb-10">
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={what_we_do_aq_url}
                >
                  What we do
                </a>
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={whats_our_purpose_aq_url}
                >
                  What's our purpose
                </a>
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={who_we_are_aq_url}
                >
                  Who we are
                </a>
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={contact_us_aq_url}
                >
                  Express Interest
                </a>
              </div>
            </div>
          ) : null}
          {/* At Quest Care section panel */}
          {this.state.care ? (
            <div className="absolute bottom-0 text-sm text-black w-full bg-opacity rounded-t-lg z-10 customShadow lg:hidden">
              <div
                onClick={() => {
                  this.setState({
                    care: false,
                  });
                }}
                className="flex justify-center  w-8 z-20 h-10 cursor-pointer"
              >
                <samp className="pi text-h5 mt-4 pi-chevron-left"></samp>
              </div>
              <div className="flex justify-center h-8 items-center footerBox">
                <div className="w-8 z-20">
                  <img
                    src={aqcare_magnifying_glass_logo}
                    alt="atquest-care-icon"
                  />
                </div>
                <div className="text-h5 font-semibold ml-2 text-left">
                  At Quest Care
                </div>
              </div>
              <div className="flex justify-start text-blue-600 items-start flex-col mb-10">
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={home_aqcare_url}
                >
                  Home
                </a>
                <div className="flex mt-1 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox">
                  <a
                    className="flex mt-1 pl-10 pr-5 justify-start items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={corporates_aqcare_url}
                  >
                    Corporate
                  </a>
                  <div
                    className={`flex flex-col justify-center content-center items-center`}
                  >
                    |
                  </div>
                  <a
                    className="flex mt-1 pl-5 pr-5 justify-start items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={schools_aqcare_url}
                  >
                    School
                  </a>
                  <div
                    className={`flex flex-col justify-center content-center items-center`}
                  >
                    |
                  </div>
                  <a
                    className="flex mt-1 pl-5 justify-start items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={sustainability_experts_aqcare_url}
                  >
                    Sustainability Experts
                  </a>
                </div>
                <div className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox">
                  <a
                    className="flex mt-1 pr-5 justify-start items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={sus360_benchmarker_aqcare_url}
                  >
                    {`Sus360\u00B0 Benchmarker`}
                  </a>
                  <div
                    className={`flex flex-col justify-center content-center items-center`}
                  >
                    |
                  </div>
                  <a
                    className="flex mt-1 pl-5 pr-5 justify-start items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={sus360_compass_aqcare_url}
                  >
                    {`Sus360\u00B0 Compass`}
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          {/* At Quest Life section panel */}
          {this.state.life ? (
            <div className="absolute bottom-0 text-sm text-black w-full bg-opacity rounded-t-lg z-10 customShadow lg:hidden">
              <div
                onClick={() => {
                  this.setState({
                    life: false,
                  });
                }}
                className="flex justify-center  w-8 z-20 h-10 cursor-pointer"
              >
                <samp className="pi text-h5 mt-4 pi-chevron-left"></samp>
              </div>
              <div className="flex justify-center h-8 items-center footerBox">
                <div className="w-8 z-20">
                  <img
                    src={aqlife_magnifying_glass_logo}
                    alt="atquest-life-icon"
                  />
                </div>
                <div className="text-h5 font-semibold ml-2 text-left">
                  At Quest Life
                </div>
              </div>
              <div className="flex justify-start text-blue-600 items-start flex-col mb-10">
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={home_aqlife_url}
                >
                  Home
                </a>
                <div className="mt-1 pl-10 w-full h-8 cursor-pointer hover:text-black footerBox flex flex-row justify-start content-center items-center">
                  <a
                    className="flex pr-5 items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={residential_societies_aqlife_url}
                  >
                    Residential Societies
                  </a>
                  <div
                    className={`w-fit flex flex-col justify-center content-center items-center`}
                  >
                    |
                  </div>
                  <a
                    className="flex pl-5 items-center w-fit h-8 cursor-pointer hover:text-black footerBox"
                    href={individuals_aqlife_url}
                  >
                    Individuals
                  </a>
                </div>
                <a
                  className="flex mt-1 pl-10 justify-start items-center w-full h-8 cursor-pointer hover:text-black footerBox"
                  href={green_compass_aqlife_url}
                >
                  Green Compass
                </a>
              </div>
            </div>
          ) : null}

          {/* Connect_With_Us section panel */}
          {this.state.connect_With_Us === true && (
            <div className="absolute bottom-0 text-sm text-black w-full bg-opacity rounded-t-lg z-10 customShadow lg:hidden">
              {/* Connect_With_Us section minimize icon */}
              <div
                onClick={() => {
                  this.setState({
                    connect_With_Us: false,
                  });
                }}
                className="flex justify-center  w-8 z-20 h-10 cursor-pointer"
              >
                <samp className="pi text-h5 mt-4 pi-chevron-left"></samp>
              </div>
              {/* Connect_With_Us section title */}
              <div className="flex justify-center h-8 items-center footerBox">
                <div className="text-h5 font-semibold ml-2 text-left">
                  Connect with us
                </div>
              </div>
              {/* Connect_With_Us section content */}
              <div className="w-full flex flex-col justify-start text-blue-600 items-start mb-10">
                {/* content row-1 AQ on Social Media */}
                <div className="flex flex-row gap-4 mt-1 pl-10 pr-10 py-2 justify-center items-center w-full h-8 footerBox">
                  {aq_social_media.map((account, index) => {
                    return (
                      <div className="flex" key={index}>
                        <a
                          className="justify-center text-center w-6 h-6 rounded-full bg-white hover:bg-primary-color-300 cursor-pointer flex flex-col justify-center items-center"
                          href={`${account.url}`}
                          target="_blank"
                        >
                          <img
                            className="w-4 h-4"
                            src={`${account.logo}`}
                            alt=""
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
                {/* content row-2 AQ Care & Life Contacts*/}
                <div className="flex flex-row mt-1 px-5 sm:px-10 pt-3 pb-1 justify-center items-center w-full h-auto footerBox">
                  {/* At Quest Contacts */}
                  {aq_contacts?.map((element, index) => {
                    return (
                      <div
                        className={`relative w-1/2 xs:w-1/3 sm:w-1/3 md:w-1/4 mx-2 px-2 pt-2 border-1 border-gray-600 flex flex-row justify-around`}
                        key={index}
                      >
                        {/* title */}
                        <div
                          className={`absolute top-0 -mt-3 py-0 bg-primary-color-100`}
                        >
                          <div className={`px-2 my-0 footerBox`}>
                            <span className={`text-black`}>
                              {`${element?.title}`}
                            </span>
                          </div>
                        </div>
                        {/* contacts */}
                        {element?.contacts?.map((contact, index2) => {
                          return (
                            <div
                              className="flex px-1 HD:px-2 py-1"
                              key={index2}
                            >
                              <a
                                className="flex justify-center text-center w-8 h-8 rounded-full bg-white hover:bg-primary-color-300"
                                href={contact?.url}
                              >
                                {/* Icon*/}
                                <img
                                  className="w-4"
                                  src={contact?.logo}
                                  alt={contact?.name}
                                />
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* Desktop  View*/}
          <div
            className={`lg:block lg:pt-6 flex flex-col w-full justify-around items-start bg-primary-color-100 text-left hidden md:hidden`}
          >
            {/* Footer row-1 */}
            <div className="flex w-full px-1">
              {/* Footer row-1 col-1 */}
              <div className="flex justify-between flex-col w-1/3">
                <div className="flex flex-col xl:px-16 px-8">
                  <div className="flex flex-row justify-start content-center items-center">
                    <div className="w-8">
                      <img src={atQuest_magnifying_glass_logo} alt="" />
                    </div>
                    <div className="text-h4 ml-2 font-semibold flex-grow text-left text-black">
                      Company
                    </div>
                  </div>
                  <div className="text-sm flex flex-col ml-10">
                    <a
                      className="w-auto mt-4 lg:mt-2 text-blue-600 cursor-pointer hover:text-black"
                      href={what_we_do_aq_url}
                    >
                      What we do
                    </a>

                    <a
                      className="w-auto mt-4 lg:mt-2 text-blue-600 cursor-pointer hover:text-black"
                      href={whats_our_purpose_aq_url}
                    >
                      What's our purpose
                    </a>
                    <a
                      className="w-auto mt-4 lg:mt-2 text-blue-600 cursor-pointer hover:text-black"
                      href={who_we_are_aq_url}
                    >
                      Who we are
                    </a>
                    <a
                      className="w-auto mt-4 lg:mt-2 text-blue-600  cursor-pointer hover:text-black"
                      href={contact_us_aq_url}
                    >
                      Express interest
                    </a>
                  </div>
                </div>
              </div>
              {/* Footer row-1 cell-2 */}
              <div className="flex flex-col w-1/3">
                <div className="flex flex-row justify-start content-center items-center">
                  <div className="w-8">
                    <img
                      src={aqcare_magnifying_glass_logo}
                      alt="atquest-care-icon"
                    />
                  </div>
                  <div className="text-h4 ml-2 font-semibold flex-grow text-left text-black">
                    At Quest Care
                  </div>
                </div>
                <div className="text-sm flex flex-col ml-10">
                  <a
                    className="mt-4 lg:mt-2 text-blue-600  cursor-pointer hover:text-black"
                    href={home_aqcare_url}
                  >
                    Home
                  </a>
                  <div className="mt-4 lg:mt-2 text-blue-600 cursor-pointer hover:text-black flex flex-row justify-start content-center items-center">
                    <a
                      className="lg:pr-2 text-blue-600  cursor-pointer hover:text-black"
                      href={corporates_aqcare_url}
                    >
                      Corporates
                    </a>
                    <div
                      className={`w-fit flex flex-col justify-center content-center items-center`}
                    >
                      |
                    </div>
                    <a
                      className="lg:px-2 text-blue-600  cursor-pointer hover:text-black"
                      href={schools_aqcare_url}
                    >
                      Schools
                    </a>
                    <div
                      className={`w-fit flex flex-col justify-center content-center items-center`}
                    >
                      |
                    </div>
                    <a
                      className="lg:pl-2 text-blue-600  cursor-pointer hover:text-black"
                      href={sustainability_experts_aqcare_url}
                    >
                      Sustainability Experts
                    </a>
                  </div>
                  <div className="mt-4 lg:mt-2 text-blue-600 cursor-pointer hover:text-black flex flex-row justify-start content-center items-center">
                    <a
                      className="lg:pr-2 text-blue-600  cursor-pointer hover:text-black"
                      href={sus360_benchmarker_aqcare_url}
                    >
                      {`Sus360\u00B0 Benchmarker`}
                    </a>
                    <div
                      className={`w-fit flex flex-col justify-center content-center items-center`}
                    >
                      |
                    </div>
                    <a
                      className="lg:px-2 text-blue-600  cursor-pointer hover:text-black"
                      href={sus360_compass_aqcare_url}
                    >
                      {`Sus360\u00B0 Compass`}
                    </a>
                  </div>
                </div>
              </div>
              {/* Footer row-1 cell-3 */}
              <div className="flex flex-col w-1/3">
                <div className="flex flex-row justify-start content-center items-center">
                  <div className="w-8">
                    <img
                      src={aqlife_magnifying_glass_logo}
                      alt="atquest-life-icon"
                    />
                  </div>
                  <div className="text-h4 ml-2 font-semibold flex-grow text-left text-black">
                    At Quest Life
                  </div>
                </div>
                <div className="text-sm flex flex-col ml-10">
                  <a
                    className="block mt-4 lg:mt-2 text-blue-600 mr-4 cursor-pointer hover:text-black"
                    href={home_aqlife_url}
                  >
                    Home
                  </a>

                  <div className="block mt-4 lg:mt-2 text-blue-600 mr-4 cursor-pointer hover:text-black flex flex-row justify-start content-center items-center">
                    <a
                      className="block pr-2 text-blue-600 cursor-pointer hover:text-black"
                      href={residential_societies_aqlife_url}
                    >
                      Residential Societies
                    </a>
                    <div
                      className={`w-fit flex flex-col justify-center content-center items-center`}
                    >
                      |
                    </div>
                    <a
                      className="block pl-2 text-blue-600 cursor-pointer hover:text-black"
                      href={individuals_aqlife_url}
                    >
                      Individuals
                    </a>
                  </div>
                  <a
                    className="block mt-4 lg:mt-2  text-blue-600 mr-4 cursor-pointer hover:text-black"
                    href={green_compass_aqlife_url}
                  >
                    Green Compass
                  </a>
                </div>
              </div>
            </div>
            {/* Footer row-2 */}
            <div className="w-full px-1 flex flex-row justify-end">
              {/* Footer row-2 cell-1 */}
              <div className="flex justify-end flex-col w-1/3">
                <div className="xl:px-16 px-8 flex justify-start">
                  {/* Make In India Icon */}
                  <div className={`px-1 HD:px-2`}>
                    <img
                      src="https://atquest2.b-cdn.net/atquest-b2b/Footer/MakeInIndia.png"
                      alt=""
                    />
                  </div>
                  {/* Sustainable Development Goals (SDG) Icon */}
                  <div className={`px-1 HD:px-2`}>
                    <img
                      src="https://atquest2.b-cdn.net/atquest-b2b/Footer/SDG.png"
                      alt=""
                    />
                  </div>
                  {/* Startup India Icon */}
                  <div className={`px-1 HD:px-2`}>
                    <img
                      src="https://atquest2.b-cdn.net/atquest-b2b/Footer/StartupIndia.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Footer row-2 cell-2 and cell-3 */}
              <div className="flex flex-row w-2/3 justify-center items-center">
                {/* Footer items row-2 col-2 */}
                <div className="w-full w-fill flex flex-col justify-center">
                  <div className="w-full border border-1 border-gray-600 my-2"></div>
                  {/* Connect with us section */}
                  <div className="flex flex-col ml-8 text-sm pt-2">
                    {/* connect with us row-1 */}
                    <div className="px-1 HD:px-2 py-1 HD:py-2 text-h4 font-semibold text-left text-black flex-grow-1 flex flex-row">
                      <div
                        className={`w-1/3 pt-1/2 flex flex-col justify-start content-start items-start`}
                      >
                        Connect with us
                      </div>
                      {/* AQ on Social Media */}
                      <div className="w-2/3 flex flex-row justify-start">
                        {aq_social_media?.map((account, index) => {
                          return (
                            <div className="flex px-1 HD:px-2" key={index}>
                              <a
                                className="flex flex-col justify-center items-center text-center w-8 h-8 rounded-full bg-white hover:bg-primary-color-300 cursor-pointer"
                                href={`${account?.url}`}
                                target="_blank"
                              >
                                {/* Icon */}
                                <img
                                  className="w-4 h-4"
                                  src={`${account?.logo}`}
                                  alt=""
                                />
                              </a>
                              {/* Label URL */}
                              {/* <a
																	className="mt-4 ml-2 lg:mt-2 text-blue-600 hover:text-black cursor-pointer"
																	href={`${account?.url}`}
																	target="_blank"
																>
																	{`${account?.label}`}
																</a> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* connect with us row-2 contacts */}
                    <div className="w-full flex HD:mt-2 flex-col HD:flex-row gap-4 px-2">
                      {aq_contacts?.map((section, index1) => {
                        return (
                          <div
                            className={`relative w-1/2 px-2 py-2 border-1 border-gray-600 flex flex-row`}
                          >
                            {/* Title */}
                            <div className={`absolute top-0 -mt-3`}>
                              <span
                                className={`h-4 px-2 bg-primary-bg-gradient text-black`}
                              >
                                {`${section?.title}`}
                              </span>
                            </div>
                            {/* Contacts */}
                            {section?.contacts?.map((contact, index2) => {
                              return (
                                <div className="flex px-1 HD:px-2 py-1">
                                  {/* Icon*/}
                                  <div className="flex justify-center text-center w-8  h-8 rounded-full bg-white">
                                    <img
                                      className="w-4"
                                      src={contact?.logo}
                                      alt={contact?.name}
                                    />
                                  </div>
                                  {/* contact label */}
                                  <a
                                    className="mt-4 ml-2 lg:mt-2 text-blue-600 hover:text-black cursor-pointer"
                                    href={`${contact?.url}`}
                                  >
                                    {`${contact?.label}`}
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="flex justify-center w-full my-8">
              <div className="w-full border border-1 border-gray-600 px-1"></div>
            </div>
            <div className="w-full flex-wrap text-sm text-black flex justify-around items-center pb-4">
              <div className="w-32 mx-2">
                <img src={atQuestLogo} alt="at-quest-logo" />
              </div>
              <div>
                &#169; {this.state.currentYear} At Quest Sustainable Solutions
                Pvt Ltd.
              </div>
              <div>
                <a
                  className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                  href={privacy_policy_aqlife_url}
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </div>
              {/* <div>
								<a
									className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
									href={refunds_cancellation_aqlife_url}
									target="_blank"
								>
									{"Refund & Cancellation Policy"}
								</a>
							</div> */}
              <div>
                <a
                  className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                  href={disclaimer_aqlife_url}
                  target="_blank"
                >
                  Disclaimer
                </a>
              </div>
              <div>
                <a
                  className="mt-4 ml-2 lg:mt-2 text-black cursor-pointer"
                  href={terms_and_conditions_aqlife_url}
                  target="_blank"
                >
                  Terms of service
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <img
                    className="h-4"
                    src="https://atquest2.b-cdn.net/atquest-b2b/Footer/home%20(1).svg"
                    alt=""
                  />
                </span>
                <span className="ml-1">Bangalore, India</span>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
