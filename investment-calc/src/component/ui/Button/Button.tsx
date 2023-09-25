import React from "react";
import classes from "./Button.module.css";

type inputBtn = {
	type: "button" | "submit" | "reset" | undefined;
	onClick: (event: React.FormEvent) => void;
	value: string;
};

const Button: React.FC<inputBtn> = (props) => {
	return (
		<div className={classes["btn-div"]}>
			<button {...props}>{props.value}</button>
		</div>
	);
};

export default Button;
