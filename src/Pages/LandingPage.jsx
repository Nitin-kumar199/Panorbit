import React from "react";
import style from "../css/landing.module.css";
import GetProfile from "../Components/GetProfile";

const LandingPage = () => {
  return (
    <div className={style.landingMain}>
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>
        <GetProfile />
      </div>
    </div>
  );
};

export default LandingPage;
