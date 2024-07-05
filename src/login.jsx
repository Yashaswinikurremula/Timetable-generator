import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  let passwordRegex="/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/"
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => { 
    setUsername(e.target.value)
    // Implement your login logic here
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
    // Implement your forgot password logic here
  };
  const loginPage=()=>{
    if(username==''){
      console.log("error in userName")
    }
    else if(password==''){
      console.log('error in password')
    }
    else{
      console.log("Login sucessful")
    }

  }
  const ForgotPassword=()=>{

  }
  console.log('Username:', username);
  console.log('Password:', password);
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input
          id='userName'
          type="text"
          value={username}
          onChange={(e) => handleLogin(e)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          id='password'
          type="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
      </div>
      <div>
        <button onClick={()=>loginPage()} style={{marginBottom:"20px"}}>Login</button>
        <button onClick={()=>ForgotPassword()}>Forgot Password</button>
      </div>
    </div>
  );
};

export default Login;
