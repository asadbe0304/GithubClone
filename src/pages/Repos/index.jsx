import React from "react";
import Profile from "./../../ui/Profile/index";
import Cards from "./../../ui/ReposCard/index";
import { BiCaretDown, BiBookBookmark } from "react-icons/bi";
import { API } from "../../api/api";
import { useEffect, useState } from "react";
import "./style.scss";
const index = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    API.getRepos().then((result) => {
      setData(result.data);
      if (result.data) {
        result.data.forEach((el) => {
          name.push(el.name);
          setName(name);
        });
      }
    });
  }, []);
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
              {/* <Cards /> */}
              {data.length > 0
                ? data.map((e) => {
                    return <Cards data={e} key={e.id} />;
                  })
                : <div class="lds-ripple"><div></div><div></div></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
