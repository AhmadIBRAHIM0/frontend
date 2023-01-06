import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Users from "./components/Pages/Users";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Doctors from "./components/Pages/Doctors";
import Categories from "./components/Pages/Categories";
import CreateCategory from "./components/Pages/CreateCategory";
import EditCategory from "./components/Pages/EditCategory";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/doctors'} element={<Doctors/>}/>
                    <Route path={'/categories'} element={<Categories />}/>
                    <Route path={'/categories/create'} element={<CreateCategory />}/>
                    <Route path={'/categories/:id'} element={<EditCategory />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
