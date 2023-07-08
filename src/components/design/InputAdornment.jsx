import {styled} from "@mui/material/styles";
import {InputAdornment} from "@mui/material";

export const LevInputAdornment = styled((props) => (
    <InputAdornment position="start" {...props}>
        лв
    </InputAdornment>
))({});

export const UsdInputAdornment = styled((props) => (
    <InputAdornment position="start" {...props}>
        $
    </InputAdornment>
))({});

export const PercentInputAdornment = styled((props) => (
    <InputAdornment position="start" {...props}>
        %
    </InputAdornment>
))({});