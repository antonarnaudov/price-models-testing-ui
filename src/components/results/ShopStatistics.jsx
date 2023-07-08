import React from "react";

import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {ProductStatistics} from "./ProductStatistics";

export const ShopStatistics = ({shop}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            {/*sx={{'& > *': {borderBottom: 'none'}}}*/}
            <TableRow className='shops-statistics'>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                    {shop.name}
                </TableCell>

                <TableCell>{shop.products_count}</TableCell>
                <TableCell>{shop.commission} %</TableCell>
                <TableCell>{shop.discount} %</TableCell>
                <TableCell>{shop.min_profit} лв</TableCell>
                <TableCell>{shop.profit_limit} лв</TableCell>

                <TableCell className='border-left'>{shop.statistics.total_commission} лв</TableCell>
                <TableCell>{shop.statistics.total_discount} лв</TableCell>
                <TableCell>{shop.statistics.total_shop_profit} лв</TableCell>

                <TableCell className='border-left'>{shop.statistics.avg_commission} лв</TableCell>
                <TableCell>{shop.statistics.avg_discount} лв</TableCell>
                <TableCell>{shop.statistics.avg_shop_profit} лв</TableCell>

                <TableCell className='border-left'>{shop.statistics.total_products_commissioned}</TableCell>
                <TableCell>{shop.statistics.total_pure_commission} лв</TableCell>
                <TableCell>{shop.statistics.total_min_profit} лв</TableCell>
            </TableRow>

            <ProductStatistics products={shop.products} open={open}></ProductStatistics>
        </React.Fragment>
    );
};
