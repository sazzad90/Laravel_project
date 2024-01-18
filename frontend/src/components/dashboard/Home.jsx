import React, { useEffect } from 'react'
import NavigationBar from './ResponsiveNavbar'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import TopSnackbar from '../utilities/SnackBar';
import { useLocation } from 'react-router-dom';
import UserTable from './UserTable';
import axios from 'axios';

function Home() {
  const [userTable, setUserTable] = useState(null);
  const message = useSelector((state) => state.auth.value);

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
    <div>
      <NavigationBar/>
      {message &&  <TopSnackbar message ={message}/> }
      {userTable &&  <UserTable data = {userTable}/> }

      
    </div>
  )
}

export default Home