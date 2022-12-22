import Github from "./../../assets/png/github.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { API } from "../../api/api";
import "./style.scss";
import React, { useState, useEffect, useRef } from "react";

const index = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        // result.data
        search.push(result.data);
        setSearch(search[0]);
      }
    });
  }, []);

  // const searchByName = (login) => {
  //   API.getAll(login).then((res) => {
  //     setData(res.data);
  //   });
  // };
  console.log(data);

  const [menu, setMenu] = useState(false);
  // const [flex, setFlex] = useState(false);
  const flex = useRef();

  const setFlex = () => {
    let result = document.querySelector(".result");
    if (result.classList.contains("show")) {
      flex.current.classList.remove("show");
    } else {
      flex.current.classList.add("show");
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header">
            <div className="mobile__logo">
              <FiMenu className="mobile" onClick={() => setMenu((el) => !el)} />
              <a className="logo__link" href="./">
                <img className="logo__img" src={Github} alt="github logo" />
              </a>
              <input
                className="mobile-search"
                onClick={() => setFlex()}
                placeholder="Search or jump to.."
                onChange={(e) => {
                  // searchByName(e.target.value);
                  setSearch((e.target.value))
                }}
              />
            </div>
            <div className={`header__inner ${menu ? "menu" : ""}`}>
              <input
                className="search__bar"
                onClick={() => setFlex()}
                placeholder="Search or jump to.."
                onChange={(e) => {
                  setSearch((e.target.value))
                  // searchByName(e.target.value);
                }}
              />
              <div className="result" ref={flex}>
                <ul className="list_result">
                  {data.map((el) => {
                    return (
                      <li className="result_item">
                        <RiGitRepositoryLine className="icon" />
                        <a href="#link">{el.login}</a>
                      </li>
                    );
                  })}

                </ul>
              </div>
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
            <div className={`account__bar ${menu ? "menu" : ""}`}>
              <IoMdNotificationsOutline className="notif" />
              <span className="badge"></span>
              <div className="plus">
                <AiOutlinePlus className="plusout" />
                <MdOutlineArrowDropDownCircle className="arrow" />
              </div>
              <div className="avatar__box">
                <img
                  src={"https://avatars.githubusercontent.com/u/108288103?v=4"}
                  alt=""
                  className="avatar"
                />

                <MdOutlineArrowDropDownCircle className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default index;
