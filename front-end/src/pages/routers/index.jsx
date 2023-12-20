import React from "react";
import {Routes, Route} from "react-router-dom";
import PublicRouters from "./PublicRouters";
import AuthRouters from "./AuthRouters";
import Home from "../home";
import NotFound from "../404page";
import AuthForm from "../auth/authForm";

const Routing = () => {

    //membuat variabel token dengan nama item Authorization, token bisa bersifat null
    const token = localStorage.getItem("Authorization");

    //bacanya : jika token === null maka false : (other wise/jika tidak)maka true
    //code ini menampilkan output di localhost:5317/login, jika urlnya di localhost:5317/ maka langsung kembali ke sebelumnya atau ke public routes nya
    const isLoggin = token === null ? false : true; 
    // const isLoggin = token !== null ? false : true; //code ini menampilkan output di localhost:5317/home, jika urlnya ingin diubah ke login maka tidak bisa dan akan kembali ke /home

    return (
        <Routes>
            <Route path="/">
                {/* Public Route */}
                <Route element={<PublicRouters isLoggin={isLoggin}/>}>
                    <Route path="auth" element={<AuthForm/>}/>
                </Route>

                {/* Private Route */}
                <Route path="/" element={<AuthRouters isLoggin={isLoggin}/>}>
                    <Route path="home" element={<Home/>}/>
                </Route>
                
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;