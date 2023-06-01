import { useState } from "react";

function ShirtColorSelect(props) {
  function onChangeValue(event) {
    console.log(event.target.value);
    props.setquestions(event.target.value);
  }
  return (
    <div onChange={onChangeValue}>
      <input type="radio" value="White" name="ShirtColor" /> White
      <input type="radio" value="Grey" name="ShirtColor" /> Grey
      <input type="radio" value="Red" name="ShirtColor" /> Red 
    </div>
  );
}

export default ShirtColorSelect;