import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from './style/theme';
import Header from './components/Navigation';
import { useState } from 'react';

function App() {

  const [isLightTheme] = useState(true);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header isLightTheme={isLightTheme} theme={theme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
