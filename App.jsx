import React from 'react';
import Login from './components/login';
import Homepage from './components/start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
return (
    <BrowserRouter>
    <Routes>
    <Route path='/homepage' element={<Homepage/>}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/slogin' element={<SLogin />}></Route>
    </Routes>
    </BrowserRouter>

    );
}

export default App;

export default App;