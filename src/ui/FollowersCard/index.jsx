import React from "react";
import "./style.scss";

const index = ({data:{avatar_url, login}}) => {
  return (
    <>
      <div className="card_followers">
        <div className="card__followers--top">
          <img src={avatar_url} alt="images" />
          <div className="followers_box">
            <h3 className="followers__title">{login}</h3>
            <p className="location">Blog</p>
          </div>
        </div>
        <button className="btn-follow">UnFollow</button>
      </div>
    </>
  );
};

export default index;
