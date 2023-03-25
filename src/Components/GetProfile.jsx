import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContest } from "../ContextApi/ContextProvider";
import style from "../css/getprofile.module.css";

const GetProfile = () => {
  const { data, loading, error, getAllData } = useContext(AppContest);

  useEffect(() => {
    getAllData();
  }, []);

  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }

  return (
    <div className={style.card_bottom}>
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <NavLink to={`/homepage/${el.id}`}>
              <div className={style.maping_div}>
                <img src={el.profilepicture} alt="profile image" />
                <p>{el.name}</p>
              </div>
            </NavLink>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default GetProfile;
