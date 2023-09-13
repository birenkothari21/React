import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Newexpense from "./components/NewExpense/NewExpense";
import "./App.css";

function App() {
	const [expenses, setExpenses] = useState([]);

	const addExpenseHandler = (expense) => {
		console.log("New Expense : ", expense);
		setExpenses((prevExpenses) => [...prevExpenses, expense]);
	};

	// const expenses = [
	// 	{
	// 		id: "e1",
	// 		title: "New Bike",
	// 		amount: 1299.84,
	// 		date: new Date(2023, 3, 14),
	// 	},
	// 	{
	// 		id: "e2",
	// 		title: "New TV",
	// 		amount: 439.84,
	// 		date: new Date(2023, 4, 24),
	// 	},
	// 	{
	// 		id: "e1",
	// 		title: "New Laptop",
	// 		amount: 129.84,
	// 		date: new Date(2023, 5, 4),
	// 	},
	// 	{
	// 		id: "e1",
	// 		title: "Travelling",
	// 		amount: 13.84,
	// 		date: new Date(2020, 7, 19),
	// 	},
	// ];

	return (
		<div>
			<h1 className="header">Expense Tracker</h1>
			<Newexpense onAddExpense={addExpenseHandler} />
			{expenses.map((ele) => {
				return (
					<ExpenseItem
						title={ele.title}
						amount={ele.amount}
						date={ele.date}
					/>
				);
			})}
		</div>
	);
}

export default App;
