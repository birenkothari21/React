import React, { useState, useEffect, useReducer } from "react";
import "./NewTodo.css";

type NewTodoProps = {
	onAddTodo: (text: string) => void;
};

type todo = {
	task: string;
};

type actionType = {
	type: "Add" | "Typing";
	task?: string;
};

function reducer(state: todo, action: actionType) {
	switch (action.type) {
		case "Add":
			if (action.task?.length) {
				state.task = action.task;
				return state;
			}
			break;

		case "Typing":
			if (action.task?.length) {
				state.task = action.task;
				return state;
			}
			break;

		default:
			break;
	}
	return state;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const [isValid, setIsValid] = useState(true);
	const [newTodo, setNewTodo] = useReducer(reducer, { task: "New Todo" });

	useEffect(() => {
		console.log("useEffect is working...!");

		return () => {
			console.log("CLEAN_UP");
		};
	}, []);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (newTodo.task.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.onAddTodo(newTodo.task);
		setNewTodo({ type: "Add", task: newTodo.task });
	};

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setNewTodo({ type: "Typing", task: event.target.value });
	};

	return (
		<div className={`form-control ${!isValid ? "invalid" : ""}`}>
			<form onSubmit={submitHandler}>
				<label htmlFor="todoInput">Add New Task : </label>
				<input
					type="text"
					id="todoInput"
					onChange={inputChangeHandler}
				/>
				<button type="submit">Add Task</button>
			</form>
		</div>
	);
};

export default NewTodo;
