import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { setLoginStatus, setLoadingStatus } from "../redux/reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import ThemeContext from '../context/themeContext/ThemeContext ';

export default function HomeLayout() {
    const navigate = useNavigate();  
    const dispatch = useDispatch();
    const loggedInStatus = useSelector((state) => state.auth.isLoggedIn);

    const themeContext = useContext(ThemeContext);
    const {theme, toggleTheme} = themeContext;

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token && token !== 'undefined'){

        }else{
          dispatch(setLoginStatus(false));
          navigate("/signin");
        }
        dispatch(setLoadingStatus(false));
    },[loggedInStatus])
  return (
    <div>
      <Outlet />
    </div>
  );
}
