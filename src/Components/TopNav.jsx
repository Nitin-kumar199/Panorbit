import React, { useContext, useEffect } from "react";
import { AppContest } from "../ContextApi/ContextProvider";
import style from "../css/homepage.module.css";
import ProfileDetails from "../Pages/ProfileDetails";

const TopNav = () => {
  const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(AppContest);

  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>

      <ProfileDetails />
    </div>
  );
};

export default TopNav;
