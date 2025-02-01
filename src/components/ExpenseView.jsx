import React from "react";

function ExpenseView({ label, color, transactions }) {
  // Determine the color classes based on the color prop

  return (
    <div className="mx-auto mt-6 w-full rounded-lg bg-white p-4 sm:w-[50%]">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{label}</h2>
      <ul className="space-y-4">
        {transactions.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between rounded-lg border ${color === "red" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"} px-4 py-3 transition duration-200 hover:shadow-md`}
          >
            <span className="font-semibold text-gray-700">
              {item.description}
            </span>
            <span
              className={`font-bold ${color === "red" ? "text-red-600" : "text-green-600"}`}
            >
              ${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseView;