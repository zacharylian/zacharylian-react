import "./index.scss";
import { IconContext } from "react-icons";
import { IoLogoPython, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoVue, IoLogoJavascript, IoLogoTableau } from "react-icons/io5";
import { TbBrandMysql, TbBrandFigma, TbBrandGit } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaDocker, FaBootstrap }  from "react-icons/fa";
import { SiJupyter, SiPostman, SiJira, SiAdobepremierepro, SiPhp } from "react-icons/si";

const about = () => {
  return (
    <div className="about">
      <div className="aboutContent">
        <h1>About Me</h1>
        <div className="adj">
          I am a Year 2 Information Systems undergraduate majoring in Business Analytics and Digitalisation & Cloud Solutions at <b>Singapore Management University (SMU)</b>. I am an <b>adaptable</b> team player who is able to work <b>independently</b> and in a <b>fast-paced</b> environment. 
          <br/>
          I am passionate about <b>data science and analytics</b>, and I am always looking for opportunities to learn and grow. During my free time, I love editing videos and eating good food! 
          <div className="techStackContent">
            <div className="techStackLeft">
              <h2>Technologies</h2>
              <div className="python">
                <IconContext.Provider value={{ size: "2em"  }}>
                  <IoLogoPython /> 
                </IconContext.Provider>
                <p> 
                  Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, SpaCy, Textblob, NLTK, Flask
                </p>
              </div>
              <div className="sql">
                <IconContext.Provider value={{ size: "2em"  }}>
                  <TbBrandMysql /> 
                </IconContext.Provider>
                <p> 
                  SQL, NoSQL
                </p>
              </div>
              <div className="moreIcons">
                <IconContext.Provider value={{ size: "2em" }}>
                  <IoLogoHtml5 />
                  <IoLogoCss3 />
                  <FaBootstrap />
                  <IoLogoJavascript />
                  <RiReactjsLine />
                  <IoLogoVue />
                  <SiPhp />
                </IconContext.Provider>
              </div>
            </div>
            <div className="techStackRight">
              <h2>Tools</h2>
              <div className="tools">
                <div className="col1">
                  <IconContext.Provider value={{ size: "2em"  }}>
                    <TbBrandGit />
                    <FaDocker />
                    <SiPostman />
                    <SiJupyter />
                  </IconContext.Provider>
                </div>
                <div className="col2">
                  <IconContext.Provider value={{ size: "2em"  }}>
                    <IoLogoTableau />
                    <TbBrandFigma />
                    <SiAdobepremierepro />
                    <SiJira />
                  </IconContext.Provider>
                </div>
              </div>  
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default about