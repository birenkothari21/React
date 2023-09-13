import React, { useRef } from "react";

type NewTodoProps = {
	onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const task = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		props.onAddTodo(task.current!.value);
		task.current!.value = "";
	};

	return (
		<form
			action=""
			onSubmit={submitHandler}
		>
			<label htmlFor="todoInput">Add New Task : </label>
			<input
				type="text"
				id="todoInput"
				ref={task}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default NewTodo;
