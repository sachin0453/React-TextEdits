import React from "react";
import { useState } from "react/cjs/react.development";
import Darkmode from "./Darkmode";

export default function About_us(props) {
  return (
    <div
      className="accordion mx-5 my-5 "
      id="accordionExample"
      style={{ BackgroundColor: props.ModeInfo.OtherColors }}
    >
      <div
        className="accordion-item "
        style={{ BackgroundColor: props.ModeInfo.OtherColors }}
      >
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{ BackgroundColor: props.ModeInfo.OtherColors }}
          >
            About developer
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
          style={{ BackgroundColor: props.ModeInfo.OtherColors }}
        >
          <div
            className="accordion-body"
            style={{ BackgroundColor: props.ModeInfo.OtherColors }}
          >
            <strong>Our info</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
