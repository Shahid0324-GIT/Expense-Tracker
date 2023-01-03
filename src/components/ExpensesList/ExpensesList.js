import ExpenseItem from "../ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { filteredExpenses } = props;
  if (filteredExpenses.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <h2 className="para">No Expenses Found for this Year</h2>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((eachItem) => (
        <ExpenseItem key={eachItem.id} expense={eachItem} />
      ))}
    </ul>
  );
};

export default ExpensesList;
