import React from 'react'
import Header from '../Components/Header'
import "./Css/About.css"
import { CgFigma, CgCodeSlash } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import Basic from "../data/data.json";

export default function About() {
    return (
        <div>
            <Header />
            <div className="fade-left">
                <h1 className="heading-name">About Me</h1>
                <div className="heading-underline"></div>
            </div>

            <div className='about_info'>
                <p className='fade-left'>{Basic.about_me.heading}</p>
                <ul className='fade-right'>
                    {Basic.about_me.points.map((data, index) => <li key={index}>{data.content}</li>)}
                </ul>
            </div>
            <h2 className='fade-left'>What I'm Good At.</h2>
            <div class="row">
                <div class="col-sm-6 fade-left">
                    <div className="Card card-display">
                        <div className="Card-img">
                            <CgCodeSlash className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <div className='internal-heading'>Web Development</div>
                            <div className="Body-content">
                                High-quality development of websites using React, Javascript, PHP, MySql, HTML, CSS.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 fade-right">
                    <div className="Card card-display">
                        <div className="Card-img">
                            <CgFigma className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <div className='internal-heading'>Web Design</div>
                            <div className="Body-content">
                                The most modern and high-quality design made with Figma.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 fade-left">
                    <div className="Card card-display">
                        <div className="Card-img">
                            <AiFillGithub className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <div className='internal-heading'>Git & GitHub</div>
                            <div className="Body-content">
                                Using Git for source code management & GitHub version control and collaboration.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
