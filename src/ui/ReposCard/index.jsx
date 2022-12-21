import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
// import { RiGitRepositoryLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";

const index = ({ data: { name, id, language, updated_at, pushed_at } }) => {
  return (
    <>
      <div className="card__repos">
        <div className="card__repos--top">
          <Link to={`/repos/${name}`}>
            <h3 className="repos-title">
              {name}
              <span className="public">public</span>
            </h3>
          </Link>
          <button className="btn-star">
            <CiStar className="star"/>
            Star
          </button>
        </div>
        <div className="card__footer">
          <span className="badges"></span>
          {language}
          <p className="time">Update {updated_at}</p>
        </div>
      </div>
    </>
  );
};

export default index;
