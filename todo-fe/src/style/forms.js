import { makeStyles } from "@material-ui/core";

export const useFormStyles = makeStyles((theme) => ({
    root: {

    },
    input: {
        margin: '0.5em'
    },
    button: {
        marginTop: '2em'
    },
    error: {
        marginTop: '1em',
        color: theme.palette.error.main,
        fontWeight: 'bold'
    }
}));