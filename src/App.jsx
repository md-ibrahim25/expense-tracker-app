import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Chartcompo,
  ExpenseView,
  ModalPopup,
  Navbar,
  SummaryComponent,
} from "./components";
import { useSelector } from "react-redux";
function App() {
  // vars for Modal Popup
  const [showPopup, setShowPopup] = useState(false);
  const onClose = () => {
    setShowPopup(false);
  };
  const onOpen = () => {
    setShowPopup(true);
  };

  // Store access
  const transactions = useSelector((state) => state.expenses.transactions);

  let totalIncome = 0;
  let totalExpense = 0;
  let incomeTransactions = [];
  let expenseTransactions = [];

  transactions.forEach((element) => {
    if (element.transactionType === "income") {
      totalIncome += element.amount;
      incomeTransactions.push(element);
    } else {
      totalExpense += element.amount;
      expenseTransactions.push(element);
    }
  });

  const balance = totalIncome - totalExpense;

  return (
    <div className="relative h-screen">
      <Navbar onOpen={onOpen} />
      {showPopup && <ModalPopup onClose={onClose} />}
      <div className="flex w-full flex-col sm:flex-row">
        <SummaryComponent
          balance={balance}
          totalExpense={totalExpense}
          totalIncome={totalIncome}
        />
      </div>
      <div className="flex flex-col items-start justify-center sm:flex-row">
        <ExpenseView
          label={"Expense"}
          color={"red"}
          transactions={expenseTransactions}
        />
        <ExpenseView
          label={"Income"}
          color={"green"}
          transactions={incomeTransactions}
        />
      </div>
    </div>
  );
}

export default App;
