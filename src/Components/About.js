import React from 'react'
import Header from './Header'
import "./Css/About.css"
export default function About() {
    return (
        <div>
            <Header />
            <h1 className="heading-name">About Me</h1>
            <div className="heading-underline"></div>

            <div className='about_info'>
                <p>My name is Aryan. Currently I am -</p>
                <ul>
                    <li>in my sophomore year pursuing Bachelors Degree in Computer Science & Engineering from India.</li>
                    <li>learning Data Structures & Algorithms.</li>
                    <li>working on improving my Fullstack Web Development Skills by applying what I learn in my projects.</li>
                    <li>I enjoy turning complex problems into simple, beautiful and intuitive designs. </li>
                    <li>learing Automation Testing</li>
                </ul>
            </div>
            
            <div className="fake">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis ducimus recusandae placeat eum voluptatum earum laudantium sequi veritatis. Soluta sapiente magnam quaerat. Placeat temporibus quia ullam sapiente reiciendis eaque.</div>
        </div>
    )
}
