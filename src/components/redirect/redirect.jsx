import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";

export function Redirect({url, text}) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            // Redirect to an external URL
            window.location.replace(url);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 9999,
                pointerEvents: 'none',
            }}/>
            <Box sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10000,
                textAlign: 'center',
            }}>
                <CircularProgress size={70} thickness={4}/>
                <Typography variant="h4" sx={{marginTop: 2}}>
                    {text}
                </Typography>
            </Box>
        </>
    )
}