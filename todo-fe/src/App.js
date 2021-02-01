import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from './style/theme';
import Header from './components/Navigation';
import { createContext, useContext } from 'react';
import AuthenticationPage from "./pages/AuthenticationPage";

const ThemeContext = createContext(lightTheme);
const UserContext = createContext(undefined);

function App() {

  const currentTheme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div className="App">
      <UserContext.Provider>
        <ThemeContext.Provider>
          <ThemeProvider theme={currentTheme}>
            {user ? <Header /> : <AuthenticationPage />}
          </ThemeProvider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
