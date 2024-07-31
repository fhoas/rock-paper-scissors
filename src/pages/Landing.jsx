import React from "react";
import Circle from "../components/Circle";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game");
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="justify-center items-center gap-24 hidden md:flex">
        <Circle item="rock" variant="large" />
        <div className="long-arrow-left hidden"></div>
        <Circle item="paper" variant="large" />
      </div>
      <button
        onClick={handleClick}
        className="bg-[#A45C40] px-4 py-2 text-[#F6EEE0] w-fit rounded-md border-solid border-2 border-[#A45C40] hover:bg-[#C38370] font-bold mt-60 md:mb-4 md:m-0 ease-in duration-100"
      >
        PLAY!
      </button>
      <div className="long-arrow-left-2 fixed right-[38%]"></div>
      <div className="long-arrow-right fixed left-[38%] hidden"></div>
      <div className="justify-center items-center hidden md:flex">
        <Circle item="scissors" variant="large" />
      </div>
    </div>
  );
};

export default Landing;
