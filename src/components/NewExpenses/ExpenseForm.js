import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const { onSaveExpenseData, show, changeShowHandler } = props;

  //   const [userInput, setuserInput] = useState({
  //     //Another method but only using single state
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setuserInput({
    //   // Updating using single state
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // }); not recommended because it may cause bugs

    // setuserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // }); // Recommended way if the state depends on prev State
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setuserInput({
    //   // Updating using single state
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setuserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // }); // Recommended way if the state depends on prev State
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setuserInput({
    //   // Updating using single state
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setuserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // }); // Recommended way if the state depends on prev State
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    // Using value attribute in the input helps store the initial value
    // which was stored in the state. This helps the above three methods
    // possible where we can clear the inputs after add element
    // button is clicked
  };

  const cancelExpenseHandler = () => {
    changeShowHandler(show);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="01-12-2022"
            max="01-12-2025"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="button-container">
        <div className="new-expense__actions">
          <button type="button" onClick={cancelExpenseHandler}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
