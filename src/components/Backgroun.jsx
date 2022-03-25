import React from "react";
import Line1 from "../Assets/images/Line1.png";
import Line2 from "../Assets/images/Line2.png";
import Line3 from "../Assets/images/Line3.png";
import Line4 from "../Assets/images/Line4.png";
import Line5 from "../Assets/images/Line5.png";
// import Line1 from "../Assets/images/Line1.png";

export default function Backgroun() {
  return (
    <div className="flex justify-center h-[100vh] mt-10">
      <div>
        <img
          src={Line1}
          alt="line"
          className="absolute right-[520px] w-[30%]"
        />
      </div>
      <div>
        <img
          src={Line5}
          alt="line5"
          className="absolute right-[320px] -bottom-[3180px] w-[90px]"
        />
      </div>
      <div>
        <img
          src={Line4}
          alt="line4"
          className="absolute right-[300px] -bottom-[3400px] w-[15px]"
        />
      </div>
      <div>
        <img src={Line3} alt="line3" className="absolute" />
      </div>
      <div>
        <img src={Line2} alt="line2" className="absolute" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
