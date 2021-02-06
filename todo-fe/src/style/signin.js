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
        textShadow: '2px 2px 10px rgba(20,20,20,0.2)',
        marginBottom: '0.5em',
        color: theme.palette.secondary.main,
        msUserSelect: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
    },
    authenticationForm: {
        height: '400px',
        width: '300px',
        padding: '3em',
        boxShadow: '2px 2px 10px rgba(20,20,20,0.2)'
    }
}));