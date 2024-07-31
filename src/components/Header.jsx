import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center w-full">
      <div className="favicon" onClick={handleClick}>
        <img className="w-[200px]" src="../assets/LOGO.png" alt="#" />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6">
          <li>
            <img className="w-[30px]" src="../assets/rock-black.svg" alt="#" />
          </li>
          <li>
            <img className="w-[30px]" src="../assets/paper-black.svg" alt="#" />
          </li>
          <li>
            <img
              className="w-[30px]"
              src="../assets/scissors-black.svg"
              alt="#"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
