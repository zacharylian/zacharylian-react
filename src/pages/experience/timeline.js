import React from 'react'
import './timeline.scss'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import hwachong from "../../assets/hwachong.png"
import ejc from "../../assets/ejc.png"
import arty from "../../assets/arty.webp"
import f5 from "../../assets/f5.png"
import smu from "../../assets/smu.png"
import accenture from "../../assets/accenture.png"

const VTimeline = () => {
  return (
    <div className='VTimeline'>
        <VerticalTimeline lineColor='#675D50'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2023 - Aug 2023"
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="accenture" src={accenture} alt="f5" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    App Developer Intern
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Accenture
                </h4>
                <p>
                    <ul>
                        <li>Design, build and configure applications to meet business processes and application requirements</li>
                        <li>Perform unit testing, integrate web components and support deployment activities (React, React Native, Typescript)</li>
                        <li>Build management, design and build enablement (Magnolia-CMS)</li>
                    </ul>
                    <b>Skills: React Native · Typescript · Magnolia-CMS</b> 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug 2021 - May 2025"
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="smu" src={smu} alt="smu" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Singapore Management University
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Information Systems Undergraduate Majoring in Business Analytics and Digitalisation & Cloud Solutions
                </h4>
                <p>
                    <b>Leadership and Co-Curricular Activities:</b>
                    <ul>
                        <li>SMU Business Intelligence & Analytics: Data Associate (AY2022-Present)</li>
                        <li>SMU .HACK: Member (AY2022-Present)</li>
                        <li>SMUAI: Member (AY2021-Present)</li>
                        <li>Ellipsis: Marketing Executive (AY2021-22)</li>
                        <li>SCIS Freshmen Orientation Camp Metamorphosis 2022: Marketing Director (AY2022)</li>
                        <li>Uni-Y (Y-Craft It!): Volunteer (AY2021-22)</li>
                        <li>SMU Caretalyst (Project Illuminate): Volunteer (AY2022)</li>
                        <li>Handball: Member (AY2021-22)</li>
                    </ul>
                    <b>Competitions & Achievements</b>
                    <ul>
                        <li>Code for Cities Hackathon: Top 10 (AY2022)</li>
                        <li>Ellipsis Tech Series Hackathon: Top 30 (AY2022)</li>
                        <li>Shopee Product & Design Challenge (AY2022)</li>
                    </ul>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Feb 2021 - May 2021"
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="f5" src={f5} alt="f5" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Digital Marketing Intern
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    F5
                </h4>
                <p>
                    <ul>
                        <li>Collaborated with cross-functional teams, including product marketing, to gather leads in the Finance industry and develop integrated marketing campaigns</li>
                        <li>Responsible for data cleaning and pre-processing of our clients' data to identify the appropriate marketing approach to use and ensure our client’s buy-in for our services (Tableau, Excel)</li>
                    </ul>
                    <b>Skills: Pivot Tables · Data Aggregation · Microsoft Excel </b> 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Apr 2019 - Feb 2021"
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="arty" src={arty} alt="arty" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Artillery Specialist
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Singapore Armed Forces (SAF)
                </h4>
                <p>
                    <ul>
                        <li>Detachment Commander for 23SA Charlie Battery</li>
                        <li>Awarded a certificate of recognition for being a “Standout Performer” during the unit’s summary exercise (2020)</li>
                        <li>Participated in the Presidential Gun Salute on National Day and was awarded the RSM coin</li>
                    </ul>
                    <b>Skills: Leadership · Problem Management · Communication </b> 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - 2017"
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="ejc" src={ejc} alt="ejc" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Eunoia Junior College (EJC)
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    "A" Levels
                </h4>
                <p>
                    <b>Leadership and Co-Curricular Activities:</b>
                    <ul>
                        <li>Class General Paper Representative</li>
                        <li>Softball: Outfielder</li>
                    </ul>
                    <b>Competitions & Achievements</b>
                    <ul>
                        <li>Edusave Most Improved Award (2018)</li>
                    </ul>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - 2017"
                dateClassName='dateClass'
                iconStyle={{ background: '#F3DEBA', color: '#fff' }}
                icon={<img className="hwachong" src={hwachong} alt="hwachong" />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Hwa Chong Institution
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    "O" Levels
                </h4>
                <p>
                    <b>Leadership and Co-Curricular Activities:</b>
                    <ul>
                        <li>Senior Staff Sergeant and Deputy Platoon Commander at St. John's Brigade Singapore</li>
                    </ul>
                    <b>Competitions & Achievements</b>
                    <ul>
                        <li>HCI Good Progress Award (2016)</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    </div>
  )
}

export default VTimeline