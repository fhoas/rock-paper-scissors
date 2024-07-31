import React, { useContext } from "react";
import MyContext from "../context/store";

const Modal = ({ isVisible, onPlayAgain }) => {
  const { humanScore, botScore } = useContext(MyContext);
  if (!isVisible) {
    return null;
  }

  const resultMessage = humanScore > botScore ? "You Win!" : "You Lose!";

  return (
    <div className="fixed inset-0 bg-[#E4B7A0] bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-[#A45C40] py-4 px-8 sm:py-8 sm:px-16 rounded-lg text-center border-[2px] border-solid border-[#F6EEE0]">
        <h2 className="text-2xl font-bold mb-4 text-[#F6EEE0]">
          {resultMessage}
        </h2>
        <p className="mb-6 text-[#F6EEE0]">Would you like to play again?</p>
        <button
          onClick={onPlayAgain}
          className="bg-[#F6EEE0] text-[#A45C40] px-4 py-2 rounded hover:bg-[#e7e7e7f0] ease-in duration-100"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
