import React from "react";
import banner1 from "../Assets/images/tree-832079.jpg";
import banner2 from "../Assets/images/tree-832079_v2.jpg";
import banner3 from "../Assets/images/tree-832079_v3.jpg";
import bannerBg from "../Assets/images/logo1.png";
import rect from "../Assets/images/Rectangle1.png";
import curve from "../Assets/images/wave (7).svg";

export default function Section2() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide relative "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-screen h-88vh  overflow-hidden">
          <div class="carousel-item active relative float-left w-screen h-2/4">
            <div className="relative h-88vh">
              <img
                src={banner1}
                class="block w-screen bg-no-repeat bn1 h-88vh bg-transparent"
                alt="banner2"
              />
              <img
                src={bannerBg}
                alt="bnrbg"
                class=" absolute w-[20vw] bannerBg h-[12vh] right-32 top-28"
              />
              <img
                src={rect}
                alt="bnrbg"
                class=" absolute w-[16vw] rect h-[6vh] left-46 bottom-[9rem]"
              />
              <h1 class=" absolute left-46 bottom-[399px] heading1 text-white w-[36vw] font-extrabold text-4xl">
                2021-2030isThe UN DecadeonEcosystem Restoration
              </h1>
              <p class=" absolute left-46 bottom-80 pText text-white w-[36vw] font-extrabold text-xl">
                You have 9 years to make a difference
              </p>
            </div>
          </div>

          <div class="carousel-item relative float-left w-screen h-2/4">
            <div className="relative h-88vh">
              <img
                src={banner2}
                class="block w-screen bg-no-repeat bn1 h-88vh bg-transparent"
                alt="banner2"
              />
              <img
                src={bannerBg}
                alt="bnrbg"
                class=" absolute w-[20vw] h-[12vh] bannerBg right-32 top-28"
              />
              <img
                src={rect}
                alt="bnrbg"
                class=" absolute w-[16vw] rect h-[6vh] left-46 bottom-[9rem]"
              />
              <h1 class=" absolute left-46 bottom-[399px] heading1 text-white w-[36vw] font-extrabold text-4xl">
                2021-2030isThe UN DecadeonEcosystem Restoration
              </h1>
              <p class=" absolute left-46 bottom-80 pText text-white w-[36vw] font-extrabold text-xl">
                You have 9 years to make a difference
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-screen">
            <img
              src={banner3}
              class="block w-screen h-88vh bg-no-repeat bn1 bg-transparent "
              alt="banner3"
            />
            <img
              src={bannerBg}
              alt="bnrbg"
              class=" absolute w-[20vw] bannerBg h-[12vh] right-32 top-28"
            />
            <img
              src={rect}
              alt="bnrbg"
              class=" absolute w-[16vw] rect h-[6vh] left-46 bottom-[9rem]"
            />
            <h1 class=" absolute heading1 left-46 bottom-[400px] text-white w-[36vw] font-extrabold text-4xl">
              2021-2030isThe UN DecadeonEcosystem Restoration
            </h1>
            <p class=" absolute left-46 bottom-80 pText text-white w-[36vw] font-extrabold text-xl">
              You have 9 years to make a difference
            </p>
          </div>
          <div className="curve">
            <img src={curve} alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block font-bold bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
