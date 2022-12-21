import React from "react";
import "./style.scss";
// import { Link } from "react-router-dom";
// import { RiGitRepositoryLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";

const index = ({ data: { name, id, language, updated_at, pushed_at, visibility, html_url } }) => {
  return (
    <>
      <div className="card__repos">
        <div className="card__repos--top">
          <a href={html_url} target="blank">
            <h3 className="repos-title">
              {name}
              <span className="public">{visibility}</span>
            </h3>
          </a>
          <button className="btn-star">
            <CiStar className="star"/>
            Star
          </button>
        </div>
        <div className="card__footer">
          <span className="badges"></span>
          {language}
          <CiStar className="star"/>
          <p className="time">Update {updated_at}</p>
        </div>
      </div>
    </>
  );
};

export default index;
