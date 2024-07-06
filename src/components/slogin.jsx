import React, { useState } from "react";
import axios from "axios";
import './style.css';
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/student/student_login', values)
            .then(result => {
                if(result.data.loginStatus){
                    localStorage.setItem("valid", true);
                    navigate('/student_detail/' + result.data.id);
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <div className="text-danger">{error && error}</div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Username:</strong>
                        </label>
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            placeholder="Enter Username"
                            onChange={(e) => setValues({ ...values, username: e.target.value })}
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password:</strong>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className="form-control rounded-0"
                        />
                    </div>
                    <button className="btn btn-success w-100 rounded-0 mb-2">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StudentLogin;