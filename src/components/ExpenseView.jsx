import React from "react";

function ExpenseView({ label, color, transactions }) {
  return (
    <div className="mx-auto mt-6 w-full rounded-lg bg-white p-4 sm:w-[50%]">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{label}</h2>
      <ul className="space-y-4">
        {transactions.map((item, index) => (
          <li
            style={{
              borderColor: `${color}-200`,
              backgroundColor: `${color}-50`,
            }}
            key={index}
            className={`flex items-center justify-between rounded-lg border bg-${color}-50 border-${color}-200 px-4 py-3 transition duration-200 hover:shadow-md`}
          >
            <span className="font-semibold text-gray-700">
              {item.description}
            </span>
            <span className={`font-bold text-${color}-600`}>
              ${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseView;