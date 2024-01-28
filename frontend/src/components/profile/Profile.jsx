import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Avatar } from '@mui/material';
import ThemeContext from "../../context/themeContext/ThemeContext ";

function Profile() {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState();
  const [profileEmail, setProfileEmail] = useState();
  const [profileAbout, setProfileAbout] = useState();

  const themeContext = useContext(ThemeContext);
  const {theme, themeStyles} = themeContext;
  const { background, componentColor,logoColor,buttonColor,textColor} = themeStyles[theme];

  useEffect(()=>{
    const fetchUserData = async()=>{
      try {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const response = await axios.post(
          "http://localhost:8000/api/profile",
          {
            email: email,
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        console.log("profile data: ", response.data.user.name);
        setProfileName(response.data.user.name);
        setProfileEmail(response.data.user.email);
        setProfileAbout(response.data.user.about);


      }catch (error) {
        console.error("Error fetching during profile data:", error);
      }
    }
    fetchUserData();
  },[])

  const handleEditProfile=()=>{
    navigate('/editProfile');
  }
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
    <div  style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '10%',}}>
      <Button variant="outlined" style={{color: buttonColor}} onClick={handleEditProfile} >
        Edit Profile
      </Button>
    </div>
    <div className='container' style={{backgroundColor: componentColor, color: textColor,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', width: '100%', maxWidth: '700px', height: '500px', maxHeight: '800px', margin: 'auto', marginTop: '50px', borderRadius: '15px', display: 'flex',flexDirection:'column', alignItems: 'center', paddingTop: '40px'}}>
    <Avatar variant="h6" sx={{ width: 100, height: 100, bgcolor: buttonColor, fontSize: "2rem" }} />
          <br />
          <hr size="2" width="70%" color="grey"></hr>
    <h2>{profileName}</h2>
    <p>{profileEmail}</p>
    <p>{profileAbout}</p>

    </div>
    </div>
  )
}

export default Profile