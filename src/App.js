import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const initialExpenses = [
  // {
  //   id: "e1",
  //   title: "Toilet Paper",
  //   amount: 94.12,
  //   date: new Date(2021, 7, 14),
  // },
  // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2022, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2022, 5, 12),
  // },
  // {
  //   id: "e5",
  //   title: "PC Parts",
  //   amount: 1050,
  //   date: new Date(2020, 9, 27),
  // },
];

function App() {
  const [expenseList, setNewExpenseList] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    // setNewExpenseList([...expenseList, expense]);
    setNewExpenseList((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expense={expenseList} />
    </div>
  );
}

export default App;
