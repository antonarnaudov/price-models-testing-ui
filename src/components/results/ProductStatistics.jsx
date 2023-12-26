import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {ZebraStyleTableRow} from "../design/TableRow"

export const ProductStatistics = ({products, open}) => {
    return (
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={16}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Products
                        </Typography>
                        <Table size="small" aria-label="products">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Price (лв)</TableCell>
                                    <TableCell>Commission (лв)</TableCell>
                                    <TableCell>Discount (лв)</TableCell>
                                    <TableCell>Shop Profit (лв)</TableCell>
                                    <TableCell>Fixed Profit (лв)</TableCell>
                                    <TableCell>Pure Commission (лв)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <ZebraStyleTableRow key={product.id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price} лв</TableCell>
                                        <TableCell>{product.commission} лв</TableCell>
                                        <TableCell>{product.discount} лв</TableCell>
                                        <TableCell>{product.shop_profit} лв</TableCell>
                                        <TableCell>{product.min_profit} лв</TableCell>
                                        <TableCell>{product.pure_commission} лв</TableCell>
                                    </ZebraStyleTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};
