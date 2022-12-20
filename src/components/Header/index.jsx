import React, { useEffect, useState } from "react";
import Github from "./../../assets/github.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {TiThMenuOutline} from "react-icons/ti"
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import "./style.scss";
const index = () => {


  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header">
              <div className="mobile__logo">
              <TiThMenuOutline className="mobile"/>
              <a className="logo__link" href="./">
                <img className="logo__img" src={Github} alt="github logo" />
              </a>
              </div>
            <div className="header__inner">
              {/* <img src={TiThMenuOutline} alt="images" /> */}
              <input type="search" className="search__bar" placeholder="Search or jump to.."/>
              <ul className="header__list">
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">Pull requests</a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">Issues</a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">Codespaces</a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">MarketPlace</a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">Explore</a>
                </li>
              </ul>
              </div>
              <div className="account__bar">
                <IoMdNotificationsOutline className="notif"/>
                <span className="badge"></span>
                {/* <img className="notif" src={IoMdNotificationsOutline} alt="" /> */}
                <div className="plus">
                  {/* <img src={AiOutlinePlus} alt="" /> */}
                  <AiOutlinePlus  />
                  <MdOutlineArrowDropDownCircle />
                  {/* <img src={MdOutlineArrowDropDownCircle} alt="" /> */}
                </div>
                <div className="avatar__box">
                  <img src={"https://avatars.githubusercontent.com/u/108288103?v=4"} alt="" className="avatar" />
                  {/* <RiAdminFill className="avatar" /> */}
                  <MdOutlineArrowDropDownCircle />
                  {/* <img src={MdOutlineArrowDropDownCircle} alt="" /> */}
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
