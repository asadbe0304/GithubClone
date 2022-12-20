import React from "react";
import "./style.scss"
import { useEffect, useState } from "react";
import {API} from "./../../api/api"

const index = () => {

  const [data, setData]=useState("")

  useEffect(()=>{
    API.getMy().then((res)=>setData(res.data))
  }, [])
  
  // console.log(data);
  const {avatar_url, login, blog,followers_url}= data
  return (
    <>
      <div className="card__avatar">
        <img
          src={"https://avatars.githubusercontent.com/u/108288103?v=4"}
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
              <span className="count">{"0"}</span>
              followers
            </a>
            <a className="follow__link" href="#link">
              <span className="count">11</span>
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
