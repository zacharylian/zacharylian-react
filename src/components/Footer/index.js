import React from 'react'
import './index.scss'
import socialLinks from "../../components/socialLinks";

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Footer = () => {
  const [clipboardState, setClipboardState] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 5);
    }
  };

  return (
    <div className='footer'>
      <div className='footerText'>
        <h5>© Built by Zachary 2023</h5>
      </div>
      <div className='footerIcons'>
          <div className='footerLinkedIn'>
            <a href={socialLinks.linkedin}>
              <h5>
                LINKEDIN 
              </h5>
            </a>
          </div>
        <div className='footerGithub'>
          <a href={socialLinks.github}>
            <h5>
              GITHUB 
            </h5>
          </a>
        </div>
        <div className='footerIG'>
          <a href={socialLinks.insta}>
            <h5>
              INSTAGRAM 
            </h5>
          </a>
        </div>
        <div className='footerGmail'>
          <CopyToClipboard text={socialLinks.gmail} onCopy={() => setClipboardState(true)}>
            <div>
              <button className="unbutton" onClick={togglePopup}>
                <h5>GMAIL</h5>
              </button>
              {clipboardState && (
                <span style={{color: "#F3DEBA"}}>
                  <br/>Copied!
                </span>
                )}{" "}
                </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default Footer