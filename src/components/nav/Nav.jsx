import React, { useCallback, useContext } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {useState} from "react";

const Nav = () => {
  var active="#"
  const [ActiveNav, setActiveNav] = useState(active)
  return (
    <nav>
      <a
        className={ActiveNav == "#" ? "active" : ""}
        onClick={() => setActiveNav(active="#")}
        href="#">
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={ActiveNav == "#about" ? "active" : ""}
        onClick={() => setActiveNav(active="#about")}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={ActiveNav == "#experience" ? "active" : ""}
        onClick={() => setActiveNav(active="#experience")}>
        <BiBook />
      </a>
      <a
        href="#services"
        className={ActiveNav == "#services" ? "active" : ""}
        onClick={() => setActiveNav(active="#services")}>
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={ActiveNav == "#contact" ? "active" : ""}
        onClick={() => setActiveNav(active="#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};


export default Nav;
