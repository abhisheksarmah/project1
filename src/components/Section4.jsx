import React from "react";
import "./css/Section4.css";
import { Divider } from "primereact/divider";
import curve from "../Assets/images/wave (8).svg";

export default function Section4() {
  return (
    <>
      <div className="section4 px-32 pr-32 pb-5">
        <p className="text-white grn text-lg">Green Schools </p>
        <h1 className="text-white head2 text-5xl">
          A Cool Response to Global Warming
        </h1>
        <p className="text-white para2 text-xl">
          The recently concluded COP 26 has re-emphasized focus on Net Zero
          schools, and sustainability in education has started taking front row
          seats.
        </p>
        <p className="text-center text-lg means text-white mt-5 p-2 border-3 w-1/3 mx-auto border-amber-300">
          What does this mean for schools?
        </p>
        <div className="card  pt-5">
          <div className="flex">
            <p className=" text-white w-[140rem]  text-xl">
              <p className="text-yellow-300 mb-2">
                What is Net Zero or Carbon Neutrality?
              </p>
              <p className="text-justify">
                Net Zero or Carbon Neutrality means taking responsibility for
                your green house gas emissions by removing the same amount from
                the atmosphere, through a combination of reducing emissions and
                counteracting it with measures such as reforestation.
              </p>
            </p>

            <Divider layout="vertical" />

            <p className=" text-white w-[140rem] mx-8  text-xl">
              <p className="text-yellow-300 mb-2">
                How can an institution become Net Zero or Carbon Neutral?
              </p>
              <p className="text-justify">
                While ‘Net Zero’ or ‘Carbon Neutrality’ is the ultimate goal,
                achieving it is a challenge as it involves fulfilling specific
                targets and following protocols to measure, manage, and report
                carbon emissions.
              </p>
            </p>

            <Divider layout="vertical" />

            <p className=" text-white w-[160rem] text-xl">
              <p className="text-yellow-300 mb-2">
                How can At Quest help you achieve Net Zero or Carbon Neutrality?
              </p>
              <p className="text-justify">
                At Quest understands the complexities around Carbon Neutrality.
                With our straight forward and effective 2-step process, your
                organisation can scale slowly and steadily into Carbon
                Neutrality without becoming overwhelmed.carbon emissions.
              </p>
            </p>
          </div>
        </div>

        <div className="carousal2">
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators indic absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active btn1"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                className="btn1"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                className="btn1"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner part2  relative w-full overflow-hidden">
              <div class="carousel-item active float-left  w-full">
                <p className=" text-white  text-md">
                  <p className="text-yellow-300 mb-2">
                    What is Net Zero or Carbon Neutrality?
                  </p>
                  <p className="text-justify text-xs">
                    Net Zero or Carbon Neutrality means taking responsibility
                    for your green house gas emissions by removing the same
                    amount from the atmosphere, through a combination of
                    reducing emissions and counteracting it with measures such
                    as reforestation.
                  </p>
                </p>
              </div>
              <div class="carousel-item float-left w-full">
                <p className=" text-white  text-md">
                  <p className="text-yellow-300 mb-2">
                    How can an institution become Net Zero or Carbon Neutral?
                  </p>
                  <p className="text-justify text-xs">
                    While ‘Net Zero’ or ‘Carbon Neutrality’ is the ultimate
                    goal, achieving it is a challenge as it involves fulfilling
                    specific targets and following protocols to measure, manage,
                    and report carbon emissions.
                  </p>
                </p>
              </div>
              <div class="carousel-item float-left w-full">
                <p className=" text-white  text-md">
                  <p className="text-yellow-300 mb-2">
                    How can At Quest help you achieve Net Zero or Carbon
                    Neutrality?
                  </p>
                  <p className="text-justify text-xs">
                    At Quest understands the complexities around Carbon
                    Neutrality. With our straight forward and effective 2-step
                    process, your organisation can scale slowly and steadily
                    into Carbon Neutrality without becoming overwhelmed.carbon
                    emissions.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white paraH pt-4 mx-auto text-lg w-2/5">
          <p className="text-center paraI">
            Your Institution can transform into a carbon-neutral campus and
            become a model for others.
          </p>
        </div>
        <div className="flex sumbitBtn justify-center pt-4">
          <button type="button" className="p-2 cursor-pointer finds">
            FIND OUT HOW
          </button>
        </div>
      </div>

      <div className="curve3">
        <img src={curve} alt="" />
      </div>
    </>
  );
}
