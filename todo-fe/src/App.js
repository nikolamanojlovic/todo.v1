import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { useContext, useState } from 'react';
import AuthenticationPage from "./pages/AuthenticationPage";
import { ThemeContext, UserContext } from './contexts/contexts';
import HomePage from './pages/HomePage';

function App() {

  const theme = useContext(ThemeContext);
  const [user, setUser] = useState(undefined);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <ThemeContext.Provider value={theme}>
          <ThemeProvider theme={theme}>
            {user ? <HomePage/> : <AuthenticationPage />}
          </ThemeProvider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
