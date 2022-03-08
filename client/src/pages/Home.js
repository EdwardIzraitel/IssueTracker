import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Projects from '../components/home/Projects';
import Stats from '../components/home/Stats';
const Home = () => {
    return(
        <div className="background">
            <div className="row g-0">
                <Sidebar/>
                <div className="col">
                    <Header/>
                    <Projects/>
                    <Stats/>
                </div>
            </div>
        </div>
    )
}

export default Home;