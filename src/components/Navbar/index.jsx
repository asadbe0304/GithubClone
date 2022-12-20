import React from "react";
import { NavLink } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { AiOutlineProject, AiOutlineStar } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./style.scss";

const index = () => {
  // const stickyRef = useRef();
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("")
        : setStickyClass("");
    }
  };

  return (
    <>
      <div className={`navbar ${stickyClass}`}>
        <div className="container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "item")}
                >
                  <MdOutlineChromeReaderMode />
                  Overview
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/repos"
                  className={({ isActive }) => (isActive ? "active" : "item")}
                >
                  <RiGitRepositoryLine />
                  Repositories
                  <span className="total">30</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "item" : "active")}
                >
                  <AiOutlineProject />
                  Project
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "item" : "active")}
                >
                  <FiPackage />
                  Packages
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "item" : "active")}
                >
                  <AiOutlineStar />
                  Star
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default index;
