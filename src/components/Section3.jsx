import React from "react";
import "../components/css/Section3.css";
import curve from "../Assets/images/wave (6).svg";

export default function Section3() {
  return (
    <div className="">
      <div className="pr-32 px-32 section3 pb-36">
        <h1 className="text-5xl head font-bold">Prevent, Reverse, Restore! </h1>
        <h3 className="text-2xl head font-bold">
          The UN Decade on Ecosystem Restoration 2021-2030
        </h3>
        <p className="pt-3 para text-base">
          The UN Decade on Ecosystem Restoration, or simply ‘The Decade’ unites
          the world behind a common goal: preventing, halting and reversing the
          degradation of ecosystems world wide; ranging from Forests,
          grasslands, crop lands, wetlands, mountains, and other terrestrial
          ecosystems to inland water ecosystems, marine and coastal eco-
          systems, and urban environments.
        </p>
        <p className="pt-16 text-lg para1 text-center">
          Join the UN’s global rallying cry to heal our planet together with At
          Quest.
        </p>
        <div className="flex justify-center finds1 pt-4">
          <button type="button" className="p-2 cursor-pointer finds">
            FIND OUT HOW
          </button>
        </div>
      </div>
      <div className="curve1">
        <img src={curve} alt="" />
      </div>
    </div>
  );
}
