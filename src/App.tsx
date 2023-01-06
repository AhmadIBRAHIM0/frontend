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
import PageNotFound from "./components/Pages/404";
import RouteWrapper from "./components/Shared/RouteWrapper";

function App() {
    return (
        <>
            <BrowserRouter>
                {/*<Route path={'/doctors'} element={<Doctors/>}/>*/}
                <RouteWrapper path={'/categories'} element={<Categories/>} role={'ADMIN'}/>
                <RouteWrapper path={'/categories/create'} element={<CreateCategory />} role={'ADMIN'}/>
                <RouteWrapper path={'/categories/:id'} element={<EditCategory />} role={'ADMIN'}/>
                <Routes>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/404'} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
