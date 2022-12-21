import React from "react";
import Profile from "./../../ui/Profile";
import Card from "./../../ui/FollowersCard/index";
import "./style.scss";
import { API } from "../../api/api";
import { useState, useEffect } from "react";
const index = () => {
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect((e) => {
    API.getFollowers().then((res) => {
      setData(res.data);
      if (res.data) {
        res.data.forEach((el) => {
          followers.push(el);
          setFollowers(followers);
        });
      }
    });
  }, []);
  // console.log(data);
  return (
    <>
      <div className="site-followers">
        <div className="container">
          <div className="followers">
            <div className="followers__left">
              <Profile />
            </div>
            <div className="followers__right">
              {/* <Card /> */}
              {data.length > 0 ? (
                data.map((e) => {
                  return <Card key={e.id} data={e} />;
                })
              ) : (
                <h2>Not Followers</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
