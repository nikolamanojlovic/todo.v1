import { Typography } from "@material-ui/core";
import AuthenticationForm from "../components/AuthenticationForm";
import { useSingInStyles } from "../style/signin";

export default function AuthenticationPage(isLightTheme, theme) {
    const classes = useSingInStyles(isLightTheme, theme);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.logo} variant='h2'>My TODOs</Typography>
                <AuthenticationForm classes={classes}></AuthenticationForm>
            </div>
        </div>
    );
}