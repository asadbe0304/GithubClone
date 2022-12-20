import React from "react";
import Profile from "./../../ui/Profile/index";
import Cards from "./../../ui/ReposCard/index";
import { BiCaretDown, BiBookBookmark } from "react-icons/bi";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="repositories">
        <div className="container">
          <div className="repos">
            <div className="repos-left">
              <Profile />
            </div>
            <div className="repos__right">
              <div className="repos__top">
                <input type="search" placeholder="Find a repository..." />
                <div className="button">
                  <button type="button" className="btn-type">
                    Type
                    <BiCaretDown />
                  </button>
                  <button type="button" className="btn-type">
                    Language
                    <BiCaretDown />
                  </button>
                  <button type="button" className="btn-type">
                    Sort
                    <BiCaretDown />
                  </button>
                  <button type="button" className="btn-type succes">
                    <BiBookBookmark />
                    New
                  </button>
                </div>
              </div>
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
