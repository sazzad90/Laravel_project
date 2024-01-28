import React from "react";
import { useState } from "react";
import ThemeContext from "./ThemeContext ";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")??'light');

    const toggleTheme = () => {

      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      localStorage.setItem('theme',theme=== 'light' ? 'dark' : 'light');    

    };
  
    const themeStyles = {
      light: {
        background: '#ECECEC',
        navColor: '#0066CC',
        logoColor: '#00CC00',
        buttonColor: '#0066CC',
        textColor: '#000',
        componentColor: '#fff',
        shadowColor: '#fff'
      },
      dark: {
        background: '#000000',
        navColor: '#303030',
        logoColor: '#FF8000',
        buttonColor: '#FF8000',
        textColor: '#fff',
        componentColor: '#303030',
      },
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  export default ThemeProvider;
  