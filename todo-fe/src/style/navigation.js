import { makeStyles } from "@material-ui/core";

export const useNavigationStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '2px 2px 10px rgba(20,20,20,0.2)'
    },
    navigationButtons: {
        color: theme.palette.secondary.main
    },
    logo: {
        fontFamily: "'Fredoka One', cursive",
        fontWeight: 'bold'
    },
    search: {
        position: 'relative',
        margin: '0 auto',
        width: '20%',
        backgroundColor: theme.palette.secondary.main
    },
    searchIcon: {
        position: 'absolute',
        paddingLeft: '0.1em',
        justifyContent: 'center',
        height: '100%',
        color: theme.palette.primary.main
    },
    searchInput: {
        paddingLeft: '2em',
        height: '100%',
        width: '100%',
    }
}));