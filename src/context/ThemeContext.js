import React, {createContext, useState} from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const primaryColor = isDarkMode ? '#FFF' : '#3F3F3F';
  const primaryReverseColor = isDarkMode ? '#3F3F3F' : '#FFF';
  const fixedGrayColor = '#A7A7A7';
  const backgroundColor = isDarkMode ? '#343434' : '#F5F5F5';
  const backgroundReverseColor = isDarkMode ? '#F5F5F5' : '#343434';

  // Define the context value
  const themeContextValue = {
    isDarkMode,
    toggleDarkMode,
    primaryColor,
    fixedGrayColor,
    primaryReverseColor,
    backgroundColor,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
