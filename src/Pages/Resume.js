import React from 'react'
import Header from '../Components/Header'
import { GiBookshelf } from "react-icons/gi";
import "./Css/Resume.css";
import Data from "../data/data.json"
import Skills from '../Components/tools';
export default function Resume() {

  return (
    <div>
      <Header />
      <div className="fade-left">
        <h1 className="heading-name">Resume</h1>
        <div className="heading-underline"></div>
      </div>
      <div className="education">
        <div className="heading fade-in">
          <GiBookshelf size={40} className='contact-img education-logo' />
          <span>Education</span>
        </div>
        <ul className='fade-in'>
          {Data.education.map(data => {
            return (
              <li>
                <span className="education-title">
                  {data.heading}
                </span>
                <span className="year-of-study ">-{data.year}</span><br />
                <div className="content">
                  {data.content}
                </div>
              </li>
            )
          })}

        </ul>
        <div className="line fade-in"></div>
      </div>
      <div className="skills-and-tools fade-left">
        <div className="skills">
          <div className="heading fade-in">
            <span>My Skills</span>
          </div>
          <div className="skills-contnet">
            <div className="fade-right">
              <div className="">Web Development</div>
              <div className="percent">
                <div className="webdev"></div>
              </div>
            </div>
            <div className="fade-left">
              <div className="">Web Design</div>
              <div className="percent">
                <div className="webdesign"></div>
              </div>
            </div>
            <div className="fade-right">
              <div className="">Python</div>
              <div className="percent">
                <div className="python"></div>
              </div>
            </div>
          </div>
        </div>
        <Skills className='fade-right' />
      </div>
      <div className="fake fake-margin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis ducimus recusandae placeat eum voluptatum earum laudantium sequi veritatis. Soluta sapiente magnam quaerat. </div>

    </div>
  )
}
