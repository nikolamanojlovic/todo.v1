import { Typography, Paper, Button, IconButton } from "@material-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../contexts/contexts";
import { useSpaceStyles } from "../style/space";
import AddIcon from '@material-ui/icons/Add';

const Space = () => {
    const classes = useSpaceStyles(useContext(ThemeContext));

    return (
        <Paper className={classes.root}>
            <div className={classes.lists}>
                <Button variant='contained' color='secondary' startIcon={<AddIcon />}>Create list</Button>
            </div>
            <div className={classes.editor}>
                <Typography className={classes.headline} variant='h4'>Eroreoeoe</Typography>
            </div>
        </Paper>
    );
}

export default Space;