import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const Newexpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
		</div>
	);
};

export default Newexpense;
