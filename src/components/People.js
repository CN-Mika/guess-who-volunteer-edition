import { useState } from "react";

function People(props) {
  const [isclicked, setIsclicked] = useState(false);
  const [isWinner, setisWinner] = useState(false);

  function toggleclicked() {
    if (props.win === true) {
      console.log("Hello");
      setisWinner(true);
    } else if (isclicked) {
      setIsclicked(false);
    } else {
      setisWinner(false);
      setIsclicked(true);
    }
  }

  function getimageclass(isclicked, isWinner) {
    if (isclicked) {
      return "imagefaded";
    }
    return "";
  }

  return (
    <div onClick={toggleclicked}>
      <p> {props.name} </p>

      <img
        className={getimageclass(isclicked)}
        src={
          isWinner
            ? "https://guestoria.com/wp-content/uploads/2019/04/winner-gif-1.gif"
            : props.image
        }
        alt="1st person"
      />
    </div>
  );
}

export default People;
