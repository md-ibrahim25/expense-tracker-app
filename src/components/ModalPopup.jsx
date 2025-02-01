import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../features/ExpenseSlice";

function ModalPopup({ onClose, className = "" }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");

  // use store values
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.expenses.transactions);

  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      description,
      amount,
      transactionType,
    });
    dispatch(addTransaction({ description, amount, transactionType }));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 transform ${className} w-[90%] max-w-[420px] rounded-lg border border-gray-300 bg-white p-5 shadow-lg`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Add New Transaction</div>
        <div
          className="cursor-pointer text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          <FaTimes />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Enter Description
        </label>
        <input
          type="text"
          placeholder="Enter Transaction Description"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Enter Amount
        </label>
        <input
          type="text"
          placeholder="Enter Transaction Amount"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
          inputMode="numeric" // This brings up the numeric keyboard on mobile devices
          onInput={(e) => {
            // Remove any non-numeric characters
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="transactionType"
            value="expense"
            className="peer hidden"
            onChange={() => setTransactionType("expense")}
          />
          <div className="h-5 w-5 rounded-full border-2 border-gray-600 transition-all peer-checked:border-red-600 peer-checked:bg-red-600 peer-checked:shadow-md peer-checked:shadow-red-400"></div>
          <span className="ml-2 text-gray-700">Expense</span>
        </label>

        <label className="ml-4 inline-flex items-center">
          <input
            type="radio"
            name="transactionType"
            value="income"
            className="peer hidden"
            onChange={() => setTransactionType("income")}
          />
          <div className="h-5 w-5 rounded-full border-2 border-gray-600 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:shadow-md peer-checked:shadow-blue-400"></div>
          <span className="ml-2 text-gray-700">Income</span>
        </label>
      </div>
      <div className="flex justify-between">
        <button
          type="button" // Prevent form submission on cancel
          className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default ModalPopup;
