import { useState } from "react";

function AttributeSelect(props) {
  function onChangeValue(event) {
    console.log(event.target.value);
    props.setquestions(event.target.value);
  }
  return (
    <div onChange={onChangeValue}>
      <input type="radio" value="HairColor" name="Attribute" /> Hair Color
      <input type="radio" value="ShirtColor" name="Attribute" /> Shirt Color
      <input type="radio" value="FacialHair" name="Attribute" /> Has Facial Hair{" "}
    </div>
  );
}

export default AttributeSelect;
