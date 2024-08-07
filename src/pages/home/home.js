import "./index.scss";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PersonIcon from '@mui/icons-material/Person';

import selfie from '../../assets/selfie.jpg'

const description = ["I love data.", "I love to create.", "I love to learn."]
const urlFile = "../../assets/resume.pdf"

const downloadFile = (url) => {
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', 'resume_summer_2024.pdf');
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}

const home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <img src={selfie} alt="selfie" />
        <div className="homeDesc">
          <h1>Hi, I'm Zach!</h1>
          <h2>
            <div className="typewriterDesc">
              <Typewriter
                options={{
                  strings: description,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10
                }}
              />
            </div>
          </h2>

          <p>
            <div className="miniDesc">
                Full Stack Engineer (Product) Intern @ OCBC <br/>
                Year 3 Information Systems Undergraduate @ SMU <br/>
            </div>
          </p>

          <div className="buttons">
            <Link to="../about/about" style={{ textDecoration: "none" }}>
              <Button className="aboutbtn" variant="body" startIcon={<PersonIcon/>}>
                About Me
              </Button>
            </Link>

            <Button className="resumebtn" onClick={() => {downloadFile(urlFile)}} variant="body" startIcon={<SaveAltIcon/>}>
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home