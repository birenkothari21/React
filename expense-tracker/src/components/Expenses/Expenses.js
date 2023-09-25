import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("All");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	let filteredExpenses = [];

	if (filteredYear === "All") {
		filteredExpenses = [...props.items];
	} else {
		filteredExpenses = props.items.filter((item) => {
			return item.date.getFullYear().toString() === filteredYear;
		});
	}

	console.log(filteredExpenses);

	return (
		<div>
			<ExpensesFilter
				selected={filteredYear}
				onYearChange={filterChangeHandler}
			/>
			<ExpenseList items={filteredExpenses} />
		</div>
	);
};

export default Expenses;
