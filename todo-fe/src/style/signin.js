import { makeStyles } from "@material-ui/core";

export const useSingInStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
        minHeight: '100%',
        // backgroundImage: "url('https://www.cv-library.co.uk/career-advice/wp-content/uploads/2018/06/What-is-it-like-working-in-IT.jpg')",
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // filter: 'grayscale(100%) opacity(50%)',
        // overflow: 'hidden',
        // zIndex: '-10'
        backgroundColor: theme.palette.primary.main
    },
    logo: {
        fontFamily: "'Fredoka One', cursive",
        fontWeight: 'bold',
        color: theme.palette.secondary.main
    },
    signInForm: {
    }
}));