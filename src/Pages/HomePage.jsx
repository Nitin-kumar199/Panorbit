import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../Components/LeftNav";
import ProfileBottom from "../Components/ProfileBottom";
import TopNav from "../Components/TopNav";
import { AppContest } from "../ContextApi/ContextProvider";
import style from "../css/homepage.module.css";

const HomePage = () => {
  const { profileData, getFilterData, setShowProfile } = useContext(AppContest);
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        <LeftNav />

        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
              <div className={style.profile}>
                <h2>Profile</h2>
                <TopNav />
              </div>

              <hr />

              <div onClick={() => setShowProfile(false)}>
                <ProfileBottom {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
