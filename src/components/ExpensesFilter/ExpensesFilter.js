import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { updateYear } = props;
  const dropdownChangeHandler = (event) => {
    updateYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2024</option>
          <option value="2021">2025</option>
          <option value="2020">2026</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
