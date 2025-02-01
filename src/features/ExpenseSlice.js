import { createSlice } from "@reduxjs/toolkit";

const previousTransactions = () => {
    const savedTrans = localStorage.getItem("transactions");
    return savedTrans ? JSON.parse(savedTrans) : [];
}

const initialState = {
    transactions: previousTransactions(),
    
};

const ExpenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
            localStorage.setItem("transactions", JSON.stringify(state.transactions));
        },
        removeTransaction: (state, action) => {
            
        }
    }
})


export const { addTransaction, removeTransaction } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;