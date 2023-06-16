import React, { useState } from 'react';
import Header from '../Components/Header';
import './Css/Portfolio.css';
import Data from "../data/data.json";
import { Helmet } from 'react-helmet';

const ProjectCard = ({ data }) => {
  const renderTags = () => {
    if (data.type === 1) {
      return (
        <div className="flex">
          <div className="tags"><a target="_blank" href={data.github}>GitHub</a></div>
          <div className="tags"><a target="_blank" href={data.visit}>Visit</a></div>
        </div>
      );
    } else if (data.type === 2) {
      return (
        <div className="flex">
          <div className="tags"><a target="_blank" href={data.Figma}>Figma</a></div>
          <div className="tags"><a target="_blank" href={data.prototype}>Prototype</a></div>
        </div>
      );
    } else if (data.type === 3) {
      return (
        <div className="flex">
          <div className="tags"><a target="_blank" href={data.github}>GitHub</a></div>
        </div>
      );
    }
    return null;
  };

  const renderDetails = () => {
    if (data.type === 1) {
      return <div className='span-details'>&#40;Web Development&#41;</div>;
    } else if (data.type === 2) {
      return <div className='span-details'>&#40;Web Design&#41;</div>;
    } else if (data.type === 3) {
      return <div className='span-details'>&#40;Software Development&#41;</div>;
    }
    return null;
  };

  return (
    <div className="col">
      <div className='project-card m-2 mb-4' key={data.id}>
        <img className='card-image' src={data.img} alt={data.name} />
        <div className="">
          <div className="project-heading">{data.name}</div>
          {renderDetails()}
        </div>
        <div className="description">
          {data.description}
        </div>
        {renderTags()}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState('all');

  const renderProjects = () => {
    return (
      <div className='row fade-in mt-4'>
        {Data.projects.map((data) => {
          if (selectedType === 'all' || data.type.toString() === selectedType) {
            return <ProjectCard key={data.id} data={data} />;
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Aryan Patil</title>
        <meta name="description" data-rh="true" content="Explore my diverse portfolio of web development, design, and software projects. Collaborate with me to bring your ideas to life. Contact me now." />
        <link rel="canonical" href="/Portfolio" />
      </Helmet>
      <div className='portfolio'>
        <Header />
        <div className="fade-left">
          <h1 className="heading-name">Portfolio</h1>
          <div className="heading-underline"></div>
        </div>

        <div className="fade-in">
          <button
            className={selectedType === 'all' ? 'projects-btn projects-btn-active' : 'projects-btn'}
            onClick={() => setSelectedType('all')}
          >
            All
          </button>
          <button
            className={selectedType === '1' ? 'projects-btn projects-btn-active' : 'projects-btn'}
            onClick={() => setSelectedType('1')}
          >
            Web Development
          </button>
          <button
            className={selectedType === '2' ? 'projects-btn projects-btn-active' : 'projects-btn'}
            onClick={() => setSelectedType('2')}
          >
            Web Design
          </button>
          <button
            className={selectedType === '3' ? 'projects-btn projects-btn-active' : 'projects-btn'}
            onClick={() => setSelectedType('3')}
          >
            Software Development
          </button>
        </div>

        {renderProjects()}
      </div>
    </>
  );
}
