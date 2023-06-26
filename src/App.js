import "./App.css";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navbar/navbar";
import {ShopsFrame} from "./components/shop/shops-frame";
import {ResultsFrame} from "./components/results/results-frame";
import {createShop, deleteShop} from "./data/crud-shop";

// import { ShopContextProvider } from "./context/shop-context";

function App() {
    const [_, setShops] = useState(JSON.parse(localStorage.getItem("shops") || "[]"));
    const handleDeleteShop = (id) => setShops(deleteShop(id))

    return (
        <div className="App">
            {/* <ShopContextProvider> */}
            <Router>
                <Navbar onAddShop={() => setShops(createShop())}/>
                <Routes>
                    <Route path="/" element={<ShopsFrame onDeleteShop={handleDeleteShop}/>}/>
                    <Route path="/results" element={<ResultsFrame/>}/>
                </Routes>
            </Router>
            {/* </ShopContextProvider> */}
        </div>
    );
}

export default App;
