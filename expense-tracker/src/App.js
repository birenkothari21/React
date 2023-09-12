// import logo from "./logo.svg";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
	const expenses = [
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
			date: new Date(2023, 4, 24),
		},
		{
			id: "e1",
			title: "New Laptop",
			amount: 129.84,
			date: new Date(2023, 5, 4),
		},
		{
			id: "e1",
			title: "Travelling",
			amount: 13.84,
			date: new Date(2020, 7, 19),
		},
	];

	return (
		<div>
			<h1 className="header">Expense Tracker</h1>
			{/* <ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/> */}

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
