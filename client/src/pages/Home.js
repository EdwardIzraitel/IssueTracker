import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../images/home.png';
import downarrow from '../images/downarrow.png';
import notification from '../images/notification.png';
import { PieChart } from 'react-minimal-pie-chart';

const Home = () => {
    const list = [['e','test','Edward','Complete'],
    ['f','test','Edward','Complete'],
    ['g','test','Edward','Complete'],
    ['IssueTracker','test','Edward','End']]

    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const [projectsOnCurrentPage,setProjectsOnCurrentPage]= useState([]);
    const [totalPageNumbers, setTotalPageNumbers]=useState(1);

    const [pieChart,setPieChart]=useState({
        labels: ['1','2','3'],
        datasets:[{
            data: [200,400,500],
            backgroundColor:['red','blue','green']
        }]
    })


    const findTotalPageNumbers = () =>{
        setTotalPageNumbers(Math.ceil(list.length/3))
    }

    const changeCurrentPage = (page) =>{
        if(page<1) page=1
        if(page>totalPageNumbers) page=totalPageNumbers
        document.getElementById(`active${currentProjectPage}`).classList.toggle('active');
        setCurrentProjectPage(prev=>page);
        document.getElementById(`active${page}`).classList.toggle('active');
    }

    const createButtonProjectElements=()=>{
        const buttonProjectElements=[];
        buttonProjectElements.push(
        <div className='page-item m-md-1'>
            <button className="shadow-none button" style={{borderRadius:"15px"}} onClick={()=>changeCurrentPage(currentProjectPage-1)} >&#60;</button>
        </div>
        )
        buttonProjectElements.push(
        <div className='page-item m-md-1'>
            <button id="active1" className="active shadow-none button" style={{borderRadius:"15px"}} onClick={()=>changeCurrentPage(1)}>1</button>
        </div>)
        for(let index=2; index<=totalPageNumbers;index++){
            buttonProjectElements.push(
            <div key={index} className='page-item m-md-1'>
                <button id={"active"+index} className="shadow-none button" style={{borderRadius:"15px"}} onClick={()=>changeCurrentPage(index)}>{index}</button>
           </div>)
        }

        buttonProjectElements.push(
        <div className='page-item m-md-1'>
            <button className="shadow-none button" style={{borderRadius:"15px"}} onClick={()=>changeCurrentPage(currentProjectPage+1)}>&#62;</button>
        </div>)
        return buttonProjectElements;
    }

    const findDisplayableProjects=()=>{
        setProjectsOnCurrentPage(prev=>{return[]});
        let tempProjects = [];

        for (var index = currentProjectPage*3-3; index<=currentProjectPage*3-1; index++){
            if(index >= list.length) break;
            tempProjects.push(list[index]);
        }
        setProjectsOnCurrentPage(prev=>{return[...tempProjects]});
    }

    useEffect(()=>{
        findDisplayableProjects();
    },[currentProjectPage])

    useEffect(()=>{
        findTotalPageNumbers();
    },[])
    return(
        <div className="d-grid background">
            <div className="row g-0">
                <div className="col-1 side-bar">
                    <div style={{paddingLeft:"1vh",paddingTop:"3vh"}}>
                        <p>Welcome Edward</p>
                        <p>Logged in as: Admin</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-border-slide shadow-none">User Roles</button>
                            <button className="btn btn-border-slide shadow-none">Manage Project Users</button>
                            <button className="btn btn-border-slide shadow-none">My Projects</button>
                            <button className="btn btn-border-slide shadow-none">My Tickets</button>
                        </div>
                    </div>
                </div>
            <div className="col">
                <div className="headerbg">
                    <div className='header align-items-center d-flex justify-content-between'>
                        <input style={{marginLeft:"20px"}}type="text" placeholder='Search'></input>
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
                <div className="project-box shadow">
                    <p className='m-md-2'>Projects</p>
                    <div style={{height:"68%"}}>
                        <div style={{backgroundColor:"#D8F2DF"}}>
                        <div className="row g-0 m-md-2">
                            <div className='col-2'>Project</div>
                            <div className='col-5'>Description</div>
                            <div className='col-3'>Contributors</div>
                            <div className='col'>Status</div>
                        </div>
                        </div>
                        {projectsOnCurrentPage.map(element=>{
                            return(
                            <div className="m-md-3">
                                <div className="row g-0" >
                                    <div className='col-2'>{element[0]}</div>
                                    <div className='col-5'>{element[1]}</div>
                                    <div className='col-3'>{element[2]}</div>
                                    <div className='col'>{element[3]}</div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    
                    <div className="position-relative">
                        <div className='pagination position-aboslute bottom-0'>
                            {createButtonProjectElements()}
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col">
                        <div className="box shadow">
                            Tickets by Type
                            
                            <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>
                        </div>
                    </div>
                        <div className="col">
                        <div className="box shadow">Tickets by Priority</div>
                    </div>
                        <div className="col">
                        <div className="box shadow">Tickets by Status</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;