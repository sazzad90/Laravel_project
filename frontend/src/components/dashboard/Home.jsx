import React from 'react'
import NavigationBar from './ResponsiveNavbar'
import { useState } from 'react';
import TopSnackbar from '../utilities/SnackBar';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <NavigationBar/>
      <TopSnackbar message = {location.state.message}/>
    
    </div>
  )
}

export default Home