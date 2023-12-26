import "./result.css";
import React from "react";

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import {getShops} from "../../data/local-storage";
import {ShopStatistics} from "./ShopStatistics";
import {GlobalStatistics} from "./GlobalStatistics";

export const ResultsFrame = () => {
    return (
        <div className="results-frame">

            {/*---------------- Global Breakdown ----------------*/}
            <TableContainer sx={{width: '95%'}} className='global-statistics-table'>
                <h1 id='title'>Global Statistics</h1>

                <Table className='table'>
                    <TableHead className='table-head'>
                        <TableRow className='table-row'>
                            <TableCell className='info-cell' align="center" colSpan={2}>
                                Info
                            </TableCell>

                            <TableCell className='breakdown-cell border-left-dark' align="center" colSpan={3}>
                                Commission Breakdown
                            </TableCell>

                            <TableCell className='avg-cell border-left-dark' align="center" colSpan={3}>
                                Average Values
                            </TableCell>

                            <TableCell className='total-cell border-left-dark' align="center" colSpan={3}>
                                Total Values
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='info-cell-lighter border-left'>Total Shops Count</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Total Products Count</TableCell>

                            <TableCell className='breakdown-cell-lighter border-left-dark'>Products Commissioned</TableCell>
                            <TableCell className='breakdown-cell-lighter border-left'>Pure Commission</TableCell>
                            <TableCell className='breakdown-cell-lighter border-left border-left'>Min Profit</TableCell>

                            <TableCell className='avg-cell-lighter border-left-dark'>Avg Commission</TableCell>
                            <TableCell className='avg-cell-lighter border-left'>Avg Discount</TableCell>
                            <TableCell className='avg-cell-lighter border-left'>Avg Shop Profit</TableCell>

                            <TableCell className='total-cell-lighter border-left-dark'>Total Commission</TableCell>
                            <TableCell className='total-cell-lighter border-left'>Total Discount</TableCell>
                            <TableCell className='total-cell-lighter border-left'>Total Shop Profit</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <GlobalStatistics></GlobalStatistics>
                    </TableBody>
                </Table>
            </TableContainer>


            {/*---------------- Statistics Breakdown ----------------*/}
            <TableContainer sx={{width: '95%'}} className='shops-table'>
                <h1 id='title'>Shops Statistics Breakdown</h1>

                <Table className='table' aria-label="collapsible table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell className='info-cell' align="center" colSpan={7}>
                                Info
                            </TableCell>
                            <TableCell className='breakdown-cell border-left-dark' align="center" colSpan={3}>
                                Commission Breakdown
                            </TableCell>
                            <TableCell className='avg-cell border-left-dark' align="center" colSpan={3}>
                                Average Values
                            </TableCell>
                            <TableCell className='total-cell border-left-dark' align="center" colSpan={3}>
                                Total Values
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='info-cell-lighter'/>

                            <TableCell className='info-cell-lighter'>Shop Name</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Products Count</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Commission</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Discount</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Min Profit</TableCell>
                            <TableCell className='info-cell-lighter border-left'>Profit Limit</TableCell>

                            <TableCell className='breakdown-cell-lighter border-left-dark'>Products Commissioned</TableCell>
                            <TableCell className='breakdown-cell-lighter border-left'>Pure Commission</TableCell>
                            <TableCell className='breakdown-cell-lighter border-left'>Min Profit</TableCell>

                            <TableCell className='avg-cell-lighter border-left-dark'>Avg Commission</TableCell>
                            <TableCell className='avg-cell-lighter border-left'>Avg Discount</TableCell>
                            <TableCell className='avg-cell-lighter border-left'>Avg Shop Profit</TableCell>

                            <TableCell className='total-cell-lighter border-left-dark'>Total Commission</TableCell>
                            <TableCell className='total-cell-lighter border-left'>Total Discount</TableCell>
                            <TableCell className='total-cell-lighter border-left'>Total Shop Profit</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {getShops().map((shop) => (
                            <ShopStatistics
                                key={shop.id}
                                shop={shop}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
