import React from 'react'
import Header from './Header'
import { GiBookshelf } from "react-icons/gi";
import "./Css/Resume.css"
export default function Resume() {
  return (
    <div>
        <Header />
        <h1 className="heading-name">Resume</h1>
        <div className="heading-underline"></div>
        <div className="education">
          <div className="heading">
            <GiBookshelf size={40} className='contact-img education-logo' />
            <span>Education</span>
          </div>
        </div>
        <div className="fake">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis ducimus recusandae placeat eum voluptatum earum laudantium sequi veritatis. Soluta sapiente magnam quaerat. Placeat temporibus quia ullam sapiente reiciendis eaque.</div>
       
        </div>
  )
}
