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
			<button
				type={props.type}
				onClick={props.onClick}
			>
				{props.value}
			</button>
		</div>
	);
};

export default Button;
