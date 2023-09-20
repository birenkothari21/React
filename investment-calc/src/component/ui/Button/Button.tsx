import React from "react";
import classes from "./Button.module.css";

type inputBtn = {
	type: string;
	onSubmit: (event: React.FormEvent) => void;
};

const Button: React.FC<inputBtn> = (props) => {
	return (
		<div className={classes["btn-div"]}>
			<button onClick={props.onSubmit}>Calculate</button>
		</div>
	);
};

export default Button;
