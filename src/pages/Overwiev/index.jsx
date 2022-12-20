import React from "react";
import Profile from "./../../ui/Profile/index";
import Card from "./../../ui/Card/Card";
// import {Outlet} from "react-router-dom"
import { useEffect, useState } from "react";
import { API } from "./../../api/api";
import "./style.scss";
const index = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  useEffect((e) => {
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
      <div className="overview">
        <div className="container">
          <div className="overview__inner">
            <div className="overview__left">
              <Profile/>
            </div>
            <div className="overview__right">
              <div className="top">
                <h3>Popular repositories</h3>
                <p className="text">Customize your pins</p>
              </div>
              <div className="repos__over">
                {/* {repos.map((el) => {
                      return <Card repos={el} key={el.id} />;
                    })} */}
                    {
                      // repos.lengt
                    }
                    {
                      data.length > 0 ?(
                        data.slice(15, 21).map((e)=>{
                          return <Card data={e} key={e.id}/>
                        })
                      ): <div className="lds-ripple"><div></div><div></div></div>
                    }
                {/* <Card/>   */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
