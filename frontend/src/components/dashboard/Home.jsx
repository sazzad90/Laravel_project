import React, { useEffect } from 'react'
import NavigationBar from './ResponsiveNavbar'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import TopSnackbar from '../../utilities/SnackBar';
import UserTable from './UserTable';
import axios from 'axios';
import StoryLayout from './story/StoryLayout';
import ThemeContext from "../../context/themeContext/ThemeContext ";

function Home() {
  const [userTable, setUserTable] = useState(null);
  const statusMessage = useSelector((state) => state.auth.value);

  const themeContext = React.useContext(ThemeContext);
  const {theme, themeStyles} = themeContext;
  const { background, navColor,logoColor,buttonColor,textColor} = themeStyles[theme];

  useEffect(()=>{
    const loadUserData =async()=>{

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/user",{
          headers: {
            'Authorization': `Bearer ${token}`
          }});
      const userData = response.data;

      console.log('before loading: ', userData);

      setUserTable(userData.map(row => ({
        id:row.id,
        name: row.name,
        email: row.email
    })));
    console.log('after loading: ', userTable);

    } catch (error) {
      console.error("Error fetching during signin:", error);
    }};

  loadUserData();
  },[]);

  return (
    <div className={'App'} style={{ height: '100vh',backgroundColor: background}} >
    <br/>
    <NavigationBar/>
    <br/>
      <StoryLayout/>
      {statusMessage &&  <TopSnackbar value = {'green'}/> }
      {/* {userTable &&  <UserTable data = {userTable}/> } */}
    </div>

  )
}

export default Home