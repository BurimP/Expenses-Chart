import React from "react";
import BarChart from "./BarChart";
import Data from "../assets/data.json";

const MainContent = () => {
  console.log(Data);
  const total = Data.reduce((sum, item) => sum + item.amount, 0);
  console.log(total);
  return (
    <div className="main-content">
      <h2>Spending - Last 7 days</h2>
      <BarChart />
      <div className="bottom-content">
        <div className="left-bottom">
          <p className="total-text">Total this month</p>
          <h1 className="total-price">${total}</h1>
        </div>
        <div className="right-bottom">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
