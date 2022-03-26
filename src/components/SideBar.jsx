import React from "react";
import { Button } from "primereact/button";

export default function SideBar(props) {
  return (
    <div className={`absolute top-0 right-0 bg-green-200 w-[34vw] p-3 h-[100vh] ${
      props.isOpen ? "translate-x-0" : "translate-x-full"
    } ease-in-out duration-700`}>
      <div className="flex justify-end pb-3">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            props.handleOpen()
          }}
          icon="pi pi-times"
          className="focus:outline-none p-button-rounded p-button-secondary p-button-text"
        />
      </div>
      <div>
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}
