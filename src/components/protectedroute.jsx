import React, { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { AppContextPipeline } from '../Context/AppContext';
const Protectedroute = () => {
const AppContext=useContext(AppContextPipeline);
const isloggedin=AppContext.isloggedin;
        return isloggedin == true? < Outlet />:<Navigate to="/login" />

}

export default Protectedroute
