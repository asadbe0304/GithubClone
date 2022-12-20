import React from "react";
import "./style.scss";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GrDrag } from "react-icons/gr";
import { API } from "./../../api/api";
import { useState, useEffect } from "react";
const index = ({data:{name, id, language}}) => {

  return (
    <>
      <div className="card-repos">
        <div className="card-top">
          <div>
            <h3 className="repos-title">
              <RiGitRepositoryLine className="read" />
              {name}
              <span className="public">public</span>
            </h3>
          </div>
          <div>
            <GrDrag />
          </div>
        </div>
        <div className="card-bottom">
          <span className="dot"></span>
          {language}
        </div>
      </div>
    </>
  );
};

export default index;
