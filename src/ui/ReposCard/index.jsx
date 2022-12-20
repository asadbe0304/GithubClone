import React from "react";
import "./style.scss";
// import { RiGitRepositoryLine } from "react-icons/ri";
import {CiStar} from "react-icons/ci"

const index = ({data:{name, id, language}}) => {
  return (
    <>
      <div className="card__repos">
        <div className="card__repos--top">
          <h3 className="repos-title">
            {name}
            <span className="public">public</span>
          </h3>
          <button className="btn-star">
            <CiStar/>
            Star</button>
        </div>
        <div className="card__footer">
          <span className="badges"></span>
          {language}
        </div>
      </div>
    </>
  );
};

export default index;
