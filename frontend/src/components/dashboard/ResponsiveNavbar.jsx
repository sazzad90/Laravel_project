import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { setLoginStatus } from "../../redux/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import ThemeMode from "../../utilities/ThemeMode";
import ThemeContext from "../../context/themeContext/ThemeContext ";
import { useState } from "react";
const pages = ["Home", "Podcast", "Blog"];

function NavigationBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const loggedInStatus = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const themeContext = React.useContext(ThemeContext);
  const { theme, toggleTheme, themeStyles } = themeContext;
  const { background, navColor, logoColor, buttonColor, textColor } =
    themeStyles[theme];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleLogout = async (event) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("theme");
      localStorage.removeItem("email");

      dispatch(setLoginStatus(false));
      console.log("status: ", loggedInStatus);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
    handleMenuClose();
  };

  const handleProfile = () => {
    navigate('/profile');
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: navColor, marginRight: "40px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="active"
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "semi-bold",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ThemeMode />
          {/* <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="log out" >
              <IconButton onClick={handleLogout} sx={{ p: 0}}>
                <Avatar variant="plain" style={{color: 'black', backgroundColor: logoColor }}/>
              </IconButton>
            </Tooltip>
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar
                variant="plain"
                style={{ color: "black", backgroundColor: logoColor }}
              />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleProfile} sx={{width: '80px'}}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
