import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../api/api";
const index = () => {
  const [data, setData] = useState([]);
  const names = useParams();
  const back = useNavigate();

  useEffect(() => {
    API.getRepos(names).then((res) => setData(res.data[0]));
  }, [names]);

  const {repos__url, public_repos}= data
  return (
    <>
      <div className="repository">
        <ul className="repos__list">
          <li className="repos__item">Repos</li>
        </ul>
      </div>
    </>
  );
};

export default index;
