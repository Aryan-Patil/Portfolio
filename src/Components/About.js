import React from 'react'
import Header from './Header'
import "./Css/About.css"
import { CgFigma, CgCodeSlash } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
export default function About() {
    return (
        <div>
            <Header />
            <h1 className="heading-name">About Me</h1>
            <div className="heading-underline"></div>

            <div className='about_info'>
                <p>My name is Aryan. Currently I am -</p>
                <ul>
                    <li>I’m in 3rd year pursuing B.E. in Computer Science from University of Mumbai. I am always excited to learn new things, meet new people ,get connected with like minded people , share my experience, and learn from their experiences.</li>
                    <li>learning Data Structures & Algorithms.</li>
                    <li>working on improving my Fullstack Web Development Skills by applying what I learn in my projects.</li>
                    <li>I enjoy turning complex problems into simple, beautiful and intuitive designs. </li>
                    <li>learing Automation Testing</li>
                </ul>
            </div>
            <h2>What I'm Good At.</h2>
            <div class="row">
                <div class="col-sm-6">
                    <div className="Card">
                        <div className="Card-img">
                            <CgCodeSlash className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <h4>Web Development</h4>
                            <div className="Body-content">
                                High-quality development of websites using React, Javascript, PHP, MySql, HTML, CSS.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="Card">
                        <div className="Card-img">
                            <CgFigma className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <h4>Web Design</h4>
                            <div className="Body-content">
                                The most modern and high-quality design made with Figma.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="Card">
                        <div className="Card-img">
                            <AiFillGithub className='Card-img-color' size={50} />
                        </div>
                        <div className="Card-body">
                            <h4>Git & GitHub</h4>
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
