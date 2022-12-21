import React from "react";
import "./style.scss";
 
const index = ({ data: {avatar_url, login, blog, html_url } }) => {
  return (
    <>
      <div className="card_follower">
        <div className="card__follower--top">
          <img src={avatar_url} alt="images" />
          <div className="follower_box">
            <h3 className="follower__title">
              <a href={html_url} className="follower__link" target="_blank">
              {login}
              </a>
              </h3>
            <p className="location">{blog}</p>
          </div>
        </div>
        <button className="btn-follow">Unfollow</button>
      </div>
    </>
  );
};

export default index;
