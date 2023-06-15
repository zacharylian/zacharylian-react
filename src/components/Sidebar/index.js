import React from "react";
import "./index.scss";
import socialLinks from "../../components/socialLinks";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
