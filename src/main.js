import React, { useState } from 'react'
import "./Css/main.css"
import { CiMobile3, CiMail, CiLocationOn } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineArrowsAlt } from "react-icons/ai";
import useWindowResize from './resizewindow';
import myimage from "./images/profile.jpg";
import Basic from "./data/data.json";



export default function Main() {
  const [show, setshow] = useState(false);
  const { width } = useWindowResize();


  return (

    <div className='main'>{width <= 1100 ?
      <>

        <button className='expand-btn' onClick={() => setshow(!show)} type="button" >
          <AiOutlineArrowsAlt size={25} />
        </button>
        <div className="position">
          <img src={myimage} className='image' alt="" srcset="" />
          <div className="basic-info">
            <h2 className='name'>{Basic.basic.name}</h2>
            <div className="tag">
              <a href={Basic.basic.resume}>Resume</a>
            </div>
          </div>

        </div>

        {show && <div className="contact-info">

          <div className="contact-detail-info">
            <BiCalendar size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >DOB:</span><br />
              <span>{Basic.basic.dob}</span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiMobile3 size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Phone:</span><br />
              <span>{Basic.basic.contact}</span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiMail size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Email:</span><br />
              <span><a href={Basic.basic.email_link}>{Basic.basic.email}</a></span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiLocationOn size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Location:</span><br />
              <span><a href={Basic.basic.location_map}>{Basic.basic.location}</a></span>
            </div>
          </div>

        </div>}

      </> :

      <>
        <img className='dex-image' src={myimage} alt="" />
        <h2 className='name'>{Basic.basic.name}</h2>
        <div className="tag"><a href={Basic.basic.resume}>Download Resume</a></div>
        <div className="contact-info">

          <div className="contact-detail-info">
            <BiCalendar size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >DOB:</span><br />
              <span>{Basic.basic.dob}</span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiMobile3 size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Phone:</span><br />
              <span>{Basic.basic.contact}</span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiMail size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Email:</span><br />
              <span><a href={Basic.basic.email_link}>{Basic.basic.email}</a></span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiLocationOn size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Location:</span><br />
              <span><a href={Basic.basic.location_map}>{Basic.basic.location}</a></span>
            </div>
          </div>

        </div>

      </>}
      <div className="contact-footer">
        <a href={Basic.basic.github}><AiOutlineGithub size={25} className="hover-color" /></a>
        <a href={Basic.basic.linkdin}><AiFillLinkedin size={25} className="hover-color" /></a>
        <a href={Basic.basic.instagram}><AiOutlineInstagram size={25} className="hover-color" /></a>
      </div>
    </div>
  )
}
