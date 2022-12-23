import React from 'react'
import "./Css/home.css"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Work from './Work';
import Contact from './Contact';


export default function Home() {
    return (
        <div className='Home'>
            <Router>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Work" element={<Work />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>

        </div>
    )
}