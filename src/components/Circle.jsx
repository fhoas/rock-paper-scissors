import React, { useContext } from "react";
import MyContext from "../context/store";

const Circle = ({ item, variant }) => {
  const {
    selected,
    setSelected,
    randomSelect,
    setRandomSelect,
    humanScore,
    setHumanScore,
    botScore,
    setBotScore,
    setStart,
  } = useContext(MyContext);

  let size, size2, size3, size4;

  if (variant === "large") {
    size = "250px";
    size2 = "240px";
    size3 = "190px";
    size4 = "100px";
  } else if (variant === "small") {
    size = "94px";
    size2 = "90px";
    size3 = "70px";
    size4 = "30px";
  }

  const handleClick = () => {
    const items = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * items.length);
    const botChoice = items[randomIndex];
    setSelected(item);
    setRandomSelect(botChoice);
    setStart(true);

    if (item === botChoice) {
    } else if (
      (item === "rock" && botChoice === "scissors") ||
      (item === "paper" && botChoice === "rock") ||
      (item === "scissors" && botChoice === "paper")
    ) {
      setHumanScore((prevScore) => prevScore + 1);
    } else {
      setBotScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{ width: size, height: size }}
      className="rounded-full bg-[#A45C40] flex justify-center items-start hover:bg-[#a45c40d3] active:hover:bg-[#bc613d]"
    >
      <div
        style={{ width: size, height: size2 }}
        className="rounded-full bg-[rgba(255,255,255,0.1)] flex justify-center items-center"
      >
        <div
          style={{ width: size3, height: size3 }}
          className="rounded-full bg-[#C38370] flex justify-center items-center"
        >
          <div className="flex justify-center items-center">
            <img
              style={{ width: size4 }}
              src={`../assets/${item}-white.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
