import React from "react";
import "./index.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/zacharylian/",
  github: "https://github.com/zacharylian",
  insta: "https://github.com/zacharylian",
};

export const Socials = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialLinks.linkedin && (
          <li>
            <a href={socialLinks.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialLinks.github && (
          <li>
            <a href={socialLinks.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialLinks.insta && (
          <li>
            <a href={socialLinks.insta}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>~ Socials ~ </p>
    </div>
  );
};

export default Socials;
