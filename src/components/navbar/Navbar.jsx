import React, { useState } from "react";
import "./Navbar.css";
import logo from "/images/jp.png";
import { MdClose, MdHome } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  const tooglemenu = () => {
    setshowmenu(!showmenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className={`menu ${showmenu ? "active" : ""}`}>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>shop</li>
        </ul>
      </div>

      <div className="callnow">
        <a href="">order now</a>
      </div>

      <div className="openmenu" onClick={tooglemenu}>
        <RiMenu3Line className=" open" />
      </div>

      <div className={showmenu ? "mobilemenu active" : "mobilemenu"}>
        <div className="closeicons" onClick={() => setshowmenu(!showmenu)}>
          <MdClose className=" close" />
        </div>
        <ul>
          <a href=""> home</a>
          <a href=""> shop</a>
          <a href=""> about</a>
          <a href="callnow_cell"> order now</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
