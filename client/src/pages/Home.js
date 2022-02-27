import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import home from '../images/home.png'
import downarrow from '../images/downarrow.png'
import notification from '../images/notification.png'
import headerbg from '../images/headerbg.jpg'


const Test = () => {
    return(
        <div className="d-grid background">
            <div className="row g-0">
                <div className="col-1 side-bar">
                    <div style={{paddingLeft:"1vh"}}>
                        <p>Welcome Edward</p>
                        <p>Logged in as: Admin</p>
                        <div className="d-grid gap-2">
                            <input className="text-left btn shadow-none" type="button" value="User Roles" name="test"/>
                            <input className="text-left btn shadow-none" type="button" value="Manage project users" name="test"/>
                            <input className="text-left btn shadow-none" type="button" value="My Projects" name="test"/>
                            <input className="text-left btn shadow-none" type="button" value="My Tickets" name="test"/>
                        </div>
                    </div>
                </div>
            <div className="col">
                <div className="headerbg">
                    <div className='header align-items-center d-flex justify-content-between'>
                        <input style={{marginLeft:"20px"}}type="text" placeholder='Search'></input>
                        <div className="d-flex justify-content-between headerButtons">
                            <img src={home}/>
                            <div className="line"/>
                            <img src={notification}/>
                            <div className="line"/>
                            <div className="d-flex">
                                <p style={{color:"black"}}>Edward</p>
                                <img src={downarrow} style={{marginLeft:"5px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-box shadow" style={{paddingLeft:"5px"}}>
                    <p>Projects</p>
                    <div className="row g-2">
                        <div className="col-2">
                            Project
                            <p>helo</p>
                        </div>
                        <div className="col-5 overflow-auto">Description
                            <p>i am a description</p>
                        </div>
                        <div className="col-3">Contributors
                        <p>Edward Izraitel</p>
                        </div>
                        <div className="col">Status<p>In Progress</p></div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col">
                        <div className="box shadow"></div>
                    </div>
                        <div className="col">
                        <div className="box shadow"></div>
                    </div>
                        <div className="col">
                        <div className="box shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Test;