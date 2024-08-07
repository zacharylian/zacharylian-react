import "./index.scss";
import { IconContext } from "react-icons";
import { IoLogoPython, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoVue, IoLogoJavascript, IoLogoTableau, IoLogoVercel } from "react-icons/io5";
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
          I am a Year 3 <b>Information Systems</b> undergraduate majoring in Business Analytics and Digitalisation & Cloud Solutions at <b>Singapore Management University (SMU)</b>. I am an <b>adaptable</b> team player who is able to work <b>independently</b> and in a <b>fast-paced</b> environment. 
          <br/>
          I am passionate about <b>Frontend Development and Product</b>, and I am always looking for opportunities to learn and grow. During my free time, I love watching F1 and eating good food! 
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
                <div className="col1">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <IoLogoHtml5 style={{marginRight: "4px"}}/>
                    <IoLogoCss3 style={{marginRight: "4px"}}/>
                    <FaBootstrap style={{marginRight: "4px"}}/>
                    <IoLogoJavascript style={{marginRight: "4px"}}/>
                  </IconContext.Provider>
                </div>
                <div className="col2">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <RiReactjsLine style={{marginRight: "4px"}}/>
                    <IoLogoVue style={{marginRight: "4px"}}/>
                    <SiPhp style={{marginRight: "4px"}}/>
                    <IoLogoVercel style={{marginRight: "4px"}}/>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="techStackRight">
              <h2>Tools</h2>
              <div className="tools">
                <div className="col1">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <TbBrandGit style={{marginRight: "4px"}}/>
                    <FaDocker style={{marginRight: "4px"}}/>
                    <SiPostman style={{marginRight: "4px"}}/>
                    <SiJira style={{marginRight: "4px"}}/>
                  </IconContext.Provider>
                </div>
                <div className="col2">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <SiJupyter style={{marginRight: "4px"}}/>
                    <IoLogoTableau style={{marginRight: "4px"}}/>
                    <TbBrandFigma style={{marginRight: "4px"}}/>
                    <SiAdobepremierepro style={{marginRight: "4px"}}/>
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