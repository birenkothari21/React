import React, { useState } from "react";
import Header from "./component/header/Header";
import Form from "./component/form/Form";
import Table from "./component/table/Table";

import "./App.css";

type calcRow = {
	totalSavings: number;
	interest: number;
	totalInterest: number;
	investedCap: number;
};

function App() {
	const [calcTable, setCalcTable] = useState<calcRow[]>([]);

	const calcInvestment = (investDetails: number[]): void => {
		setCalcTable([]);
		const [CS, YS, EI, IT] = investDetails;
		const calcArr: calcRow[] = [];

		const intr = (CS * EI) / 100;

		calcArr.push({
			totalSavings: CS + intr + YS,
			interest: intr,
			totalInterest: intr,
			investedCap: CS + intr + YS - intr,
		});

		for (let i = 1; i < IT; i++) {
			const intr = (calcArr[i - 1].totalSavings * EI) / 100;

			calcArr.push({
				totalSavings: calcArr[i - 1].totalSavings + intr + YS,
				interest: intr,
				totalInterest: calcArr[i - 1].interest + intr,
				investedCap: calcArr[i - 1].investedCap + YS,
			});
		}

		setCalcTable(calcArr);
	};

	const resetTable = () => {
		setCalcTable([]);
	};

	return (
		<div className="App">
			<Header></Header>
			<Form
				onSubmit={calcInvestment}
				onReset={resetTable}
			></Form>
			<Table calcTable={calcTable}></Table>
		</div>
	);
}

export default App;
