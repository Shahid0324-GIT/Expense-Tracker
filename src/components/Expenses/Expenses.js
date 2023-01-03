import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import Card from "../Card/Card";
import "./style.css";

function Expenses(props) {
  const { expense } = props;

  const [currYear, setCurrYear] = useState("2023");
  //   console.log(expense);

  const updateYear = (year) => {
    setCurrYear(year);
  };
  // console.log(currYear);
  // console.log(expense[0].date.getFullYear().toString() === currYear);

  const filteredExpenses = expense.filter(
    (eachItem) => eachItem.date.getFullYear().toString() === currYear
  );

  // console.log(filteredList);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={currYear} updateYear={updateYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />

      {/* {filteredExpenses.length === 0 && (
        <div className="no-expenses">
          <p className="para">No Expenses Found for this Year</p>
        </div>
      )}

      {filteredExpenses.length !== 0 &&
        filteredExpenses.map((eachItem) => (
          <ExpenseItem key={eachItem.id} expense={eachItem} />
        ))} */}

      {/* {filteredExpenses.length !== 0 ? (
        filteredExpenses.map((eachItem) => (
          <ExpenseItem key={eachItem.id} expense={eachItem} />
        ))
      ) : (
        <div className="no-expenses">
          <p className="para">No Expenses Found for this Year</p>
        </div>
      )} */}

      {/* <ExpenseItem expense={expense[0]} />
      <ExpenseItem expense={expense[1]} />
      <ExpenseItem expense={expense[2]} />
      <ExpenseItem expense={expense[3]} /> */}
    </Card>
  );
}

export default Expenses;
