import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

interface stateType {
	counter: number;
	showCounter: boolean;
}

const Counter: React.FC = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state: stateType) => state.counter);
	const showCounter = useSelector((state: stateType) => state.showCounter);

	const incrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch({ type: "increment" });
	};

	const decrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		dispatch({ type: "toggleCounter", showCounter: !showCounter });
	};

	return (
		<div className={classes["counter-main"]}>
			<div>{showCounter && <h1>{counter}</h1>}</div>
			<div className={classes["counter-btns"]}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<div className={classes["counter-btns"]}>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
			</div>
		</div>
	);
};

export default Counter;
