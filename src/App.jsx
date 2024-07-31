import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Game from "./pages/Game";
import MyContext from "./context/store";

const App = () => {
  const [start, setStart] = useState(false);
  const [selected, setSelected] = useState(null);
  const [randomSelect, setRandomSelect] = useState(null);
  const [humanScore, setHumanScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const sharedValue = {
    randomSelect,
    setRandomSelect,
    selected,
    setSelected,
    humanScore,
    setHumanScore,
    botScore,
    setBotScore,
    start,
    setStart,
  };

  return (
    <MyContext.Provider value={sharedValue}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;