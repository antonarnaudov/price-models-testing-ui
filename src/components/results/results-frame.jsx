import React from "react";
// import { ShopContext } from "../../context/shop-context";
import {Link, useNavigate} from "react-router-dom";

import "./result.css";
import {IconButton, InputAdornment, Stack} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import data from "../../data/mock-data.json";
import {Shop} from "../shop/shop";
import {DefaultTextField} from "../design/textFeld";

export const ResultsFrame = () => {
    return (
        <div className="results-frame">
            <Stack
                id='global-statistics'
                className="results"
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                <Stack direction="column" spacing={5}>
                    {/* Shop Name */}
                    <DefaultTextField
                        disabled
                        className="name-input"
                        defaultValue='Global Statistics'
                    ></DefaultTextField>

                    {/* Products Count */}
                    <DefaultTextField
                        required
                        id="products-count"
                        label="Products count"
                        defaultValue=''
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            inputMode: 'numeric',
                            pattern: '[0-9]*'
                        }}
                    ></DefaultTextField>
                </Stack>
            </Stack>
            <div>

            </div>
            {/*{data.shops.map((shop) => (*/}
            {/*    <Shop key={shop.id} data={shop}/>*/}
            {/*))}*/}
        </div>
    );
};
