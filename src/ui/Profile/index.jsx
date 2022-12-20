import React from "react";
import "./style.scss"
import { useEffect, useState } from "react";
import {API} from "./../../api/api"

const index = () => {

  const [data, setData]=useState([])

  useEffect(()=>{
    API.getMy().then((res)=>setData(res.data))
  }, [])
  
  // console.log(data);
  const {avatar_url, login, blog,followers, following}= data

  return (
    <>
      <div className="card__avatar">
        <img
          src={avatar_url}
          className="card__img"
          alt="images"
        />
        <div className="card__body">
          <h2 className="user__title">Asadbek Axmadqulov</h2>
          <p className="nick__name">{login}</p>
          <button className="btn">Follow</button>
          <h3 className="job__title">Frontend developer</h3>
          <div className="follow">
            <a className="follow__link" href="#link">
              <span className="count">{followers}</span>
              followers
            </a>
            <a className="follow__link" href="#link">
              <span className="count">{following}</span>
              following
            </a>
          </div>
          <div className="card__footer">
            <ul className="card__list">
              <li className="card__item">BarbosaDEv</li>
              <li className="card__item">U.S.A</li>
              <li className="card__item">{blog}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
