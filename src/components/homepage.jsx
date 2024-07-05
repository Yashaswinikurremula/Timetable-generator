import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <img src="background.jpg" alt="Background Image" className="background-image" />
            <div className="content">
                <img src="logo.png" alt="Logo" className="logo" />
                <Link to="/admin-login" className="login-button">Admin Login</Link>
                <Link to="/student-login" className="login-button">Student Login</Link>
            </div>
        </div>
    );
}

export default Homepage;