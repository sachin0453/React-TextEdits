import React from "react";
import { useState } from "react";

export default function Darkmode(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-2 mx-5 "
        // onClick={props.ChangeMode}
        // onClick={ButtonTextChanged}
        onClick={props.ChangeMode}
      >
        {props.ModeInfo.ButtonText || "DarkMode"}
      </button>
    </>
  );
}
