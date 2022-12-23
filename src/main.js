import React,{useState, useEffect} from 'react'
import "./main.css"
import { CiMobile3, CiMail, CiLocationOn } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineArrowsAlt } from "react-icons/ai";
import useWindowResize from './resizewindow';
import myimage from "./images/myimage.png"



export default function Main() {
  const [show, setshow] = useState(false);
  const {width, height} = useWindowResize();
  
  
  return (
    
    <div className='main'>{width<=1100 ?
    <>
    
      <button className='expand-btn' onClick={()=> setshow(!show)} type="button" ><AiOutlineArrowsAlt size={25} /></button>
      <div className="position">
      <img src={myimage} className='image'  alt="" srcset="" />
      <div className="basic-info">
      <h2 className='name'>Aryan Patil</h2>
      <div className="tag">CS Student</div>
      </div>
      
      </div>
      
      {show && <div className="contact-info">

<div className="contact-detail-info">
  <BiCalendar size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >DOB:</span><br />
    <span>05-Jan-2003</span>
  </div>
</div>

<div className="contact-detail-info">
  <CiMobile3 size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Phone:</span><br />
    <span>+91 9967645946</span>
  </div>
</div>

<div className="contact-detail-info">
  <CiMail size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Email:</span><br />
    <span><a href="mailto:aryanpatil050103@gmail.com">aryanpatil050103@gmail.com</a></span>
  </div>
</div>

<div className="contact-detail-info">
  <CiLocationOn size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Location:</span><br />
    <span><a href="https://www.google.com/maps/place/Panvel,+Navi+Mumbai,+Maharashtra/@18.9889533,73.0793374,13z/data=!3m1!4b1!4m5!3m4!1s0x3be7e83e1f23f23d:0xe3a106c431e3fd0a!8m2!3d18.9894007!4d73.1175162">Panvel, Maharashtra, India</a></span>
  </div>
</div>

</div>}
      
</> : 

<>
<img className='dex-image' src={myimage} alt="" />
      <h2 className='name'>Aryan Patil</h2>
      <div className="tag">CS Student</div>
       <div className="contact-info">

<div className="contact-detail-info">
  <BiCalendar size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >DOB:</span><br />
    <span>05-Jan-2003</span>
  </div>
</div>

<div className="contact-detail-info">
  <CiMobile3 size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Phone:</span><br />
    <span>+91 9967645946</span>
  </div>
</div>

<div className="contact-detail-info">
  <CiMail size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Email:</span><br />
    <span><a href="mailto:aryanpatil050103@gmail.com">aryanpatil050103@gmail.com</a></span>
  </div>
</div>

<div className="contact-detail-info">
  <CiLocationOn size={35} className='contact-img' />
  <div className='main-info'>
    <span className='fade-color' >Location:</span><br />
    <span><a href="https://www.google.com/maps/place/Panvel,+Navi+Mumbai,+Maharashtra/@18.9889533,73.0793374,13z/data=!3m1!4b1!4m5!3m4!1s0x3be7e83e1f23f23d:0xe3a106c431e3fd0a!8m2!3d18.9894007!4d73.1175162">Panvel, Maharashtra, India</a></span>
  </div>
</div>

</div>
      
</>}
      <div className="contact-footer">
        <a href=""><AiOutlineGithub size={25} className="hover-color"/></a>
        <a href=""><AiFillLinkedin size={25} className="hover-color"/></a>
        <a href=""><AiOutlineInstagram size={25} className="hover-color"/></a>
      </div>
    </div>
  )
}
