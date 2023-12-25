import React from "react";

import {getGlobalStatistics} from "../../data/local-storage";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const GlobalStatistics = () => {
    const globalStatistics = getGlobalStatistics()

    return (
        <React.Fragment>
            <TableRow className='global-statistics'>
                {/*                                Info                                */}
                <TableCell style={{paddingLeft: 55}} colSpan={2}>{globalStatistics.total_shops_count}</TableCell>
                <TableCell>{globalStatistics.total_products_count}</TableCell>

                {/*                             Total Values                           */}
                <TableCell className='border-left'>{globalStatistics.total_commission} лв</TableCell>
                <TableCell>{globalStatistics.total_discount} лв</TableCell>
                <TableCell>{globalStatistics.total_shop_profit} лв</TableCell>

                {/*                            Average Values                          */}
                <TableCell className='border-left'>{globalStatistics.avg_commission} лв</TableCell>
                <TableCell>{globalStatistics.avg_discount} лв</TableCell>
                <TableCell>{globalStatistics.avg_shop_profit} лв</TableCell>

                {/*                         Commission Breakdown                       */}
                <TableCell className='border-left'>{globalStatistics.total_products_commissioned}</TableCell>
                <TableCell>{globalStatistics.total_pure_commission} лв</TableCell>
                <TableCell>{globalStatistics.total_min_profit} лв</TableCell>
            </TableRow>
        </React.Fragment>
    );
};
