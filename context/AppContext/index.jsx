import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from '../../styles/Themes';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const contextValue = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme ? Dark : Light}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
