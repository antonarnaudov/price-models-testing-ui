import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const ZebraStyleTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#e6e6e6',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));