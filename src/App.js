
import React, { useState, useEffect, createContext } from 'react';
import GlobalStyle from './styled/global';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { themes, light, dark } from './styled/themes';
import Flex from './components/primitives/Flex';
import Main from './pages/Main';
import EditUser from './pages/EditUser';

export const StateContext = createContext({user: {}});

const App = () => {

  const [theme, setTheme] = useState(light);
  const [background, setBackground] = useState(light.color.backgroundPr);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setBackground(theme.color.backgroundPr);
  }, [theme]);

  const handleThemeChange = () => {
    if(theme.type === light.type) {setTheme(dark);}
    if(theme.type === dark.type) {setTheme(light);}
  };

  return (
    <ThemeProvider theme={themes[theme.type]}>
      <StateContext.Provider value={{user, setUser, onThemeChange: handleThemeChange, isDark: theme.type}}>
        <Flex direction="column" full height="100vh" style={{backgroundColor: background}}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={() => <Main/>} exact />
              <Route path="/edit" component={() => <EditUser />} exact />
            </Switch>
          </BrowserRouter>
        </Flex>
      </StateContext.Provider>
    </ThemeProvider>
  );
};

export default App;
