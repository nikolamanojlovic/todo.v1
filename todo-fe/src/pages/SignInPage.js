import { Grid, Typography } from "@material-ui/core";
import SignIn from "../components/SignIn";
import { useSingInStyles } from "../style/signin";

export default function SignInPage(isLightTheme, theme) {
    const classes = useSingInStyles(isLightTheme, theme);

    return (
        <div className={classes.root}>
            <Grid container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <Grid item>
                    <Typography className={classes.logo} variant='h2'>My TODOs</Typography>
                </Grid>
                <Grid item>
                    <SignIn classes={classes}></SignIn>
                </Grid>
            </Grid>
        </div>
    );
}