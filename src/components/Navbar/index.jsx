  import React from "react";
import { NavLink } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { AiOutlineProject, AiOutlineStar } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { useEffect, useState } from "react";
import { API } from "../../api/api";
import "./style.scss";

const index = () => {
  // const stickyRef = useRef();

  const [data, setData]=useState([])

  useEffect(()=>{
    API.getMy().then((res)=>setData(res.data))
  }, [])
  
  // console.log(data);
  const {avatar_url, login, blog,public_repos}= data


  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 20
        ? setSticky("sticky")
        : setSticky("");
    }
  };
  return (
    <>
        <div className={`navbar ${sticky} `} >
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
                    <span className="total">{public_repos}</span>
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
