import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { setLoginStatus } from "../components/redux/reducer/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function HomeLayout() {
    const navigate = useNavigate();  
    const dispatch = useDispatch();
    const loggedInStatus = useSelector((state) => state.auth.isLoggedIn);
    const statusMessage = useSelector((state) => state.auth.value);
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
          dispatch(setLoginStatus(true));
        }
        else{
          dispatch(setLoginStatus(false));
          navigate("/signin");
        }
    },[loggedInStatus])
  return (
    <div>
      <Outlet />
    </div>
  );
}
