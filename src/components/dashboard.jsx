import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout')
            .then(result => {
                if(result.data.Status){
                    localStorage.removeItem("valid");
                    navigate('/login');
                }
            });
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ${sidebarOpen ? 'open' : ''}`}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
                            <button className="btn btn-dark ms-auto d-block d-sm-none" onClick={toggleSidebar}>
                                <i className="bi bi-list"></i>
                            </button>
                        </div>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className='w-100'>
                                <Link to="/dashboard" className="nav-link text-white px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            <li className='w-100'>
                                <Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white">
                                    <i className="fs-4 bi-people ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Generate Timetable</span>
                                </Link>
                            </li>
                            <li className='w-100'>
                                <Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white">
                                    <i className="fs-4 bi-people ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Update Details</span>
                                </Link>
                            </li>
                            <li className='w-100' onClick={handleLogout}>
                                <Link className="nav-link px-0 align-middle text-white">
                                    <i className="fs-4 bi-power ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col p-0 m-0">
                    <div className="p-2 d-flex justify-content-center shadow">
                        <h4>View Timetable</h4>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Timetable
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Timetable 1</a></li>
                            <li><a className="dropdown-item" href="#">Timetable 2</a></li>
                            <li><a className="dropdown-item" href="#">Timetable 3</a></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;