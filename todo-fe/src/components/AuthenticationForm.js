import { FormControl, InputLabel, Paper, TextField } from "@material-ui/core";
import { useState } from "react";

export default function AuthenticationForm(classes) {

  const [login, setLogin] = useState(true);

  return (
    <Paper className={classes.authenticationForm}>
      { login ? <LogInForm /> : <SignInForm />}
    </Paper>
  );
}

function LogInForm() {
  return (
    <FormControl>
      <TextField id='email' label='E-mail'/>
      <TextField id='password' label='Password'/>
    </FormControl>
  );
}

function SignInForm() {
  return (
    <FormControl></FormControl>
  );
}