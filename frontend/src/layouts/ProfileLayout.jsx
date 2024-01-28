import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import ThemeContext from '../context/themeContext/ThemeContext ';
import NavigationBar from '../components/dashboard/ResponsiveNavbar';
import { useNavigate } from "react-router-dom";
import { setLoginStatus } from "../redux/reducer/reducer";
import { useSelector, useDispatch } from "react-redux";

function ProfileLayout() {
    const themeContext = React.useContext(ThemeContext);
    const {theme, themeStyles} = themeContext;
    const { background, navColor,logoColor,buttonColor,textColor} = themeStyles[theme];

    const navigate = useNavigate();  
    const dispatch = useDispatch();
    const loggedInStatus = useSelector((state) => state.auth.isLoggedIn);

    useEffect(()=>{
      const token = localStorage.getItem('token');

      if(token && token !== 'undefined'){
      }else{
        dispatch(setLoginStatus(false));
        console.log('logout status: ', loggedInStatus);
        navigate("/signin");
      }
  },[loggedInStatus])

  return (
    <div className={'App'} style={{ height: '100vh',backgroundColor: background}} >
    <br/>
    <NavigationBar/>
    <br/>       
     <Outlet />
    </div>
  )
}

export default ProfileLayout