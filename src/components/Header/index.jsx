import Github from "./../../assets/png/github.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { API } from "../../api/api";
import "./style.scss";
import React, { useState, useEffect } from "react";

const index = () => {
  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState([])
  //   useEffect(() => {
  //     API.getAll().then((result) => {
  //       setData(result.data);
  //       if(result.data){
  //         // result.data
  //           search.push(result.data)
  //           setSearch(search)
  //       }
  //     });
  //   }, []);

  // const searchByName=(text)=>{
  //   API.getAll(text).then((res)=>{
  //     setData(res.data)
  //   })
  // }
  // console.log(data);

  const [menu, setMenu] = useState(false);
  const [flex, setFlex] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header">
            <div className="mobile__logo">
              <TiThMenuOutline
                className="mobile"
                onClick={() => setMenu((el) => !el)}
              />
              <a className="logo__link" href="./">
                <img className="logo__img" src={Github} alt="github logo" />
              </a>
            </div>
            <div className={`header__inner ${menu ? "header__inner" : "menu"}`}>
              {/* <img src={TiThMenuOutline} alt="images" /> */}
              <input
                type="search"
                onChange={(e) => {
                  // setSearch(e.target.value)
                  searchByName(e.target.value);
                }}
                className="search__bar"
                onFocus={() => setFlex(true)}
                placeholder="Search or jump to.."
              />
              <div className={`${flex ? "show" : "result"}`}></div>
              <ul className={`header__list `}>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">
                    Pull requests
                  </a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">
                    Issues
                  </a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">
                    Codespaces
                  </a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">
                    MarketPlace
                  </a>
                </li>
                <li className="header__list--item">
                  <a className="list__item--link" href="#link">
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className={`account__bar ${menu ? "" : "menu"}`}>
              <IoMdNotificationsOutline className="notif" />
              <span className="badge"></span>
              {/* <img className="notif" src={IoMdNotificationsOutline} alt="" /> */}
              <div className="plus">
                {/* <img src={AiOutlinePlus} alt="" /> */}
                <AiOutlinePlus />
                <MdOutlineArrowDropDownCircle />
                {/* <img src={MdOutlineArrowDropDownCircle} alt="" /> */}
              </div>
              <div className="avatar__box">
                <img
                  src={"https://avatars.githubusercontent.com/u/108288103?v=4"}
                  alt=""
                  className="avatar"
                />
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
