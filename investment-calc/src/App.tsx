import React, { useState } from "react";
import Header from "./component/header/Header";
import Form from "./component/form/Form";
import Table from "./component/table/Table";

import "./App.css";
import { type } from "os";

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

		const intr = (CS * 5) / 100;
		const ti = intr;
		const ts = CS + intr + YS;
		const ic = ts - ti;

		setCalcTable((prev) => [
			...prev,
			{
				totalSavings: ts,
				interest: intr,
				totalInterest: ti,
				investedCap: ic,
			},
		]);

		for (let i = 0; i < IT - 1; i++) {
			setCalcTable((prevRow) => {
				let intr =
					(prevRow[prevRow.length - 1].totalSavings * EI) / 100;

				return [
					...prevRow,
					{
						totalSavings:
							prevRow[prevRow.length - 1].totalSavings +
							intr +
							YS,
						interest: intr,
						totalInterest:
							prevRow[prevRow.length - 1].totalInterest + intr,
						investedCap:
							prevRow[prevRow.length - 1].investedCap + YS,
					},
				];
			});
		}
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
