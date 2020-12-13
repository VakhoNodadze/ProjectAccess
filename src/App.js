
import React, { useState, useEffect } from 'react';
import GlobalStyle from './styled/global';
import { ThemeProvider } from 'styled-components';
import { themes, light, dark } from './styled/themes';
import Flex from './components/primitives/Flex';
import Main from './pages/Main';

const App = () => {

  const [theme, setTheme] = useState(light);
  const [background, setBackground] = useState(light.color.backgroundPr);

  useEffect(() => {
    setBackground(theme.color.backgroundPr);
  }, [theme]);

  const handleThemeChange = () => {
    if(theme.type === light.type) {setTheme(dark);}
    if(theme.type === dark.type) {setTheme(light);}
  };

  return (
    <ThemeProvider theme={themes[theme.type]}>
      <Flex direction="column" full height="100vh" style={{backgroundColor: background}}>
        <GlobalStyle />
        <Main onThemeChange={handleThemeChange} isDark={theme.type} />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
