import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Header from './components/Navigation';
import { useContext, useState } from 'react';
import AuthenticationPage from "./pages/AuthenticationPage";
import { ThemeContext, UserContext } from './contexts/contexts';

function App() {

  const theme = useContext(ThemeContext);
  const [user, setUser] = useState(undefined);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        {console.log(user)}
        <ThemeContext.Provider value={theme}>
          <ThemeProvider theme={theme}>
            {user ? <Header/> : <AuthenticationPage />}
          </ThemeProvider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
