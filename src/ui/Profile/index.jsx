import React from "react";
import "./style.scss";
import { useEffect, useState } from "react";
import { API } from "./../../api/api";
import {BsLink45Deg} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {RiUserFollowFill} from "react-icons/ri"
import{HiOutlineLocationMarker} from "react-icons/hi"
const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getMy().then((res) => setData(res.data));
  }, []);

  // console.log(data);
  const { avatar_url, login, blog, followers, following, location ,name, bio} = data;

  return (
    <>
      <div className="card__avatar">
        <img src={avatar_url} className="card__img" alt="images" />
        <div className="card__body">
          <h2 className="user__title">{name}</h2>
          <p className="nick__name">{login}</p>
          <button className="btn">Edit Profile</button>
          <h3 className="job__title">Frontend developer</h3>
          <div className="follow">
            <NavLink className="follow__link" to="/foll">
              <RiUserFollowFill className="fol-icon"/>
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
              <li className="card__item">
                <HiOutlineLocationMarker className="gps"/>
                {location}</li>
              <li className="card__item">{bio}</li>
              <li className="card__item">
                <BsLink45Deg className="link-icon"/>
                <a className="card__item blog_link" target="blank" href={blog}>{blog}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(index);
