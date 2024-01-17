import React from 'react'
import NavigationBar from './ResponsiveNavbar'
import { useState } from 'react';
import TopSnackbar from '../utilities/SnackBar';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  console.log(location)
  // const [status, setStatus] = useState(true);

  // setTimeout(() => {
  //   setStatus(false);
  // }, 2000);
  return (
    <div>
      <NavigationBar/>
      <TopSnackbar message = {location.state.reduxMessage}/>
    
    </div>
  )
}

export default Home