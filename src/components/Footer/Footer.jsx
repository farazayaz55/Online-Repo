import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Click the icon to mail Faraz</span>
        <SocialIcon url="https://mail.google.com/mail/?view=cm&fs=1&to=farazayaz86@gmail.com&su=HIRING" target="_blank" rel="noopener noreferrer" />
        <div className="f-icons">
         <SocialIcon url="https://github.com/farazayaz55" target="_blank" rel="noopener noreferrer" /> 
         <SocialIcon url="https://www.linkedin.com/in/faraz180453/" target="_blank" rel="noopener noreferrer" /> 
         <SocialIcon url="https://medium.com/@i180453" target="_blank" rel="noopener noreferrer" /> 
         {/* target and rel is used to open in new tab */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
