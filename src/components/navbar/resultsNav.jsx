import React from "react";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {DefaultButton, DefaultIconButton} from '../muiStyledComponents/buttons'


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