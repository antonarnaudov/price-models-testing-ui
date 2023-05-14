import React from "react";
import "./shop.css";
import {InputAdornment, IconButton, Stack, Grid} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {DefaultTextField} from "../design/textFeld";

export const Shop = (props) => {
    return (
        <Stack
            id={props.data.id}
            className="shop"
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
        >

            <Stack direction="column" spacing={5}>
                {/* Shop Name */}
                <DefaultTextField
                    className="name-input"
                    label="Shop Name"
                    defaultValue={props.data.name}
                ></DefaultTextField>

                {/* Products Count */}
                <DefaultTextField
                    required
                    id="products-count"
                    label="Products count"
                    defaultValue={props.data.products_count}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Commission */}
                <DefaultTextField
                    required
                    id="commission"
                    label="Commission"
                    defaultValue={props.data.commission}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>

                {/* Discount */}
                <DefaultTextField
                    id="discount"
                    label="Discount"
                    defaultValue={props.data.discount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Profit per sale */}
                <DefaultTextField
                    id="min-profit-per-sale"
                    label="Min Profit per sale"
                    defaultValue={props.data.min_profit}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>

                {/* Profit Limit */}
                <DefaultTextField
                    id="profit-limit"
                    label="Profit limit"
                    defaultValue={props.data.profit_limit}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Product Price */}
                <DefaultTextField
                    required
                    id="min-product-price"
                    label="Min Product Price"
                    defaultValue={props.data.min_price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>

                {/* Max Product Price */}
                <DefaultTextField
                    required
                    id="max-product-price"
                    label="Max Product Price"
                    defaultValue={props.data.max_price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></DefaultTextField>
            </Stack>

            {/* Delete Button */}
            <IconButton variant="outlined" color="error" sx={{fontSize: "40px"}}>
                <DeleteForeverRoundedIcon fontSize="inherit"/>
            </IconButton>
        </Stack>
    );
};
