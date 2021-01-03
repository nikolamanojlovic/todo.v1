import { AppBar, IconButton, MenuList, MenuItem, Paper, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { useNavigationStyles } from "../style/navigation";

export default function Header(isLightTheme, theme) {
    const classes = useNavigationStyles(theme);

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
                        {isLightTheme ? <Brightness3RoundedIcon /> : <Brightness7RoundedIcon />}
                    </IconButton>
                    <IconButton className={classes.navigationButtons}>
                        <PowerSettingsNewRoundedIcon/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}