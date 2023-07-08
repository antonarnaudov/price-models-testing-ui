import React from "react";

import {Stack} from "@mui/material";

import {DefaultTextField} from "../design/TextFeld";
import {LevInputAdornment} from "../design/InputAdornment";

import {getGlobalStatistics} from "../../data/local-storage";


export const GlobalStatistics = () => {
    const globalStatistics = getGlobalStatistics()

    return (
        <div className="global-statistics">
            {/*Global Results*/}
            <Stack
                id='global-statistics-box'
                className="global-statistics-box"
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                {/* Global Info */}
                <Stack direction="column" spacing={5}>
                    {/* Shop Name */}
                    <DefaultTextField
                        disabled
                        className="global-name"
                        defaultValue='Global Statistics'
                    ></DefaultTextField>

                    {/* Shops Count */}
                    <DefaultTextField
                        disabled
                        id="global-shops-count"
                        label="Total Shops Count"
                        defaultValue={globalStatistics.total_shops_count}
                    ></DefaultTextField>

                    {/* Products Count */}
                    <DefaultTextField
                        disabled
                        id="global-products-count"
                        label="Total Products Count"
                        defaultValue={globalStatistics.total_products_count}
                    ></DefaultTextField>
                </Stack>

                {/* Total Values */}
                <Stack direction="column" spacing={5}>
                    {/* Total Commission */}
                    <DefaultTextField
                        disabled
                        id="global-total-commission"
                        label="Total Commission"
                        defaultValue={globalStatistics.total_commission}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Total Commission */}
                    <DefaultTextField
                        disabled
                        id="global-total-discount"
                        label="Total Discount"
                        defaultValue={globalStatistics.total_discount}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Total Commission */}
                    <DefaultTextField
                        disabled
                        id="global-total-shops-profit"
                        label="Total Shops Profit"
                        defaultValue={globalStatistics.total_shop_profit}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>
                </Stack>

                {/* Average Values */}
                <Stack direction="column" spacing={5}>
                    {/* Avg Commission */}
                    <DefaultTextField
                        disabled
                        id="global-avg-commission"
                        label="Average Commission"
                        defaultValue={globalStatistics.avg_commission}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Avg Commission */}
                    <DefaultTextField
                        disabled
                        id="global-avg-discount"
                        label="Average Discount"
                        defaultValue={globalStatistics.avg_discount}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Avg Commission */}
                    <DefaultTextField
                        disabled
                        id="global-avg-shops-profit"
                        label="Average Shops Profit"
                        defaultValue={globalStatistics.avg_shop_profit}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>
                </Stack>

                {/* Commission Breakdown */}
                <Stack direction="column" spacing={5}>
                    {/* Products Commissioned */}
                    <DefaultTextField
                        disabled
                        id="global-products-commissioned"
                        label="Total Products Commissioned"
                        defaultValue={globalStatistics.total_products_commissioned}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Pure Commission */}
                    <DefaultTextField
                        disabled
                        id="global-pure-commission"
                        label="Total Pure Commission"
                        defaultValue={globalStatistics.total_pure_commission}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>

                    {/* Min Profit */}
                    <DefaultTextField
                        disabled
                        id="global-min-profit"
                        label="Total Min Profit"
                        defaultValue={globalStatistics.total_min_profit}
                        InputProps={{startAdornment: <LevInputAdornment/>}}
                    ></DefaultTextField>
                </Stack>
            </Stack>
        </div>
    );
};
