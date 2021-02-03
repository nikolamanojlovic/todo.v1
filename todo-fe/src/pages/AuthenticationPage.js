import { Paper, Typography } from "@material-ui/core";
import { useContext } from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import { ThemeContext } from "../contexts/contexts";
import { useSingInStyles } from "../style/signin";

export default function AuthenticationPage() {
    const classes = useSingInStyles(useContext(ThemeContext));

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.logo} variant='h2'>My TODOs</Typography>
                <Paper className={classes.authenticationForm}>
                    <AuthenticationForm classes={classes}></AuthenticationForm>
                </Paper>
            </div>
        </div>
    );
}