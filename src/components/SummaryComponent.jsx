import { Chart } from "chart.js";
import React from "react";
import { useSelector } from "react-redux";
import Chartcompo from "./Chartcompo";
function SummaryComponent({ balance, totalIncome, totalExpense }) {
  return (
    <div className="flex w-full flex-col sm:flex-row">
      <div className="mt-14 w-full rounded-lg bg-white p-6 shadow-lg sm:w-[50%] md:w-[50%]">
        <div className="flex w-full justify-center">
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-bold text-blue-400 sm:text-2xl">
              Balance: ${balance}
            </h4>
            <div className="space-y-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-green-400 sm:text-3xl">
                  ${totalIncome}
                </h1>
                <p className="text-xs text-gray-500 sm:text-sm">Total Income</p>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-red-400 sm:text-3xl">
                  ${totalExpense}
                </h1>
                <p className="text-xs text-gray-500 sm:text-sm">
                  Total Expense
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chartcompo balance={balance} expense={totalExpense} />
    </div>
  );
}

export default SummaryComponent;
