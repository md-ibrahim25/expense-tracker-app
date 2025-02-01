import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../features/ExpenseSlice'

const store = configureStore({
    reducer: {
        expenses : expenseReducer
    },
})

export default store