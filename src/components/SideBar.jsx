import React from "react";
import { Button } from "primereact/button";

export default function SideBar(props) {
  const handleSideBarOpen = () => {
    props.handleOpen(props.id);
  };
  return (
    <>
      {props.isOpen ? (
        <Button
          onClick={handleSideBarOpen}
          icon="pi pi-times"
          className="p-button-rounded p-button-secondary p-button-text p-2 z-10 absolute -bottom-[2090px] right-4"
        />
      ) : null}
      <div
        className={`-bottom-[2772px] absolute right-0 bg-green-200 w-[34vw] pt-6 px-3 h-[100vh] ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-700`}
      >
        <h1>{props.text}</h1>
      </div>
    </>
  );
}
