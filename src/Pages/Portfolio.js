import React, { useState } from 'react';
import Header from '../Components/Header';
import './Css/Portfolio.css';
export default function Portfolio() {
  const [all, setAll] = useState(true);
  const [sde, setSde] = useState(false);
  const [webdev, setWebdev] = useState(false);
  const [webdes, setWebdes] = useState(false);

  const allvis = () => {
    return (
      <div>
        All
      </div>
    );
  };

  const sdevis = () => {
    return (
      <div>
        Software Development
      </div>
    );
  };

  const webdevvis = () => {
    return (
      <div>
        Web Development
      </div>
    );
  };

  const webdesvis = () => {
    return (
      <div>
        Web Design
      </div>
    );
  };

  const Output = () => {
    if (sde) {
      return sdevis();
    } else if (webdev) {
      return webdevvis();
    } else if (webdes) {
      return webdesvis();
    } else if (all) {
      return allvis();
    }
  };

  return (
    <div>
      <Header />
      <h1 className="heading-name">Portfolio</h1>
      <div className="heading-underline"></div>

      <div className="">
        <button className={all ? "projects-btn projects-btn-active": "projects-btn"}  onClick={() => {
          setAll(true);
          setSde(false);
          setWebdes(false);
          setWebdev(false);
        }}>All</button>
        <button className={webdev ? "projects-btn projects-btn-active": "projects-btn"} onClick={() => {
          setAll(false);
          setSde(false);
          setWebdes(false);
          setWebdev(true);
        }}>Web Development</button>
        <button className={webdes ? "projects-btn projects-btn-active": "projects-btn"} onClick={() => {
          setAll(false);
          setSde(false);
          setWebdes(true);
          setWebdev(false);
        }}>Web Design</button>
        <button className={sde ? "projects-btn projects-btn-active": "projects-btn"} onClick={() => {
          setAll(false);
          setSde(true);
          setWebdes(false);
          setWebdev(false);
        }}>Software Development</button>
      </div>

      <Output />

      <div className="fake">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis ducimus recusandae placeat eum voluptatum earum laudantium sequi veritatis. Soluta sapiente magnam quaerat. Placeat temporibus quia ullam sapiente reiciendis eaque.
      </div>
    </div>
  );
}
