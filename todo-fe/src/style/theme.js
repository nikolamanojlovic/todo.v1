import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
    shadows: ['none'],
    palette: {
        primary: {
            main: '#049DD9'
        },
        secondary: {
            main: '#F2F2F2'
        }, // change
        warrning: {
            main: '#F5CF66'
        },
        error: {
            main: '#F23B41'
        },
        info: {
            main: '#F2F2F2'
        }, // change
        success: {
            main: '#53C289'
        }
    }
});

export const darkTheme = createMuiTheme({});