import { Button, ButtonGroup, FormControl, TextField, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { ThemeContext, UserContext } from "../contexts/contexts";
import { useFormStyles } from "../style/forms";
import { logIn, register } from "../services/authenticationService";

const AuthenticationForm = (classes) => {

  const [login, setLogin] = useState(true);
  const [error, setError] = useState(undefined);

  const [user, setUser] = useContext(UserContext);

  const formStyle = useFormStyles(useContext(ThemeContext));

  const LogInForm = () => {
    const [logInFormData, setLogInFormData] = useState({ email: '', password: '' });

    const handleLogIn = (e, data) => {
      e.preventDefault();
      logIn(data.email, data.password).then(response => {
        setUser(response.data);
      }).catch(error => {
        setError(error.response.data);
      })
    };

    return (
      <form id='login-form' onSubmit={(e) => handleLogIn(e, logInFormData)}>
        <FormControl margin='normal'>
          <TextField className={formStyle.input} id='email' label='E-mail' value={logInFormData.email} onChange={(e) => setLogInFormData({ ...logInFormData, email: e.target.value })} required />
          <TextField className={formStyle.input} id='password' label='Password' value={logInFormData.password} onChange={(e) => setLogInFormData({ ...logInFormData, password: e.target.value })} type='password' required />
          <Button type='submit' className={formStyle.button} color='primary' variant='outlined' >Log In</Button>
        </FormControl>
      </form>
    );
  }

  const RegisterForm = () => {
    const [registerFormData, setRegisterFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleRegister = (e, data) => {
      e.preventDefault();
      register(data.firstName, data.lastName, data.email, data.password).then(response => {
        setUser(response.data);
      }).catch(error => {
        setError(error.response.data);
      });
    };

    return (
      <form id='register-form ' onSubmit={(e) => handleRegister(e, registerFormData)}>
        <FormControl margin='normal'>
          <TextField className={formStyle.input} id='firstName' label='First name' onChange={(e) => setRegisterFormData({ ...registerFormData, firstName: e.target.value })} required />
          <TextField className={formStyle.input} id='lastName' label='Last name' onChange={(e) => setRegisterFormData({ ...registerFormData, lastName: e.target.value })} required />
          <TextField className={formStyle.input} id='email' label='E-mail' onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.target.value })} required />
          <TextField className={formStyle.input} id='password' label='Password' onChange={(e) => setRegisterFormData({ ...registerFormData, password: e.target.value })} type='password' required />
          <Button className={formStyle.button} type='submit' color='primary' variant='outlined'>Register</Button>
        </FormControl>
      </form>
    );
  }

  const handleFormChange = (showLogin) => {
    setError(undefined);
    setLogin(showLogin);
  }

  return (
    <div>
      <ButtonGroup className={classes.loginRegisterSwitch} size='small'>
        <Button color='primary' variant='contained' disabled={login} onClick={() => { handleFormChange(!login) }}>Log In</Button>
        <Button color='primary' variant='contained' disabled={!login} onClick={() => { handleFormChange(!login) }}>Register</Button>
      </ButtonGroup>
      {login ? <LogInForm /> : <RegisterForm />}
      <div>
        {error ? <Typography className={formStyle.error}>{error}</Typography> : <span />}
      </div>
    </div>

  );
}

export default AuthenticationForm;