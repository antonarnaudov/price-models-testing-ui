import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { ShopsFrame } from "./components/shop/shops-frame";
import { ResultsFrame } from "./components/results/results-frame";
// import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      {/* <ShopContextProvider> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopsFrame />} />
            <Route path="/results" element={<ResultsFrame />} />
          </Routes>
        </Router>
      {/* </ShopContextProvider> */}
    </div>
  );
}

export default App;
