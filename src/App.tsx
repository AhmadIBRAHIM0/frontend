import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Users from "./components/Pages/Users";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
