import React from 'react'
import "./Css/home.css"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';


export default function Home() {
    return (
        <div className='Home'>
            <Router>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>

        </div>
    )
}
