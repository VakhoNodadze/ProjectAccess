
import React, { useState, useEffect } from 'react';
import GlobalStyle from './styled/global';
import { ThemeProvider } from 'styled-components';
import { themes, light, dark } from './styled/themes';
import Flex from './components/primitives/Flex';
import Main from './pages/Main';

const App = () => {

  const [theme, setTheme] = useState(light);
  const [background, setBackground] = useState(light.color.secondaryBG);

  useEffect(() => {
    setBackground(theme.color.secondaryBG);
  }, [theme]);

  const handleThemeChange = () => {
    if(theme === light) {setTheme(dark);}
    if(theme === dark) {setTheme(light);}
  };

  return (
    <ThemeProvider theme={themes[theme.type]}>
      <Flex direction="column" full height="100vh" style={{backgroundColor: background}}>
        <GlobalStyle />
        <Main />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
