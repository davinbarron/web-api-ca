import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemesContext = createContext();

// Reference for using Material UI Dark mode
// https://semaphoreci.com/blog/dark-mode-reactjs-material-ui#:~:text=Enabling%20Dark%20Mode%20using%20Material,when%20implementing%20the%20Dark%20mode.

const ThemeContextProvider = ({ children }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = useMemo(() => 
    createTheme({
      palette: {
        mode: toggleDarkMode ? 'dark' : 'light',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#131052',
        },
      },
    }), [toggleDarkMode]);

  return (
    <ThemesContext.Provider value={{ toggleDarkMode, toggleDarkTheme }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemeContextProvider;