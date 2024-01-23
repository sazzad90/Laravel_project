import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();

  const currentUserLoggedInStatus = useSelector(
    (state) => state.auth.isLoggedIn
  );
  const dispatch = useDispatch();

  useEffect(()=>{
      const token = localStorage.getItem('token');
      if(token){
        navigate("/home")
      }
  },[currentUserLoggedInStatus]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
