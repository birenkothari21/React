import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

type todo = {
	id: number;
	task: string;
};

const App: React.FC = () => {
	const [todos, setTodos] = useState<todo[]>([]);

	const addTodoHandler = (text: string) => {
		const id: number = Math.round(Math.random() * 1000);
		setTodos((prev) => [...prev, { id: id, task: text }]);
	};

	const deleteTodoHandler = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<h2>To-Do List : </h2>
			<NewTodo onAddTodo={addTodoHandler} />
			<TodoList
				todolist={todos}
				onDeleteTodo={deleteTodoHandler}
			/>
		</div>
	);
};

export default App;
