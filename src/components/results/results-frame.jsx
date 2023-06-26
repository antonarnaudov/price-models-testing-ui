import "./result.css";
import React from "react";

import {InputAdornment, Stack} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {DefaultTextField} from "../design/textFeld";
import {ResultShop} from "./result-shop";
// import { ShopContext } from "../../context/shop-context";

// TODO: To be continued
// TODO: Remove fake data and add Shops

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];


export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ResultShop key={row.name} data={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
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

            <CollapsibleTable></CollapsibleTable>
        </div>
    );
};
