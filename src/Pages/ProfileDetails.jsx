import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetProfile from "../Components/GetProfile";
import { AppContest } from "../ContextApi/ContextProvider";
import style from "../css/profiledetails.module.css";

const ProfileDetails = () => {
  const { profileData, setShowProfile, showProfile } = useContext(AppContest);

  const handleClick = () => {
    setShowProfile(false);
    sessionStorage.clear("id");
  };

  return (
    <div
      className={style.MainDiv}
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className={style.profile}>
        <img src={profileData[0]?.profilepicture} alt="profile" />
        <p>{profileData[0]?.name}</p>
        <p>{profileData[0]?.email}</p>
      </div>
      <hr />

      <div className={style.getProfile} onClick={() => setShowProfile(false)}>
        <GetProfile />
      </div>

      <Link to="/">
        <button onClick={handleClick} className={style.signout_button}>
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
