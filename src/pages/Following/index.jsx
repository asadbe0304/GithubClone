import React from "react";
import Profile from "./../../ui/Profile";
import Card from "./../../ui/FollowCard/index";
import "./style.scss";
import { useEffect, useState } from "react";
import { API } from "../../api/api";
const index = () => {
  const [data, setData] = useState([]);
  const [follow, setFollow] = useState([]);

  useEffect((e) => {
    API.getFollowing().then((res) => {
      setData(res.data);
      if (res.data) {
        res.data.forEach((el) => {
          follow.push(el);
          setFollow(follow);
        });
      }
    });
  }, []);

  return (
    <>
      <div className="site-follow">
        <div className="container">
          <div className="follow__inner">
            <div className="follow__left">
              <Profile />
            </div>
            <div className="follow__right">
              {/* <Card /> */}
              {data.length > 0 ? (
                data.map((e) => {
                  return <Card key={e.id} data={e} />;
                })
              ) : (
                <h2>Not Follow</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
