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
		console.log("Task Added By User : ", text);
		setTodos((prev) => [...prev, { id: Math.random() * 1000, task: text }]);
	};

	return (
		<div className="App">
			<h2>To-Do List : </h2>
			<NewTodo onAddTodo={addTodoHandler} />
			<TodoList todolist={todos} />
		</div>
	);
};

export default App;
