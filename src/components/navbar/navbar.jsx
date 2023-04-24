import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
import {AppBar, Button, IconButton, Stack, Container, Toolbar, Grid} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const Navbar = () => {
    return (
        <AppBar className="navbar" position="static" sx={{bgcolor: "#F9F9F9"}}>
            <Stack direction="row"
                   justifyContent="space-evenly"
                   alignItems="center">

            {/*<Grid container spacing={2}*/}
            {/*      direction="column"*/}
            {/*      // justifyContent="space-evenly"*/}
            {/*      alignItems="center"*/}
            {/*>*/}

            {/*<Grid item xs={2} >*/}
            <Button> Import </Button>

            {/*<Button> Export </Button>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={6} container*/}
            {/*      direction="row"*/}
            {/*      alignItems="flex-end"*/}
            {/*      justify="center"*/}
            {/*>*/}
            <Button> ADD SHOP </Button>

            {/*<IconButton component={Link} to="/" sx={{fontSize: "40px", color: "#333333"}}>*/}
            {/*    <HomeRoundedIcon fontSize='inherit' color='inherit'/>*/}
            {/*</IconButton>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={2}>*/}
            <Button component={Link} to="/results">
                Results
            </Button>
            {/*</Grid>*/}

            {/*<Grid item xs={1}>*/}
            <IconButton sx={{fontSize: "40px", color: "#333333"}}>
                <PlayArrowRoundedIcon fontSize='inherit' color='inherit'/>
            </IconButton>
            {/*</Grid>*/}
            {/*</Grid>*/}

            </Stack>
        </AppBar>
    );
};
