import React from "react";
import Profile from "./../../ui/Profile/index";
import Card from "./../../ui/Card/Card";
import { useEffect, useState } from "react";
import { API } from "./../../api/api";
import "./style.scss";
const index = () => {
  // const [data, setData] = useState([]);
  // const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   API.getMy().then((result) => {
  //     setData(result.data);
  //   });
  // }, []);
  return (
    <>
      <div className="overview">
        <div className="container">
          <div className="overview__inner">
            <div className="overview__left">
              <Profile />
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
                      // repos.length

                    }
                <Card/>                
                <Card/>                
                <Card/>                
                <Card/>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
