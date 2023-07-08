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
            <GlobalStatistics></GlobalStatistics>

            <TableContainer sx={{width: '90%'}} className='shops-table'>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={7}>
                                Info
                            </TableCell>
                            <TableCell className='border-left' align="center" colSpan={3}>
                                Total Values
                            </TableCell>
                            <TableCell className='border-left' align="center" colSpan={3}>
                                Average Values
                            </TableCell>
                            <TableCell className='border-left' align="center" colSpan={3}>
                                Commission Breakdown
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Shop Name</TableCell>
                            <TableCell>Products Count</TableCell>
                            <TableCell>Commission</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell>Min Profit</TableCell>
                            <TableCell>Profit Limit</TableCell>

                            <TableCell className='border-left'>Total COMM</TableCell>
                            <TableCell>Total Discount</TableCell>
                            <TableCell>Total Shop Profit</TableCell>

                            <TableCell className='border-left'>Avg COMM</TableCell>
                            <TableCell>Avg Discount</TableCell>
                            <TableCell>Avg Shop Profit</TableCell>

                            <TableCell className='border-left'>Products COMM</TableCell>
                            <TableCell>Pure COMM</TableCell>
                            <TableCell>Min Profit</TableCell>
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
