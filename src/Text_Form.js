import React from "react";
import { useState } from "react";

export default function Text_Form(props) {
  const [MyText, setText] = useState("");
  const UpperCaseClicked = () => {
    let s = MyText;
    s = s.toUpperCase();
    setText(s);
    props.showAlert("Changed to UPPER-CASE", "success");
  };
  const lowercaseClicked = () => {
    let s = MyText;
    s = s.toLowerCase();
    setText(s);
    props.showAlert("Changed to lower-case", "success");
  };
  const TextWasChanged = (event) => {
    setText(event.target.value);
  };
  const EraseClicked = () => {
    setText("");
    props.showAlert("Text was erased", "success");
  };
  const RemoveExtraSpaceClicked = () => {
    let s = MyText;
    let s1 = s.split(" ");
    let s2 = "";
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== "") {
        s2 += s1[i] + " ";
      }
    }
    setText(s2);
    props.showAlert("Removed extra-space", "success");
  };
  let style1 = {
    backgroundColor: "cyan",
    color: "Green",
  };
  let style2 = {
    color: props.ModeInfo.Text_color,
    backgroundColor: props.ModeInfo.OtherColors,
  };

  let sizeoftext = MyText.split(" ").length;
  return (
    <div className="mx-5">
      <form>
        <div className="form-group my-3" style={style1}>
          <label htmlFor="exampleFormControlTextarea1">
            <h4>
              <b>Type or Paste your text below</b>
            </h4>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="15"
            value={MyText}
            onChange={TextWasChanged}
            style={style2}
          ></textarea>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={UpperCaseClicked}
      >
        Change to UPPER-CASE
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={lowercaseClicked}
      >
        Change to lower-case
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={EraseClicked}
      >
        Erase
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={RemoveExtraSpaceClicked}
      >
        Remove extra spaces
      </button>
      <div className="container mx-2">
        <h3>
          <b>number of words = {sizeoftext} </b>
        </h3>
        <h3>
          <b>reading time = {sizeoftext * 0.3} seconds</b>
        </h3>
      </div>
    </div>
  );
}
