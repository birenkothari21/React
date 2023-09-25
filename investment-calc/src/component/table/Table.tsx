import React from "react";
import classes from "./Table.module.css";

type propType = {
	calcTable: {
		totalSavings: number;
		interest: number;
		totalInterest: number;
		investedCap: number;
	}[];
};

const Table: React.FC<propType> = (props) => {
	return (
		<div className={classes.calcTable}>
			<h3>Investment Calculation Table</h3>
			<table cellPadding={5 + "px"}>
				<thead>
					<tr>
						<th>Years</th>
						<th>Total Savings</th>
						<th>Interest</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{props.calcTable.map((row, index) => {
						return (
							<tr key={index + 1}>
								<td>{index + 1}</td>
								<td>{row.totalSavings.toFixed(2)}</td>
								<td>{row.interest.toFixed(2)}</td>
								<td>{row.totalInterest.toFixed(2)}</td>
								<td>{row.investedCap.toFixed(2)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
