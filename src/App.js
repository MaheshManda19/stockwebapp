import React from "react";
import StockTable from "./components/StockTable";
import { stockConfig } from "./components/config";// Import the config from the correct location

function App() {
  return (
    <div className="App">
      <StockTable stockData={stockConfig} /> {/* Correct the prop name to stockData */}
    </div>
  );
}

export default App;
