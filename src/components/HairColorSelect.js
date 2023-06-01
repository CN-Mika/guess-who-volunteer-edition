import { useState } from "react";

function HairColorSelect(props) {
  function onChangeValue(event) {
    console.log(event.target.value);
    props.setquestions(event.target.value);
  }
  return (
    <div onChange={onChangeValue}>
      <input type="radio" value="LightBrown" name="HairColor" /> Light Brown
      <input type="radio" value="DarkBrown" name="HairColor" /> Dark Brown
      <input type="radio" value="Black" name="HairColor" /> Black{" "}
    </div>
  );
}

export default HairColorSelect;
