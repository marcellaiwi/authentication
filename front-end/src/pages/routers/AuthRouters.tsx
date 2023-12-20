//AuthRoutes ini merupakan modul yang di autentication kan, sedangkan publicRoutes tidak

import React from "react";
import {Navigate, Outlet} from "react-router-dom";

type Props = {
    isLoggin : boolean;
};

//nama navigate to harus sama dengan path yang ada di index
const AuthRouters = ({isLoggin}: Props) => {
    //bacanya adalah jika sudah login, maka masuk ke outlet, jika belum login maka masuk ke page login
    return isLoggin ? <Outlet /> : <Navigate to="/auth" replace />;
}; 
export default AuthRouters;