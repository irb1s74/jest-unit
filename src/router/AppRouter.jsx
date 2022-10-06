import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import UserDetailsPage from "../pages/users/UserDetailsPage";
import Users from "../pages/users/Users";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/user/:id" element={<UserDetailsPage/>}/>
            <Route path="/user" element={<Users/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;
