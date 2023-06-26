import "./navbar.css";
import React from "react";
import {Link} from "react-router-dom";
import {Stack, Typography} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import {DefaultButton, LargeButton, DisabledButton, DefaultIconButton} from '../design/buttons'


export const AddShopsNav = () => {
    return (
        <Stack direction="row" justifyContent="space-around">
            <DefaultButton> Import </DefaultButton>


            <LargeButton sx={{marginLeft: '5rem'}}>
                <Typography fontWeight="bold">ADD SHOP</Typography>
            </LargeButton>


            <Stack direction="row">

                <DisabledButton component={Link} to="/results" sx={{marginRight: '5rem'}}> Results </DisabledButton>

                <DefaultIconButton size='large'>
                    <PlayArrowRoundedIcon color='inherit' sx={{fontSize: '3.5rem'}}/>
                </DefaultIconButton>

            </Stack>
        </Stack>
    )
}