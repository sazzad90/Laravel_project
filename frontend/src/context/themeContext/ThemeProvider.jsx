import React from "react";
import { useState } from "react";
import ThemeContext from "./ThemeContext ";

const ThemeProvider = ({ children }) => {
    // const prevTheme = localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light';
    const [theme, setTheme] = useState(localStorage.getItem("theme")??'light');
    console.log('after reload: ', theme);

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
      },
      dark: {
        background: '#000000',
        navColor: '#302A28',
        logoColor: '#FF8000',
        buttonColor: '#CA2F00',
        textColor: '#fff',
      },
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  export default ThemeProvider;
  