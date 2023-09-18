import React, { useState } from "react";
import "./StockTable.css";

const StockTable = ({ stockData }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [stockList, setStockList] = useState(stockData);

  const handleDragStart = (e, item, index) => {
    setDraggedItem({ item, index });
  };

  const handleDragOver = (e, targetIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    if (draggedItem === null) return;

    const updatedList = [...stockList];
    const { item, index } = draggedItem;

    // Swap the dragged item with the target item
    const temp = updatedList[targetIndex];
    updatedList[targetIndex] = item;
    updatedList[index] = temp;

    setStockList(updatedList);
    setDraggedItem(null);
  };

  return (
    <div className="stock-table-container">
      <h2 className="stock-table-header">Stocks</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((stock, index) => (
            <tr
              key={stock.name}
              draggable
              onDragStart={(e) => handleDragStart(e, stock, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              <td>
                <div className="stock-info">
                  <span className="stock-name">{stock.name}</span>
                  <span className="stock-type">{stock.type}</span>
                </div>
              </td>
              <td>${stock.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
