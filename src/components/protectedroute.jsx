import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

const Protectedroute = ({isloggedin}) => {

        return isloggedin == true? < Outlet />:<Navigate to="/login" />

}

export default Protectedroute
