import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/counterStore";
import { increment, decrement, toggleCounter } from "../store/counterStore";

import classes from "./Counter.module.css";

const Counter: React.FC = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state: RootState) => state.counter.counter);
	const showCounter = useSelector(
		(state: RootState) => state.counter.showCounter
	);

	const incrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(increment(10));
	};

	const decrementHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(decrement(10));
	};

	const toggleCounterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(toggleCounter(!showCounter));
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
