import People from "./People";
import AttributeSelect from "./AttributeSelect";
import HairColorSelect from "./HairColorSelect";
import FacialHairSelect from "./FacialHairSelect";
import ShirtColorSelect from "./ShirtColorSelect";

import { useState } from "react";

function Board() {
  const [pickedquestions, setPickedquestions] = useState("");
  const [answers, setAnswers] = useState("");
  const [guessstatus, setGuessStatus] = useState("");

  let people = [
    {
      name: "Charlie",
      image: "Charlie.PNG",
      HairColor: "DarkBrown"
    },
    {
      name: "Joe",
      image: "Joe.PNG",
      HairColor: " DarkBrown"
    },
    {
      name: "Mika",
      image: "Mika.png",
      HairColor: " DarkBrown"
    },
    {
      name: "Michelle",
      image: "michelle.png",
      HairColor: "DarkBrown"
    },
    {
      name: "Danielle",
      image: "Danielle.png",
      HairColor: "LightBrown"
    },
    {
      name: "Matt",
      image: "Matt.png",
      HairColor: "LightBrown"
    },
    {
      name: "Yining",
      image: "Yining.png",
      HairColor: "Black"
    },
    {
      name: "Daniel",
      image: "Daniel.png",
      HairColor: "LightBrown"
    },
    {
      name: "Rohan",
      image: "Rohan.png",
      HairColor: "LightBrown"
    },
    {
      name: "Illya",
      image: "Illya.png",
      HairColor: "LightBrown"
    }
  ];
  const randomIndex = Math.floor(Math.random() * people.length);
  const item = people[randomIndex];
  item.isWcard = true;

  function makeGuess() {}
  function QuestionValue() {
    if (pickedquestions === "HairColor") {
      return <HairColorSelect setquestions={setAnswers} />;
    }
    if (pickedquestions === "FacialHair") {
      return <FacialHairSelect setquestions={setAnswers} />;
    }

    if (pickedquestions === "ShirtColor") {
      return <ShirtColorSelect setquestions={setAnswers} />;
    }
  }
  return (
    <div class="pictures">
      {people.map((person) => {
        return (
          <People
            name={person.name}
            image={person.image}
            win={person.isWcard}
          />
        );
      })}
      <div></div>
      <AttributeSelect setquestions={setPickedquestions} />
      <p>
        {" "}
        <QuestionValue /> {answers}
      </p>
      <button>Guess Button</button>
    </div>
  );
}

export default Board;
