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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 678);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 678);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="section flex flex-col justify-between gap-8 mt-[100px] sm:mt-[0]">
      <Modal isVisible={isModalVisible} onPlayAgain={handlePlayAgain} />
      <div className="flex justify-center items-center px-6">
        <span className="font-bold text-[#F6EEE0] text-4xl">
          {humanScore}-{botScore}
        </span>
      </div>
      {isSmallScreen ? (
        <div className="flex justify-center items-center gap-8">
          <div>
            {start && (
              <img
                className="w-[50px] filter-custom"
                src={`../assets/${selected}-brown.svg`}
                alt=""
              />
            )}
          </div>
          <div>
            {start && (
              <img
                className="w-[50px] filter-custom"
                src={`../assets/${randomSelect}-brown.svg`}
                alt=""
              />
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center px-6 h-full mt-[0] sm:mt-[120px]">
        <div className="flex justify-center items-center flex-col gap-4">
          <Circle item="rock" variant={isSmallScreen ? "small" : "medium"} />
          <Circle item="paper" variant={isSmallScreen ? "small" : "medium"} />
          <Circle
            item="scissors"
            variant={isSmallScreen ? "small" : "medium"}
          />
          <span className="font-bold text-4xl text-[#F6EEE0]">YOU</span>
        </div>
        {isSmallScreen ? (
          ""
        ) : (
          <>
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
          </>
        )}

        <div>
          <span className="font-bold text-4xl text-[#F6EEE0]">BOT</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
