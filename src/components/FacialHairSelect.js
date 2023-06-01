import { useState } from "react";

function FacialHairSelect(props) {
  function onChangeValue(event) {
    console.log(event.target.value);
    props.setquestions(event.target.value);
  }
  return (
    <div onChange={onChangeValue}>
      <input type="radio" value="Beard" name="FacialHair" /> Beard
      <input type="radio" value="Mustache" name="FacialHair" /> mustache
      <input type="radio" value="Gotee" name="FacialHair" /> gotee{" "}
    </div>
  );
}

export default FacialHairSelect;
