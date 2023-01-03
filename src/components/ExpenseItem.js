// import { useState } from "react";

import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "./Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.expense.title);
  // here state stores the title value which is to be updated when
  // the button is clicked
  // useState often returns an array with two values only
  // useState should be used in the component function and
  // cannot be used anywhere else
  // use array des-structuring to get the values
  // first value of the array will be the initital value
  // second value will be the updated value which will be function which
  // assigns the updated value
  // useState is an asynchronus process and it takes time to be
  // updated and shown it on console
  const { expense } = props;
  //   console.log(props);
  const { title, amount, date } = expense;

  // const clickHandler = () => {
  //   // console.log("Clicked");
  //   setTitle("Updated"); // should be called in-order to update the values
  //   // and is used re-render the state and update the page
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
