import React, { useState } from "react";
import Newexpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import "./App.css";

const dummyExpenses = [
	{
		id: "e1",
		title: "New Bike",
		amount: 1299.84,
		date: new Date(2023, 3, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 439.84,
		date: new Date(2022, 4, 24),
	},
	{
		id: "e3",
		title: "New Laptop",
		amount: 129.84,
		date: new Date(2021, 5, 4),
	},
	{
		id: "e4",
		title: "Travelling",
		amount: 13.84,
		date: new Date(2020, 7, 19),
	},
];

function App() {
	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		console.log("New Expense : ", expense);
		setExpenses((prevExpenses) => [...prevExpenses, expense]);
	};

	return (
		<div className="expenses">
			<h1 className="header">Expense Tracker</h1>

			<Newexpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
