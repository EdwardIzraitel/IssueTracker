import React from 'react'
import './Header.css'
import home from '../images/home.png';
import downarrow from '../images/downarrow.png';
import notification from '../images/notification.png';

const Header = () =>{
    return(
        <div className="headerbg">
            <div className='header align-items-center d-flex justify-content-between'>
                <input style={{marginLeft:"20px"}} type="text" placeholder='Search'/>
                <div className="d-flex justify-content-between headerButtons">
                    <img src={home} alt=''/>
                    <div className="line"/>
                    <img src={notification} alt=''/>
                    <div className="line"/>
                    <div className="d-flex">
                        <p style={{color:"black"}}>Edward</p>
                        <img src={downarrow} style={{marginLeft:"5px"}} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;