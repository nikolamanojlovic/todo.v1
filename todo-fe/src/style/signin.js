import { makeStyles } from "@material-ui/core";

export const useSingInStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
        minHeight: '100%',
        
        display: 'flex',
        display: '-ms-flexbox',
        display: '-webkit-flex',

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main
    },
    content: {
        textAlign: 'center',
    },
    logo: {
        fontFamily: "'Fredoka One', cursive",
        fontWeight: 'bold',
        marginBottom: '0.5em',
        color: theme.palette.secondary.main
    },
    authenticationForm: {
        height: '400px',
        width: '300px',
        padding: '3em'
    }
}));