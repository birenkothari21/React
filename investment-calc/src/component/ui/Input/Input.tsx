import React from "react";
import classes from "./Input.module.css";

type input = {
	label: string;
	type: string;
	id: string;
	value: number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<input> = (props: input) => {
	return (
		<div className={classes["form-input"]}>
			<label htmlFor={props.id}>{props.label}</label>
			<input {...props} />
		</div>
	);
};

export default Input;

// 	type={props.type}
//	id={props.id}
// 	onChange={props.onChange}
// 	value={props.value}
