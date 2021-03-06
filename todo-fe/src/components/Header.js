import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { useNavigationStyles } from "../style/navigation";
import { useContext } from "react";
import { ThemeContext, UserContext } from "../contexts/contexts";

const Header = () => {
    const classes = useNavigationStyles(useContext(ThemeContext));

    const [ user, setUser ] = useContext(UserContext);

    const handleLogOut = () => {
        setUser(undefined);
    }

    return (
        <AppBar position={'static'}>
            <Toolbar className={classes.root}>
                <Typography className={classes.logo} variant='body1'>
                    My TODOs
                </Typography>
                <div>
                    <IconButton className={classes.navigationButtons}>
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton className={classes.navigationButtons} onClick={() => handleLogOut()}>
                        <PowerSettingsNewRoundedIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;