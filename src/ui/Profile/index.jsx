import React from "react";
import "./style.scss";
import { useEffect, useState } from "react";
import { API } from "./../../api/api";
import { NavLink } from "react-router-dom";
const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getMy().then((res) => setData(res.data));
  }, []);

  // console.log(data);
  const { avatar_url, login, blog, followers, following, location } = data;

  return (
    <>
      <div className="card__avatar">
        <img src={avatar_url} className="card__img" alt="images" />
        <div className="card__body">
          <h2 className="user__title">Asadbek Axmadqulov</h2>
          <p className="nick__name">{login}</p>
          <button className="btn">Edit Profile</button>
          <h3 className="job__title">Frontend developer</h3>
          <div className="follow">
            <NavLink className="follow__link" to="/foll">
              <span className="count">{followers}</span>
              followers
            </NavLink>
            <NavLink className="follow__link" to="/follow">
              <span className="count">{following}</span>
              following
            </NavLink>
          </div>
          <div className="card__footer">
            <ul className="card__list">
              <li className="card__item">developer</li>
              <li className="card__item">{location}</li>
              <li className="card__item">
                <a className="card__item" href={blog}>{blog}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(index);
