import React from "react";
import { SiLinkedin } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kartik-marathe-360013168/"
        target="_blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/ksm007" target="_blank">
        <RxGithubLogo />
      </a>
    </div>
  );
};

export default HeaderSocials;
