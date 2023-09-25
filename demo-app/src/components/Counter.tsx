import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterStore.tsx";

import classes from "./Counter.module.css";

interface stateType {
	counter: number;
	showCounter: boolean;
}

const Counter: React.FC = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state: stateType) => state.counter);
	// const showCounter = useSelector((state: stateType) => state.showCounter);

	const incrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(counterActions.increment(1));
	};

	const decrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(2);
	};

	return (
		<div className={classes["counter-main"]}>
			<div>
				<h1>{counter}</h1>
			</div>
			<div className={classes["counter-btns"]}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
		</div>
	);
};

export default Counter;
