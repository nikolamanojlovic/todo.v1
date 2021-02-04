import { Button, ButtonGroup, FormControl, Paper, TextField, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/contexts";
import { useFormStyles } from "../style/forms";

export default function AuthenticationForm(classes) {

  const [login, setLogin] = useState(true);

  return (
    <div>
      <ButtonGroup className={classes.loginRegisterSwitch} size='small'>
        <Button color='primary' variant='contained' disabled={login} onClick={(e) => { setLogin(!login) }}>Log In</Button>
        <Button color='primary' variant='contained' disabled={!login} onClick={(e) => { setLogin(!login) }}>Register</Button>
      </ButtonGroup>
      {login ? <LogInForm /> : <RegisterForm />}
    </div>

  );
}

function LogInForm() {
  const classes = useFormStyles(useContext(ThemeContext));

  return (
    <FormControl margin='normal'>
      <TextField className={classes.input} id='email' label='E-mail' required/>
      <TextField className={classes.input} id='password' label='Password' required/>
      <Button className={classes.button} color='primary' variant='outlined'>Log In</Button>
    </FormControl>
  );
}

function RegisterForm() {
  const classes = useFormStyles(useContext(ThemeContext));

  return (
    <FormControl margin='normal'>
      <TextField className={classes.input} id='firstName' label='First name' required/>
      <TextField className={classes.input} id='lastName' label='Last name' required/>
      <TextField className={classes.input} id='email' label='E-mail' required/>
      <TextField className={classes.input} id='password' label='Password' required/>
      <Button className={classes.button} color='primary' variant='outlined'>Register</Button>
    </FormControl>
  );
}