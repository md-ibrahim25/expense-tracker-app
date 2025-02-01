import React from "react";
import { FaPlus } from "react-icons/fa";

function Navbar({onOpen}) {
  return (
    <div className="mx-7 mt-5 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-3xl font-bold text-blue-500 cursor-pointer mb-4 sm:mb-0">Expense Tracker</div>
      <div>
        <button className="max-w-50 flex items-center justify-between gap-2 rounded bg-blue-400 p-2 hover:bg-blue-600 hover:text-white" onClick={onOpen}>
          <FaPlus /> Add New Transaction
        </button>
      </div>
    </div>
  );
}

export default Navbar;
