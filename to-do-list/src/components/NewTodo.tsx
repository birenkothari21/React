import React, { useState } from "react";
import "./NewTodo.css";

type NewTodoProps = {
	onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const [isValid, setIsValid] = useState(true);
	const [newTodo, setNewTodo] = useState("");

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (newTodo.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.onAddTodo(newTodo);
		setNewTodo("");
	};

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setNewTodo(event.target.value);
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
