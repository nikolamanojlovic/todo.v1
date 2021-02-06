import { makeStyles } from "@material-ui/core";

export const useSpaceStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: '800px',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '2px 2px 15px rgba(20,20,20,0.1)',
    },
    lists: {
        float: 'left',
        minHeight: '100%',
        width: '30%'
    },
    headline: {
        marginLeft: '1em',
        marginTop: '0.5em'
    },
    editor: {
        float: 'left',
        minHeight: '100%',
        width: '70%',
        backgroundColor: theme.palette.secondary.main
    }
}));