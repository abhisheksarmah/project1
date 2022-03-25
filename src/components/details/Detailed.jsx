import React from "react";

export default function Detailed(props) {
  const handleSideBarOpen = () => {
    props.handleOpen(props.id);
  };

  return (
    <>
      <div onClick={handleSideBarOpen}>
        <img
          src={props.icon}
          alt="props.icon"
          className="lg:w-28 lg:h-28 transform hover:-translate-y-1 hover:scale-90 hover:cursor-pointer transition duration-500 ease-in-out "
        />
      </div>
    </>
  );
}
