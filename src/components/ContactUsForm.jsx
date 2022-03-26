import React from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import categories from "../data/categories.data";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Tooltip } from "primereact/tooltip";
import "./css/ContactUs.css";

export default class ContactUsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      phone: "",
      emailId: "",
      website: "",
      aboutYou: "",
      yourServiceOffering: "",
      yourInterest: [],
      yourMessage: "",

      category: {},
      engagement: {},
      feature: {},
      categoryIndex: null,
      engagementIndex: null,
      featureIndex: null,
      categories: categories,
      showShareRequirements: false,
      showServiceOfferings: false,

      hideMessage: false,
      nameBlur: false,
      emailBlur: false,
      phoneBlur: false,
      aboutYouBlur: false,
      // websiteBlur: false,
      phoneError: "Please enter your phone number",
      emailError: "Please enter your email",
      blurSus360: false,
      blurDetails: false,
    };
    this.toast = React.createRef();
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount = async () => {
    if (this.props?.selected) {
      await this.setInitialSelections(this.props.selected);
    }
    if (this.props?.blurSus360 === true) {
      this.setState({ blurSus360: false });
    } else {
      this.setState({ blurSus360: true });
    }

    if (this.props?.edit === true && this.state.blurDetails === false) {
      this.setState({
        blurDetails: true,
      });
    } else {
      this.setState({
        blurDetails: false,
      });
    }
  };

  setInitialSelections = async ({
    category: selectedCategoryName,
    engagement: selectedEngagements,
    module: selectedFeatures,
  }) => {
    console.log("categoreis ", this.state.categories);
    let categories = await this.state.categories?.map((category, index1) => {
      if (category.name === selectedCategoryName) {
        category.selected = true;
        category.expanded = true;
        this.setState({
          category: category,
          categoryIndex: index1,
          showShareRequirements: true,
        });
      }
      category.engagements = category.engagements?.map((engagement, index2) => {
        if (selectedEngagements.includes(engagement.name)) {
          engagement.selected = true;
          engagement.expanded = true;
          this.setState({ showServiceOfferings: true });
          if (engagement.name !== "Sustainability Experts") {
            engagement.features = engagement.features.map((feature) => {
              //   selectedFeatures;
              if (
                engagement.name !== "Bundled Strategic Engagements" &&
                selectedFeatures.includes(feature.name)
              ) {
                feature.selected = true;
                feature.expanded = true;
              }
              return feature;
            });
          }
          this.setState({ engagement: engagement, engagementIndex: index2 });
        } else {
          if (engagement.name !== "Sustainability Experts") {
            engagement.selected = false;
            engagement.expanded = false;
          }
        }
        return engagement;
      });
      return category;
    });
    console.log({ categories });
    await this.setState({ categories: categories, showServiceOfferings: true });
  };

  handleChangeName = (event) => {
    if (event.target.value === "") {
      this.setState({ nameBlur: true });
    } else if (event.target.value.length > 0) {
      this.setState({ nameBlur: false });
    }
    this.setState({ fullName: event.target.value });
  };

  handleChangeEmail = (event) => {
    var re =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

    if (!event.target.value.match(re)) {
      this.setState({
        emailBlur: true,
        emailError: "Please Enter valid email id",
      });
    } else if (event.target.value.match(re)) {
      this.setState({ emailBlur: false });
    }
    this.setState({ emailId: event.target.value });
  };

  handleChangePhone = (event) => {
    if (event.target.value.length !== 10) {
      this.setState({
        phoneBlur: true,
        phoneError: "Please Enter valid phone number",
      });
    } else if (event.target.value.length === 10) {
      this.setState({ phoneBlur: false });
    }
    this.setState({ phone: event.target.value });
  };

  handleChangeWebsite = (event) => {
    this.setState({ website: event.target.value });
  };

  handleChangeMessage = (event) => {
    this.setState({ yourMessage: event.target.value });
  };

  setSelectedCategory = async (category, index) => {
    this.setState({
      category: category,
      categoryIndex: index,
      showShareRequirements: true,
    });
    this.resetCategoriesArray(index);
  };

  setShowServiceOfferings = (checkedValue) => {
    this.setState({ showServiceOfferings: checkedValue });
  };

  resetCategoriesArray = (categoryIndex) => {
    let categories = this.state.categories;

    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];
      if (categoryIndex === i) {
        category.selected = true;
        category.expanded = true;
      } else {
        category.selected = false;
        category.expanded = false;
      }
      let engagements = categories[i].engagements;
      for (let j = 0; j < engagements.length; j++) {
        let engagement = engagements[j];
        engagement.selected = false;
        engagement.expanded = false;
        if (engagement?.features !== undefined) {
          let features = engagement?.features;
          for (let k = 0; k < features.length; k++) {
            let feature = features[k];
            feature.selected = false;
            feature.expanded = false;
            features[k] = feature;
          }
          engagement.features = features;
        }
        engagements[j] = engagement;
      }
      category.engagements = engagements;
      categories[i] = category;
      // categories[i].engagements = engagements;
    }
    this.setState({ categories: categories });
    console.log("categories", categories);
  };

  setInterestedEngagements = (e, interestedEngagement, engagementIndex) => {
    let categories = this.state.categories;

    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];
      if (this.state.categoryIndex === i) {
        category.selected = true;
        category.expanded = true;
      } else {
        category.selected = false;
        category.expanded = false;
      }
      let engagements = categories[i].engagements;
      for (let j = 0; j < engagements.length; j++) {
        let engagement = engagements[j];
        if (e.target.type !== "checkbox") {
          if (i === this.state.categoryIndex && j === engagementIndex) {
            engagement.selected = true;
            engagement.expanded = true;
            console.log(engagement);
          } else {
            engagement.selected = false;
            engagement.expanded = false;
          }
        }
        if (
          e.target.type === "checkbox" &&
          i === this.state.categoryIndex &&
          j === engagementIndex
        ) {
          engagement.selected = e.target.checked;
          engagement.expanded = e.target.checked;
        }
        engagements[j] = engagement;
      }
      category.engagements = engagements;
      categories[i] = category;
      categories[i].engagements = engagements;
    }
    // categories;
    this.setState({
      ...this.state,
      categories: categories,
      engagementIndex: engagementIndex,
      engagement: interestedEngagement,
    });
  };

  setInterestedFeatures = (
    e,
    interestedFeature,
    engagementIndex,
    featureIndex
  ) => {
    console.log({ e, interestedFeature, engagementIndex, featureIndex });
    let categories = this.state.categories;

    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];
      if (this.state.categoryIndex === i) {
        category.selected = true;
        category.expanded = true;
      } else {
        category.selected = false;
        category.expanded = false;
      }
      let engagements = categories[i].engagements;
      for (let j = 0; j < engagements.length; j++) {
        let engagement = engagements[j];
        if (engagementIndex === j && i === this.state.categoryIndex) {
          engagement.selected = true;
          engagement.expanded = true;
        } else {
          engagement.selected = false;
          engagement.expanded = false;
        }
        if (engagement?.features !== undefined) {
          let features = engagement?.features;
          for (let k = 0; k < features.length; k++) {
            let feature = features[k];
            if (
              featureIndex === k &&
              engagementIndex === j &&
              i === this.state.categoryIndex
            ) {
              feature.selected = e.target.checked;
              feature.expanded = e.target.checked;
            }
            features[k] = feature;
          }
          engagement.features = features;
        }
        engagements[j] = engagement;
      }
      category.engagements = engagements;
      categories[i] = category;
    }
    console.log(categories);
    this.setState({
      categories: categories,
      feature: interestedFeature,
      featureIndex: featureIndex,
    });
  };

  filterInterestedTopics = () => {
    let categories = [...this.state.categories];
    let selectedCategories = [];
    let result = {
      category: "",
      serviceOffering: "",
      features: [],
    };

    for (let i = 0; i < categories.length; i++) {
      let category = { ...categories[i] };
      if (category?.selected === true) {
        let engagements = [...category.engagements];
        let selectedEngagements = [];
        for (let j = 0; j < engagements.length; j++) {
          let engagement = { ...engagements[j] };
          if (engagement?.selected === true) {
            if (engagement?.features !== undefined) {
              let features = [...engagement?.features];
              let selectedFeatures = [];
              for (let k = 0; k < features.length; k++) {
                let feature = { ...features[k] };
                if (feature?.selected === true) {
                  selectedFeatures.push(feature);
                  result.features.push(feature.name);
                }
              }
              engagement.features = selectedFeatures;
              result.serviceOffering = engagement.name;
              if (category.name === "Sustainability Experts") {
                result.features.push(engagement.name);
                result.serviceOffering = "Sustainability Experts";
              }
            }
            selectedEngagements.push(engagement);
          }
        }
        category.engagements = selectedEngagements;
        result.category = category.name;
        selectedCategories.push(category);
      }
    }
    console.log(result);
    this.setState({
      aboutYou: result.category,
      yourServiceOffering: result.serviceOffering,
      yourInterest: result.features,
    });
    return result;
  };

  handleSubmit = async (event) => {
    await this.filterInterestedTopics();
    event.preventDefault();
    if (this.state.fullName === "") {
      this.setState({ nameBlur: true });
    } else if (this.state.emailId === "") {
      this.setState({ emailBlur: true });
    } else if (this.state?.phone === "") {
      this.setState({ phoneBlur: true });
    } else {
      const formData = {
        fullName: this.state.fullName,
        phone: this.state.phone,
        emailId: this.state.emailId,
        website: this.state.website,
        aboutYou: this.state.aboutYou,
        serviceOffering: this.state.yourServiceOffering,
        yourInterest: this.state.yourInterest,
        yourMessage: this.state.yourMessage,
      };
      try {
        console.log(formData);
        let res = await axios.post(
          "https://atquest.in/at-quest.in/secure/api/v1/contact-us-service/contact-us",
          formData
        );
        console.log(res);
        if (res.status === 200) {
          if (this.props.formSubmited) {
            this.props.formSubmited(true);
          }
          this.toast?.current?.show({
            severity: "info",
            summary: "Thank you!",
            detail: "We will contact you.",
            life: 5000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleEditClick = () => {
    this.setState({
      blurDetails: false,
    });
    console.log("blurred", this.state.blurDetails);
  };

  render() {
    // const { register, handleSubmit, watch, errors } = useForm();
    // console.log(this.state.showServiceOfferings)
    return (
      <>
        <Toast ref={this.toast} position="bottom-right"></Toast>
        <div
          id={`contact-us-form`}
          className="flex flex-col-auto justify-center content-around items-center opacity-100"
        >
          <form className="bg-primary-color-100 contacts rounded-md flex flex-col gap-3 w-full w-fill px-2 sm:px-4 md:px-8 lg:px-10 py-8">
            <div
              className={`w-full flex flex-col md:flex-row gap-3 md:gap-4 justify-start content-start items-start`}
            >
              {/* FullName */}
              <div className="w-full md:w-1/2 flex flex-col gap-1 justify-start items-start">
                <input
                  className="text-10 md:text-10 w-full md:h-8 border-radius-5 rounded-md px-5 text-dark-gray-600 font-secondary font-medium "
                  id="fullname"
                  type="text"
                  placeholder="Full Name*"
                  name="fullName"
                  onChange={this.handleChangeName}
                  // onBlur={this.handleBlurName}
                  required
                ></input>
                {this.state.nameBlur && (
                  <span
                    style={{ color: "red" }}
                    className="px-2 text-9 font-secondary font-medium"
                  >
                    Please enter your full name
                  </span>
                )}
              </div>

              {/* Email Address*/}
              <div className="w-full md:w-1/2 flex flex-col gap-1 justify-start items-start">
                <input
                  className="text-10 md:text-10 w-full md:h-8 border-radius-5 rounded-md px-5 text-dark-gray-600 font-secondary font-medium "
                  id="fullname"
                  type="text"
                  placeholder="Email Address*"
                  name="emailId"
                  onChange={this.handleChangeEmail}
                  // onBlur={this.handleBlurEmail}
                ></input>
                {this.state.emailBlur && (
                  <span
                    style={{ color: "red" }}
                    className="px-2 text-9 font-secondary font-medium "
                  >
                    {this.state.emailError}
                  </span>
                )}
              </div>
            </div>

            <div
              className={`w-full flex flex-col md:flex-row gap-3 md:gap-4  justify-start content-start items-start`}
            >
              {/* Phone Number*/}
              <div className="w-full md:w-1/2 flex flex-col gap-1 justify-start content-start items-start">
                <input
                  className="text-10 md:text-10 w-full md:h-8 border-radius-5 rounded-md px-5 text-dark-gray-600 font-secondary font-medium "
                  id="fullname"
                  type="text"
                  placeholder="Phone Number*"
                  name="phone"
                  onChange={this.handleChangePhone}
                  // onBlur={this.handleBlurPhone}
                ></input>
                {this.state.phoneBlur && (
                  <span
                    style={{ color: "red" }}
                    className="px-2 text-9 font-secondary font-medium "
                  >
                    {this.state.phoneError}
                  </span>
                )}
              </div>

              {/* Website */}
              <div className="w-full md:w-1/2 flex flex-col justify-start content-start items-start">
                <input
                  className="text-10 md:text-10 w-full md:h-8 border-radius-5 rounded-md px-5 text-dark-gray-600 font-secondary font-medium "
                  type="text"
                  placeholder="Website"
                  name="website"
                  onChange={this.handleChangeWebsite}
                  // onBlur={this.handleBlurWebsite}
                ></input>
              </div>
            </div>
            <div
              className={`${
                this.state.blurSus360 === true
                  ? `border-2 rounded-lg pb-2`
                  : " hidden"
              } ${
                this.state.blurDetails === true
                  ? " border-gray-600 "
                  : " border-black"
              }`}
            >
              {this.props.edit && (
                <div className="flex  flex-row w-full pt-2">
                  <div
                    className={`${
                      this.state.blurDetails === true
                        ? " w-11/12 flex items-center pl-2 "
                        : " hidden h-0"
                    }`}
                  >
                    <span className="text-9 font-semibold text-black Montserrat_font">
                      We've filled some details for you. You can still edit, if
                      required.
                    </span>
                  </div>
                  <div
                    className="flex items-right justify-end w-1/12 pr-4 pt-1"
                    onClick={(e) => this.handleEditClick()}
                  >
                    {this.state.blurDetails && (
                      <>
                        <Tooltip target=".custom-target-icon" />
                        <i
                          className="pi pi-pencil text-12 text-black animate-pulse custom-target-icon"
                          data-pr-tooltip="Edit"
                          data-pr-position="right"
                          data-pr-at="right+5 top"
                          data-pr-my="left center-2"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </>
                    )}
                  </div>
                </div>
              )}
              <div
                className={
                  this.state.blurDetails === true
                    ? `pointer-events-none opacity-40 text-gray-600`
                    : "pointer-events-auto text-black"
                }
              >
                {/* Category*/}
                {this.state.blurSus360 === true ? (
                  <div className="font-themefont px-2">
                    <div className="flex w-full flex-row justify-between">
                      <div className="text-left text-lg lg:text-lg font-secondary font-semibold ">
                        Category
                      </div>
                    </div>
                    <div className="text-left text-lg px-4 flex flex-row flex-wrap gap-x-4">
                      {this.state.categories?.map((category, index) => {
                        return (
                          <label
                            className={`green flex flex-row justify-center content-center items-center`}
                            key={index}
                          >
                            <RadioButton
                              type="radio"
                              color="text-dark-gray-600 font-secondary font-medium "
                              className="green cursor-pointer"
                              onChange={(e) => {
                                this.setSelectedCategory(e.value, index);
                              }}
                              name={"category"}
                              checked={category.selected}
                              value={category}
                            />
                            {/* </input> */}
                            <span className="pl-2 pt-1 text-10 cursor-pointer font-secondary font-medium">
                              {category?.name}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/** Specific Requirements */}

                {this.state.showShareRequirements === true &&
                this.state.blurSus360 === true ? (
                  <div
                    className={`w-full w-fill px-2 flex flex-row justify-start content-center items-start`}
                  >
                    <label
                      className={`pt-1  text-10 flex flex-row justify-start content-start items-start cursor-pointer`}
                    >
                      <Checkbox
                        type="checkbox pt-1"
                        ref={this.showShareRef}
                        className={`green flex-grow-0`}
                        onChange={(e) => {
                          this.setShowServiceOfferings(e.target.checked);
                        }}
                        checked={this.state.showServiceOfferings}
                        name={`showServiceOfferings`}
                      ></Checkbox>
                      <span className={"pl-2 font-secondary font-medium "}>
                        {`(Optional) Share more information? We value your time and this input will help us bring to you exactly what is relevant.`}
                      </span>
                    </label>
                    <div
                      className={`flex-grow-1 flex flex-row justify-start content-center items-center`}
                    ></div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* { Show Service Offerings } */}

                {this.state?.showServiceOfferings === true &&
                this.state.blurSus360 === true ? (
                  <div
                    className={`w-full w-fill px-2 flex flex-col gap-2 justify-start content-start items-start`}
                  >
                    <div
                      className={`w-full w-fill flex flex-row justify-start content-start items-start`}
                    >
                      <span
                        className={` text-left text-lg lg:text-xl font-secondary font-semibold `}
                      >
                        {`Which service offering are you interested in?`}
                      </span>
                    </div>
                    {/* Engagemenents for selected Category*/}
                    <div
                      className={`w-full w-fill ${
                        this.state?.categoryIndex === 4
                          ? "grid grid-cols-1 md:grid-cols-2 gap-1"
                          : "flex flex-row flex-wrap"
                      } gap-x-4 gap-y-1 justify-start content-start items-start`}
                    >
                      {this.state?.categories[
                        this.state?.categoryIndex
                      ]?.engagements?.map((engagement, index) => {
                        return (
                          <div
                            className={`fade-in flex flex-row justify-start content-start items-start appear-from-right`}
                            key={`${index}_${index}`}
                          >
                            <label
                              className={`flex flex-row items-start  text-md font-secondary font-medium cursor-pointer`}
                            >
                              {engagement?.features &&
                              engagement?.features?.length <= 0 ? (
                                <Checkbox
                                  type="checkbox"
                                  className={``}
                                  onChange={(e) => {
                                    this.setInterestedEngagements(
                                      e,
                                      engagement,
                                      index
                                    );
                                  }}
                                  name={`showServiceOfferings`}
                                  checked={engagement?.selected}
                                  value={engagement}
                                ></Checkbox>
                              ) : (
                                <RadioButton
                                  type="radio"
                                  className={``}
                                  onChange={(e) => {
                                    this.setInterestedEngagements(
                                      e,
                                      engagement,
                                      index
                                    );
                                  }}
                                  name={`showServiceOfferings`}
                                  checked={engagement?.selected}
                                  value={engagement}
                                ></RadioButton>
                              )}
                              <span
                                className={`pl-2 flex appear-from-right fade-in font-secondary font-medium`}
                              >
                                <span>{`${engagement?.name}`}</span>
                                {engagement?.name ===
                                  "Bundled Strategic Engagements" && (
                                  <span
                                    className={`w-fit h-fit flex px-2 py-1/4 ml-2 border-0 rounded-md bg-primary-color-700 text-white text-6 font-secondary font-medium text-center `}
                                  >
                                    {engagement?.suptext}
                                  </span>
                                )}
                              </span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    {/* Features under selected Engagement */}
                    <div
                      className={`w-full pl-4 grid grid-cols-1 md:grid-cols-2 gap-2 justify-start content-start items-start`}
                    >
                      {this.state.categories[this.state.categoryIndex]
                        .engagements[this.state.engagementIndex]?.expanded ===
                        true &&
                        this.state.categories[
                          this.state.categoryIndex
                        ].engagements[
                          this.state.engagementIndex
                        ]?.features?.map((feature, index2) => {
                          return (
                            <div
                              className={`w-full flex flex-row justify-start content-start items-start`}
                              key={`${index2}_${index2}`}
                            >
                              <label
                                className={`flex flex-row justify-start content-center items-start appear-from-right text-sm font-secondary font-medium cursor-pointer`}
                                key={`${index2}_${index2}`}
                              >
                                <Checkbox
                                  type="checkbox"
                                  className={`flex-grow-0 `}
                                  onChange={(e) => {
                                    this.setInterestedFeatures(
                                      e,
                                      feature,
                                      this.state.engagementIndex,
                                      index2
                                    );
                                  }}
                                  name={`showServiceOfferings`}
                                  value={feature}
                                  checked={
                                    this.state.engagement?.name ===
                                    "Bundled Strategic Engagements"
                                      ? true
                                      : feature?.selected
                                  }
                                  disabled={
                                    this.state.engagement?.name ===
                                    "Bundled Strategic Engagements"
                                      ? true
                                      : false
                                  }
                                ></Checkbox>
                                <span className="pl-2 text-wrap font-secondary font-medium ">
                                  {`${feature?.name}`}
                                </span>
                              </label>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            {/* Your Message    */}
            <div className={this.state.blurSus360 === true ? "flex" : "flex"}>
              <input
                className="w-full px-2 py-1 text-10 h-16 items-start border-radius-5 rounded-md text-dark-gray-600 resize"
                id="fullname"
                type="textarea"
                placeholder="Your Message"
                style={{ resize: "both" }}
                name="yourMessage"
                onChange={this.handleChangeMessage}
              ></input>
            </div>

            {/* Submit button */}
            <div className="flex pt-2">
              <button
                className="md:w-32 mx-auto text-xl md:text-xl bg-500 hover:bg-600 text-white py-1 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="submit"
                // onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
