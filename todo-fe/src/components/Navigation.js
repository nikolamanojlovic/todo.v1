import { AppBar, IconButton, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { useNavigationStyles } from "../style/navigation";
import { useContext } from "react";
import { ThemeContext } from "../contexts/contexts";

export default function Header(theme) {
    const classes = useNavigationStyles(useContext(ThemeContext));

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography className={classes.logo} variant='body1'>
                    My TODOs
                </Typography>
                <div className={classes.search}>
                    <SearchRoundedIcon className={classes.searchIcon} />
                    <InputBase className={classes.searchInput} placeholder='Search' />
                </div>
                <div>
                    <IconButton className={classes.navigationButtons}>
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton className={classes.navigationButtons}>
                        <PowerSettingsNewRoundedIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}