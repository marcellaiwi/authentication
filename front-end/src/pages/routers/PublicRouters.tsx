import React from "react";
import {Navigate, Outlet} from "react-router-dom";

type Props = {
    isLoggin : boolean;
};

//nama navigate to harus sama dengan path yang ada di index
const PublicRouters = ({isLoggin}: Props) => {
    //bacanya adalah jika sudah login, maka masuk ke home, jika belum login maka masuk ke outlet
    return isLoggin ? <Navigate to="/home" replace /> : <Outlet />;
};
export default PublicRouters;