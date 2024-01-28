import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setResetMessage } from "../../redux/reducer/reducer";
import { useNavigate } from "react-router-dom";
import TopSnackbar from "../../utilities/SnackBar";
import ThemeContext from "../../context/themeContext/ThemeContext ";

function EditProfile() {
  const statusMessage = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeContext = useContext(ThemeContext);
  const {theme, themeStyles} = themeContext;
  const { background, componentColor,logoColor,buttonColor,textColor} = themeStyles[theme];

  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const email = data.get("email");
    const about = data.get("about");

    try {
      const token = localStorage.getItem('token');
      const prevEmail = localStorage.getItem('email');
      const response = await axios.put("http://localhost:8000/api/profile",
      {
        prevEmail: prevEmail,
        name: name,
        email: email,
        about: about
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('updated profile: ', response);
      localStorage.setItem('email', email);
      dispatch(setResetMessage("Profile updated!"));
      setStatus(true);
      navigate('/profile');
    }catch (error) {
      console.error("Error fetching during signin:", error);
    }
  };

  return (
    <>
        {status && <TopSnackbar value = {'green'}/> }

      <div>
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "5%",
            color: textColor
          }}

        >
          <Avatar variant="h5"  sx={{ width: 100, height: 100, bgcolor: buttonColor, fontSize: "2rem" }} />
          <br />
          <Typography component="h1" variant="h5">
            {" "}
            Edit Profile
          </Typography>
          <br />
          <br />
          <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
            <TextField
              margin="normal"
              required
              type="text"
              id="name"
              name="name"
              label="Name"
              variant="standard"
              fullWidth
              InputLabelProps={{ style: { color: 'grey' } }} 
              InputProps={{ style: { color: textColor } }} 
            />
            <TextField
              margin="normal"
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              InputLabelProps={{ style: { color: 'grey' } }} 
              InputProps={{ style: { color: textColor } }} 
            />
            <TextField
              margin="normal"
              required
              type="text"
              id="about"
              name="about"
              label="About me"
              variant="standard"
              fullWidth
              InputLabelProps={{ style: { color: 'grey' } }} 
              InputProps={{ style: { color: textColor } }} 
            />

          {/* <Button type="submit" variant="contained" sx={{ mt: 6, mb: 2, color: buttonColor }}>
            Submit
          </Button> */}
          <Button variant="outlined" sx={{mt: 8, mb: 2,color: buttonColor}}>
             Submit
          </Button>
          </Box>
        </Container>
      </div>

      {/* <form onSubmit={handleSubmit} style={{marginTop: '10%'}} >
        <input
          type="text"
          name="name"
          required='true'
          value={formData.name}
          onChange={handleChange}
          placeholder="enter your name"
          place
          style={{ width: '300px', height: '40px', margin: '5px', borderRadius: '10px', textAlign: 'center' }}

        />
        <br/>
        <input 
        type="email"
        name="email"
        required="true"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter your email"
        style={{ width: '300px', height: '40px', margin: '5px', borderRadius: '10px', textAlign: 'center' }}
        />
        <br/>
         <button type="submit" style={{ backgroundColor: '#0066CC',color:'white', fontWeight: 'bold',fontFamily:'monospace', width: '100px', height: '40px', margin: '10px',borderRadius: '10px', }}>
          Submit
        </button>

      </form> */}
    </>
  );
}

export default EditProfile;
