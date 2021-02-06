import { makeStyles } from "@material-ui/core";

export const useHomePageStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        display: '-ms-flexbox',
        display: '-webkit-flex',
        flexFlow: 'column'
    },
    space: {
        flexGrow: 1,
        display: 'flex',
        display: '-ms-flexbox',
        display: '-webkit-flex',

        alignItems: 'center',
        justifyContent: 'center',
    }
}));