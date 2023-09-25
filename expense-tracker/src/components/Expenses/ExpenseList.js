import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <h2>No Expenses Found </h2>;
	}

	return (
		<ul>
			{props.items.map((ele) => {
				return (
					<ExpenseItem
						key={ele.id}
						title={ele.title}
						amount={ele.amount}
						date={ele.date}
					/>
				);
			})}
		</ul>
	);
};

export default ExpenseList;
