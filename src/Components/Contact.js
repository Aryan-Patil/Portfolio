import React, { useState } from 'react'
import Header from './Header'
import { Player } from '@lottiefiles/react-lottie-player';
import "./Css/Contact.css"

export default function Contact() {

  const [email, setEmail] = useState("")
  const [msg1, setmsg1] = useState(false)
  const [msg2, setmsg2] = useState(false)
  const [msg3, setmsg3] = useState(false)
  const [name, setname] = useState("")
  const [content, setcontent] = useState("")

  
  
  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var emailValue = e.target.value
    setEmail(emailValue)
    if (email.match(pattern)) {
      setmsg1(true);
    } else {
      setmsg1(false);
    }
  }
  const nameVad = (e) => {
    var namevalue = e.target.value
    setname(namevalue)
    if (name.length > 0) {
      setmsg2(true)
    }
    else {
      setmsg2(false)
    }
  }

  const bodyVad = (e) => {
    var bodyvalue = e.target.value
    setcontent(bodyvalue)
    if (content.length > 0) {
      setmsg3(true)
    }
    else {
      setmsg3(false)
    }
  }
  return (
    <div>
      <Header />
      <h1 className="heading-name fade-left">Contact Us</h1>
      <div className="heading-underline fade-left"></div>
      <div className="Contact-card fade-in">
        <div className="Contact-animation">
          <Player className='Animation'
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_t1yo4z4b.json"
          />

        </div>
        <form className="Contact-body" action='https://formspree.io/f/mvonpyaq' method='POST'>
          <h3>Get in touch</h3><br />
          <div className="Contact-name contact-body-info">
            <span>Name </span><br />
            <input className={name.length === 0 ?
              "Width-input border-white" :
              msg2 ?
                "Width-input border-green" :
                "Width-input border-red"
            }
              onChange={nameVad} required value={name} placeholder='Enter Name' type="text" name='username' />
          </div>
          <div className="Contact-email contact-body-info">
            <span>Email </span><br />
            <input className={email.length === 0 ?
              "Width-input border-white" :
              msg1 ?
                "Width-input border-green" :
                "Width-input border-red"
            }
              placeholder='Enter E-Mail' required onChange={emailValidation} value={email} type="email" name="Email" id="" />
          </div>
          <div className="Contact-question contact-body-info">
            <span>Message </span><br />
            <textarea className={content.length === 0 ?
              "Width-input border-white" :
              msg3 ?
                "Width-input border-green" :
                "Width-input border-red"
            }
              onChange={bodyVad} value={content} required
              placeholder='Enter Message' name="message" id="" rows="7"></textarea>
          </div>
          <input type="submit" className={msg1 ? msg2 ? msg3 ? "button-main button-active" :"button-disabled" :"button-disabled" : "button-disabled"} value="Submit" />
        </form>
      </div>
      <div className="fake">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur rerum minus, accusantium quas commodi accusamus nobis consequatur sapiente, unde quae, corporis tempore recusandae eligendi repudiandae beatae tenetur nihil adipisci.
      </div>
    </div>
  )
}
