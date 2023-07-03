import "./navbar.css";
import React from "react";
import {AppBar} from '@mui/material';
import {useLocation} from 'react-router-dom'

import {AddShopsNav} from './addShopsNav'
import {ResultsNav} from './resultsNav'


export const Navbar = ({shops, onAddShop, setShouldRedirect}) => {
    const location = useLocation()

    return (
        <AppBar className="navbar" position="fixed" sx={{bgcolor: "whitesmoke"}}>
            {
                // Route Based Navigation
                location.pathname === '/results' ? (
                    <ResultsNav/>
                ) : (
                    <AddShopsNav
                        shops={shops}
                        onAddShop={onAddShop}
                        setShouldRedirect={setShouldRedirect}
                    />
                )
            }
        </AppBar>
    );
};
