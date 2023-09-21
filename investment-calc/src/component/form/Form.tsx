import React, { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

import classes from "./Form.module.css";

type details = {
	onSubmit: (investDetails: number[]) => void;
	onReset: () => void;
};

const Form: React.FC<details> = (props) => {
	const [currSavings, setCurrSavings] = useState(0);
	const [yearlySavings, setYearltSavinga] = useState(0);
	const [expectedInterest, setExpectedInterest] = useState(0);
	const [investmentDuration, setInvestmentDuration] = useState(0);

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Form Submtted...");
		props.onSubmit([
			currSavings,
			yearlySavings,
			expectedInterest,
			investmentDuration,
		]);
	};

	const onResetHandler = (event: React.FormEvent) => {
		setCurrSavings(0);
		setYearltSavinga(0);
		setExpectedInterest(0);
		setInvestmentDuration(0);
		props.onReset();
	};

	const onChangeCSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value);
		setCurrSavings(+event.target.value);
	};

	const onChangeYSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value);
		setYearltSavinga(+event.target.value);
	};

	const onChangeEIHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value);
		setExpectedInterest(+event.target.value);
	};

	const onChangeIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value);
		setInvestmentDuration(+event.target.value);
	};

	return (
		<div className={classes["container"]}>
			<div className={classes["row"]}>
				<Input
					label="Current Savings"
					type="number"
					id="cs"
					value={currSavings}
					onChange={onChangeCSHandler}
				></Input>
				<Input
					label="Yearly Savings"
					type="number"
					id="ys"
					value={yearlySavings}
					onChange={onChangeYSHandler}
				></Input>
			</div>
			<div className={classes["row"]}>
				<Input
					label="Expected Interest"
					type="number"
					id="ei"
					value={expectedInterest}
					onChange={onChangeEIHandler}
				></Input>
				<Input
					label="Investment Duration"
					type="number"
					id="idu"
					value={investmentDuration}
					onChange={onChangeIDHandler}
				></Input>
			</div>
			<div className={classes["row"]}>
				<Button
					type="submit"
					onClick={onSubmitHandler}
					value="Calculate"
				></Button>
				<Button
					type="reset"
					onClick={onResetHandler}
					value="Reset"
				></Button>
			</div>
		</div>
	);
};

export default Form;
