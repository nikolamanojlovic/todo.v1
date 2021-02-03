import { Button, ButtonGroup, FormControl, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

export default function AuthenticationForm(classes) {

  const [login, setLogin] = useState(true);

  return (
    <div>
      <ButtonGroup size='small'>
        <Button color='primary' variant='outlined' disabled={login} onClick={(e) => { setLogin(!login) }}>Log In</Button>
        <Button color='primary' variant='outlined' disabled={!login} onClick={(e) => { setLogin(!login) }}>Register</Button>
      </ButtonGroup>
      {login ? <LogInForm /> : <SignInForm />}
    </div>

  );
}

function LogInForm() {
  return (
    <FormControl margin='normal'>
      <TextField id='email' label='E-mail' />
      <TextField id='password' label='Password' />
      <Button color='primary' variant='outlined'>Log In</Button>
    </FormControl>
  );
}

function SignInForm() {
  return (
    <FormControl>
      <TextField id='firstName' label='First name' />
      <TextField id='lastName' label='Last name' />
      <TextField id='email' label='E-mail' />
      <TextField id='password' label='Password' />
      <TextField id='confirmPassword' label='Confirm password' />
      <Button color='primary' variant='outlined'>Register</Button>
    </FormControl>
  );
}