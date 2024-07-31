import React from "react";
import Circle from "../components/Circle";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game");
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center px-4">
      <div className="flex justify-center items-center gap-12 md:gap-24">
        <Circle item="rock" variant="large" />
        <div className="hidden md:block long-arrow-left"></div>
        <Circle item="paper" variant="large" />
      </div>
      <button
        onClick={handleClick}
        className="bg-[#C38370] p-2 text-[#F6EEE0] w-24 md:w-[10%] rounded-md border-solid border-4 border-[#A45C40] font-bold mb-4"
      >
        PLAY!
      </button>
      <div className="hidden md:block long-arrow-left-2 fixed right-[38%]"></div>
      <div className="hidden md:block long-arrow-right fixed left-[38%]"></div>
      <div className="flex justify-center items-center">
        <Circle item="scissors" variant="large" />
      </div>
    </div>
  );
};

export default Landing;
