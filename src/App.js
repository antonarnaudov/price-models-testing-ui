import "./App.css";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/navbar/Navbar";
import {ShopsFrame} from "./components/shop/ShopsFrame";
import {ResultsFrame} from "./components/results/ResultsFrame";

import {getShops} from "./data/local-storage";
import {createShop, deleteShop} from "./data/crud-shop";

// import { ShopContextProvider } from "./context/shop-context";

function App() {
    const [shops, setShops] = useState(getShops());
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const handleDeleteShop = (id) => setShops(deleteShop(id))

    return (
        <div className="App">
            {/* <ShopContextProvider> */}
            <Router>
                <Navbar
                    shops={shops}
                    onAddShop={() => setShops(createShop())}
                    setShouldRedirect={setShouldRedirect}
                />
                <Routes>
                    <Route path="/" element={
                        <ShopsFrame
                            onDeleteShop={handleDeleteShop}
                            shouldRedirect={shouldRedirect}
                        />}/>
                    <Route path="/results" element={<ResultsFrame/>}/>
                </Routes>
            </Router>
            {/* </ShopContextProvider> */}
        </div>
    );
}

export default App;
