import React, { useState } from 'react';
import Header from '../Components/Header';
import { Player } from '@lottiefiles/react-lottie-player';
import './Css/Contact.css';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    content: '',
  });

  const updateFormValue = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const validateEmail = () => {
    return formValues.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
  };

  const validateName = () => {
    return formValues.name.length > 0;
  };

  const validateContent = () => {
    return formValues.content.length > 0;
  };

  const isFormValid = validateEmail() && validateName() && validateContent();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, name, content } = formValues;

    const params = {
      name,
      email,
      content,
    };

    const serviceId = "service_hvfyfke";
    const templateId = "template_8v2uhmd";
    const userId = 'frdFq_AgCGZW4U4rM';

    emailjs
      .send(serviceId, templateId, params, userId)
      .then((res) => {
        alert('Thanks for contacting me!');
        console.log(res);
        setFormValues({
          email: '',
          name: '',
          content: '',
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
       <Helmet>
                <title>Contact Us - Aryan Patil</title>
                <meta name="description" data-rh="true" content="Get in touch with me to discuss collaborations and bring your ideas to life. Contact me now." />
                <link rel="canonical" href="/Contact" />
                </Helmet>
      <Header />
      <h1 className="heading-name fade-left">Contact Us</h1>
      <div className="heading-underline fade-left"></div>
      <div className="Contact-card fade-in">
        <div className="Contact-animation">
          <Player
            className="Animation"
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_t1yo4z4b.json"
          />
        </div>
        <form className="Contact-body" onSubmit={handleSubmit}>
          <h3>Get in touch</h3>
          <br />
          <div className="Contact-name contact-body-info">
            <span>Name </span>
            <br />
            <input
              className={`Width-input ${formValues.name.length === 0 ? 'border-white' : validateName() ? 'border-green' : 'border-red'}`}
              onChange={(e) => updateFormValue('name', e.target.value)}
              required
              value={formValues.name}
              placeholder="Enter Name"
              type="text"
              name="username"
            />
          </div>
          <div className="Contact-email contact-body-info">
            <span>Email </span>
            <br />
            <input
              className={`Width-input ${formValues.email.length === 0 ? 'border-white' : validateEmail() ? 'border-green' : 'border-red'
                }`}
              placeholder="Enter E-Mail"
              required
              onChange={(e) => updateFormValue('email', e.target.value)}
              value={formValues.email}
              type="email"
              name="Email"
              id=""
            />
          </div>
          <div className="Contact-question contact-body-info">
            <span>Message </span>
            <br />
            <textarea
              className={`Width-input ${formValues.content.length === 0 ? 'border-white' : validateContent() ? 'border-green' : 'border-red'
                }`}
              onChange={(e) => updateFormValue('content', e.target.value)}
              value={formValues.content}
              required
              placeholder="Enter Message"
              name="message"
              id=""
              rows="7"
            ></textarea>
          </div>
          <input
            type="submit"
            className={`button-main ${isFormValid ? 'button-active' : 'button-disabled'}`}
            value="Submit"
          />
        </form>
      </div>
      <div className="fake">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur rerum minus, accusantium quas commodi
        accusamus nobis consequatur sapiente, unde quae, corporis tempore recusandae eligendi repudiandae beatae tenetur nihil
        adipisci.
      </div>
    </div>
  );
}
