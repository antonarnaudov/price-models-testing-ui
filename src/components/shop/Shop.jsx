import "./shop.css";
import React, {useState} from "react";

import {InputAdornment, IconButton, Stack} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import {DefaultTextField} from "../design/TextFeld";

import {toFloat, toInt} from "../../data/helpers";
import {updateShopField} from '../../data/crud-shop'
import {getAllProductsCount} from "../../data/local-storage";

export const Shop = (props) => {

    const [store, setStore] = useState({...props.data});
    const onChangeNumberField = (event, typeFn, key) => {
        let value = typeFn(event.target.value);

        updateShopField(props.data.id, key, value)
        if (key === 'products_count') {
            const limit = 20000
            const products = Number(getAllProductsCount())
            if (products > limit) {
                value = limit - (products - Number(value))
                updateShopField(props.data.id, key, value)
                alert(`Products should be no more than ${value} as the maximum capacity for products is ${limit}`)
            }
        }
        setStore({...store, [key]: value})
    }

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
                    onChange={(e) => updateShopField(props.data.id, 'name', e.target.value)}
                ></DefaultTextField>

                {/* Products Count */}
                <DefaultTextField
                    required
                    id="products-count"
                    label="Products count"
                    value={store.products_count}
                    onInput={(e) => onChangeNumberField(e, toInt, 'products_count')}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Commission */}
                <DefaultTextField
                    required
                    id="commission"
                    label="Commission"
                    value={store.commission}
                    InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'commission')}
                ></DefaultTextField>

                {/* Discount */}
                <DefaultTextField
                    id="discount"
                    label="Discount"
                    value={store.discount}
                    InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'discount')}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Profit per sale */}
                <DefaultTextField
                    id="min-profit-per-sale"
                    label="Min Profit per sale"
                    value={store.min_profit}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'min_profit')}
                ></DefaultTextField>

                {/* Profit Limit */}
                <DefaultTextField
                    id="profit-limit"
                    label="Profit limit"
                    value={store.profit_limit}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'profit_limit')}
                ></DefaultTextField>
            </Stack>


            <Stack direction="column" spacing={5}>
                {/* Min Product Price */}
                <DefaultTextField
                    required
                    id="min-product-price"
                    label="Min Product Price"
                    value={store.min_price}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'min_price')}
                ></DefaultTextField>

                {/* Max Product Price */}
                <DefaultTextField
                    required
                    id="max-product-price"
                    label="Max Product Price"
                    value={store.max_price}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    onInput={(e) => onChangeNumberField(e, toFloat, 'max_price')}
                ></DefaultTextField>
            </Stack>

            {/* Delete Button */}
            <IconButton
                variant="outlined"
                color="error"
                sx={{fontSize: "40px"}}
                onClick={() => props.onDeleteShop(props.data.id)}
            >
                <DeleteForeverRoundedIcon fontSize="inherit"/>
            </IconButton>
        </Stack>
    );
};
