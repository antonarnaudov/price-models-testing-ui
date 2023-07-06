import "./navbar.css";
import React from "react";
import {Link} from "react-router-dom";

import {Stack, Typography} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import {DefaultButton, LargeButton, DisabledButton, DefaultIconButton} from '../design/Button'

import {getGlobalStatistics} from "../../data/local-storage";
import {generateProductsAndStatistics} from "../../data/generate-products-and-statistics";


export const AddShopsNav = ({shops, onAddShop, setShouldRedirect}) => {
    const globalStatistics = getGlobalStatistics()

    function startGeneration() {
        generateProductsAndStatistics()
        setShouldRedirect(true)
    }

    return (
        <Stack direction="row" justifyContent="space-around">
            <DefaultButton> Import </DefaultButton>


            <LargeButton
                sx={{marginLeft: '5rem'}}
                onClick={onAddShop}
            >
                <Typography fontWeight="bold">ADD SHOP</Typography>
            </LargeButton>


            <Stack direction="row">

                <DefaultButton
                    to="/results"
                    component={Link}
                    sx={{marginRight: '5rem'}}
                    disabled={Object.keys(globalStatistics).length === 0}
                > Results </DefaultButton>

                <DefaultIconButton
                    size='large'
                    disabled={Array.isArray(shops) && shops.length === 0}
                    onClick={startGeneration}
                >
                    <PlayArrowRoundedIcon color='inherit' sx={{fontSize: '3.5rem'}}/>
                </DefaultIconButton>

            </Stack>
        </Stack>
    )
}