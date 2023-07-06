import React from "react";
import {Link} from "react-router-dom";

import {Stack} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import {DefaultButton, DefaultIconButton} from '../design/Button'

export const ResultsNav = () => {
    return (
        <Stack direction="row" justifyContent="start">
            <DefaultIconButton component={Link} to="/" sx={{marginLeft: '10%'}}>
                <HomeRoundedIcon color='inherit' sx={{fontSize: '2.5rem'}}/>
            </DefaultIconButton>

            <DefaultButton sx={{marginLeft: '5%'}}> Export </DefaultButton>
        </Stack>
    )
}