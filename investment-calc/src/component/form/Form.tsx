import React, { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

import classes from "./Form.module.css";

type details = {
	onSubmit: (investDetails: number[]) => void;
	onReset: () => void;
};

const Form: React.FC<details> = (props) => {
	const [currSavings, setCurrSavings] = useState(NaN);
	const [yearlySavings, setYearltSavinga] = useState(NaN);
	const [expectedInterest, setExpectedInterest] = useState(NaN);
	const [investmentDuration, setInvestmentDuration] = useState(NaN);

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (
			!isNaN(currSavings) &&
			!isNaN(yearlySavings) &&
			!isNaN(expectedInterest) &&
			!isNaN(investmentDuration)
		) {
			props.onSubmit([
				currSavings,
				yearlySavings,
				expectedInterest,
				investmentDuration,
			]);
		} else {
			console.log("please, enter valid numbers...");
			alert("Please Enter Form");
		}
	};

	const onResetHandler = (event: React.FormEvent) => {
		setCurrSavings(NaN);
		setYearltSavinga(NaN);
		setExpectedInterest(NaN);
		setInvestmentDuration(NaN);
		props.onReset();
	};

	const onChangeCSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrSavings(parseInt(event.target.value));
	};

	const onChangeYSHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setYearltSavinga(parseInt(event.target.value));
	};

	const onChangeEIHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setExpectedInterest(parseInt(event.target.value));
	};

	const onChangeIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInvestmentDuration(parseInt(event.target.value));
	};

	return (
		<div className={classes["container"]}>
			<div className={classes["row"]}>
				<Input
					label="Current Savings"
					type="text"
					id="cs"
					value={isNaN(currSavings) ? "" : currSavings.toString()}
					onChange={onChangeCSHandler}
				></Input>
				<Input
					label="Yearly Savings"
					type="text"
					id="ys"
					value={isNaN(yearlySavings) ? "" : yearlySavings.toString()}
					onChange={onChangeYSHandler}
				></Input>
			</div>
			<div className={classes["row"]}>
				<Input
					label="Expected Interest"
					type="text"
					id="ei"
					value={
						isNaN(expectedInterest)
							? ""
							: expectedInterest.toString()
					}
					onChange={onChangeEIHandler}
				></Input>
				<Input
					label="Investment Duration"
					type="text"
					id="idu"
					value={
						isNaN(investmentDuration)
							? ""
							: investmentDuration.toString()
					}
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
