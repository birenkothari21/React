import React, { useState, useReducer } from "react";
import "./NewTodo.css";
import { spawn } from "child_process";

type NewTodoProps = {
	onAddTodo: (text: string) => void;
};

type todo = {
	task: string;
	isValid: boolean | null;
};

type actionType = {
	type: "INPUT_TYPING" | "INPUT_BLUR";
	task: string;
};

function reducer(state: todo, action: actionType): todo {
	if (action.type === "INPUT_TYPING") {
		return { task: action.task, isValid: action.task.length > 0 };
	}
	if (action.type === "INPUT_BLUR") {
		return { task: state.task, isValid: state.task.length > 0 };
	}
	return state;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
	// const [isValid, setIsValid] = useState(true);
	const [newTodo, setNewTodo] = useReducer(reducer, {
		task: "",
		isValid: null,
	});

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		setNewTodo({ type: "INPUT_BLUR", task: newTodo.task });

		if (newTodo.isValid) {
			props.onAddTodo(newTodo.task);
		}
	};

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo({ type: "INPUT_TYPING", task: event.target.value });
	};

	const inputValidateHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewTodo({ type: "INPUT_BLUR", task: newTodo.task });
	};

	return (
		<div
			className={`form-control ${
				newTodo.isValid === false ? "invalid" : ""
			}`}
		>
			<form onSubmit={submitHandler}>
				<label htmlFor="todoInput">Add New Task : </label>
				<input
					type="text"
					id="todoInput"
					onChange={inputChangeHandler}
					onBlur={inputValidateHandler}
				/>
				<button type="submit">Add Task</button>
				{newTodo.isValid === false && (
					<span
						style={{
							fontSize: 13 + "px",
							color: "red",
							margin: 10 + "px",
						}}
					>
						please fill above field
					</span>
				)}
			</form>
		</div>
	);
};

export default NewTodo;
