import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function HomeLayout() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
  
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/signin');
        }
    },[])
  return (
    <div>
      <Outlet />
    </div>
  );
}
