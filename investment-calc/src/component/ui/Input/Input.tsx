import React from "react";
import classes from "./Input.module.css";

type input = {
	label: string;
	type: string;
	id: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<input> = (props: input) => {
	return (
		<div className={classes["form-input"]}>
			<label htmlFor={props.id}> Yearly Savings </label>
			<input
				type={props.type}
				id={props.id}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default Input;
