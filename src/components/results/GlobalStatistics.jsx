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
                <TableCell className='table-cell' >{globalStatistics.total_shops_count}</TableCell>
                <TableCell className='table-cell'>{globalStatistics.total_products_count}</TableCell>

                {/*                         Commission Breakdown                       */}
                <TableCell className='border-left-dark table-cell'>{globalStatistics.total_products_commissioned}</TableCell>
                <TableCell className='table-cell'>{globalStatistics.total_pure_commission} лв</TableCell>
                <TableCell className='table-cell'>{globalStatistics.total_min_profit} лв</TableCell>

                {/*                            Average Values                          */}
                <TableCell className='border-left-dark table-cell'>{globalStatistics.avg_commission} лв</TableCell>
                <TableCell className='table-cell'>{globalStatistics.avg_discount} лв</TableCell>
                <TableCell className='table-cell'>{globalStatistics.avg_shop_profit} лв</TableCell>

                {/*                             Total Values                           */}
                <TableCell className='border-left-dark table-cell'>{globalStatistics.total_commission} лв</TableCell>
                <TableCell className='table-cell'>{globalStatistics.total_discount} лв</TableCell>
                <TableCell className='table-cell'>{globalStatistics.total_shop_profit} лв</TableCell>
            </TableRow>
        </React.Fragment>
    );
};
