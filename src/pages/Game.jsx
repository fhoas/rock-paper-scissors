import React, { useContext, useEffect, useState } from "react";
import Circle from "../components/Circle";
import MyContext from "../context/store";
import Modal from "../components/Modal";

const Game = () => {
  const {
    selected,
    randomSelect,
    humanScore,
    setHumanScore,
    botScore,
    setBotScore,
    start,
    setStart,
  } = useContext(MyContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (humanScore >= 3 || botScore >= 3) {
      setIsModalVisible(true);
    }
  }, [humanScore, botScore]);

  const handlePlayAgain = () => {
    setHumanScore(0);
    setBotScore(0);
    setIsModalVisible(false);
    setStart(false);
  };

  return (
    <div className="section flex flex-col justify-between gap-8">
      <Modal isVisible={isModalVisible} onPlayAgain={handlePlayAgain} />
      <div className="flex justify-center items-center px-6">
        <span className="font-bold text-[#F6EEE0] text-4xl">
          {humanScore}-{botScore}
        </span>
      </div>
      <div className="flex justify-between items-center px-6 h-full mt-[120px]">
        <div className="flex justify-center items-center flex-col gap-4">
          <Circle item="rock" variant="small" />
          <Circle item="paper" variant="small" />
          <Circle item="scissors" variant="small" />
          <span className="font-bold text-4xl text-[#F6EEE0]">YOU</span>
        </div>
        <div>
          {start && (
            <img
              className="w-[250px] filter-custom"
              src={`../assets/${selected}-brown.svg`}
              alt=""
            />
          )}
        </div>
        <div>
          {start && (
            <img
              className="w-[250px] filter-custom"
              src={`../assets/${randomSelect}-brown.svg`}
              alt=""
            />
          )}
        </div>
        <div>
          <span className="font-bold text-4xl text-[#F6EEE0]">BOT</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
