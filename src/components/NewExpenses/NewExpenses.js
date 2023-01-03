import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./style.css";

const NewExpenses = (props) => {
  const [show, setShow] = useState(false);
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setShow(false);
  };

  const changeShowHandler = (show) => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {show ? (
        <ExpenseForm
          show={show}
          changeShowHandler={changeShowHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <div>
          <button type="button" onClick={changeShowHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpenses;
