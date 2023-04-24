import React from "react";
import "./shop.css";
import {TextField, InputAdornment, IconButton, Stack, Grid} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

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
                <TextField className="name-input" label="Shop Name" defaultValue={props.data.name}></TextField>

                {/* Products Count */}
                <TextField
                    required
                    id="products-count"
                    label="Products count"
                    defaultValue={props.data.products_count}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Commission */}
                <TextField
                    required
                    id="commission"
                    label="Commission"
                    defaultValue={props.data.commission}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>

                {/* Discount */}
                <TextField
                    id="discount"
                    label="Discount"
                    defaultValue={props.data.discount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Profit per sale */}
                <TextField
                    id="min-profit-per-sale"
                    label="Min Profit per sale"
                    defaultValue={props.data.min_profit}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>

                {/* Profit Limit */}
                <TextField
                    id="profit-limit"
                    label="Profit limit"
                    defaultValue={props.data.profit_limit}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Product Price */}
                <TextField
                    required
                    id="min-product-price"
                    label="Min Product Price"
                    defaultValue={props.data.min_price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>

                {/* Max Product Price */}
                <TextField
                    required
                    id="max-product-price"
                    label="Max Product Price"
                    defaultValue={props.data.max_price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                    }}
                ></TextField>
            </Stack>

            {/* Delete Button */}
            <IconButton variant="outlined" color="error" sx={{fontSize: "40px"}}>
                <DeleteForeverRoundedIcon fontSize="inherit"/>
            </IconButton>
        </Stack>
    );
};
