import React from "react";
import './Stats.css'
const Stats = () =>{
    return(
        <div className="row g-0">
            <div className="col">
                <div className="box shadow">
                    Tickets by Type
                </div>
            </div>
                <div className="col">
                <div className="box shadow">Tickets by Priority</div>
            </div>
                <div className="col">
                <div className="box shadow">Tickets by Status</div>
            </div>
        </div>
    )
}

export default Stats