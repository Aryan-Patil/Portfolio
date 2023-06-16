import React, { useState } from 'react'
import "./Css/main.css"
import { CiMobile3, CiMail, CiLocationOn } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineArrowsAlt } from "react-icons/ai";
import useWindowResize from './resizewindow';
import profile200 from './images/profile_qpoekr_c_scale,w_200.webp';
import profile671 from './images/profile_qpoekr_c_scale,w_671.webp';
import profile1005 from './images/profile_qpoekr_c_scale,w_1005.webp';
import profile1240 from './images/profile_qpoekr_c_scale,w_1240.webp';
import profile1400 from './images/profile_qpoekr_c_scale,w_1400.webp';
import Basic from "./data/data.json";



export default function Main() {
  const [show, setshow] = useState(false);
  const { width } = useWindowResize();


  return (

    <div className='main'>{width <= 1100 ?
      <>

        <button className='expand-btn' aria-label="Expand" onClick={() => setshow(!show)} type="button" >
          <AiOutlineArrowsAlt size={25} />
        </button>
        <div className="position">
          <img srcSet={`${profile200} 200w, ${profile671} 671w, ${profile1005} 1005w, ${profile1240} 1240w, ${profile1400} 1400w`}
        src={profile1400}
        alt="Profile Image" className='image' srcset="" />
          <div className="basic-info">
            <h2 className='name'>{Basic.basic.name}</h2>
            <div className="tag">
              <a target="_blank" href={Basic.basic.resume}>Resume</a>
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
              <span><a target="_blank" href={Basic.basic.email_link}>{Basic.basic.email}</a></span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiLocationOn size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Location:</span><br />
              <span><a target="_blank" href={Basic.basic.location_map}>{Basic.basic.location}</a></span>
            </div>
          </div>

        </div>}

      </> :

      <>
        <img className='dex-image' srcSet={`${profile200} 200w, ${profile671} 671w, ${profile1005} 1005w, ${profile1240} 1240w, ${profile1400} 1400w`}
        sizes="(max-width: 1400px) 100vw, 1400px"
        src={profile1400}
        alt="Profile Image" />
        <h2 className='name'>{Basic.basic.name}</h2>
        <div className="tag"><a target="_blank" href={Basic.basic.resume}>Download Resume</a></div>
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
              <span><a target="_blank" href={Basic.basic.email_link}>{Basic.basic.email}</a></span>
            </div>
          </div>

          <div className="contact-detail-info">
            <CiLocationOn size={35} className='contact-img' />
            <div className='main-info'>
              <span className='fade-color' >Location:</span><br />
              <span><a target="_blank" href={Basic.basic.location_map}>{Basic.basic.location}</a></span>
            </div>
          </div>

        </div>

      </>}
      <div className="contact-footer">
        <a target="_blank" aria-label="Visit Github" href={Basic.basic.github}><AiOutlineGithub size={25} className="hover-color" /></a>
        <a target="_blank" aria-label="Visit LinkedIn" href={Basic.basic.linkdin}><AiFillLinkedin size={25} className="hover-color" /></a>
        <a  target="_blank" aria-label="Visit Instagram" href={Basic.basic.instagram}><AiOutlineInstagram size={25} className="hover-color" /></a>
      </div>
    </div>
  )
}
