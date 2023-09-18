import React, { useState } from "react";
import ReadtDom from "react-dom";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Wrapper from "./Wrapper";
import style from "./App.module.css";

type todo = {
	id: number;
	task: string;
};

const App: React.FC = () => {
	const [todos, setTodos] = useState<todo[]>([]);

	const addTodoHandler = (text: string) => {
		const id: number = Math.round(Math.random() * 10000);
		setTodos((prev) => [...prev, { id: id, task: text }]);
	};

	const deleteTodoHandler = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<React.Fragment>
			<div className={style.App}>
				<h2 className={style.heading}>To-Do List : </h2>
				<NewTodo onAddTodo={addTodoHandler} />
				<TodoList
					todolist={todos}
					onDeleteTodo={deleteTodoHandler}
				/>
			</div>
			<div>
				<h2 style={{ textAlign: "center" }}>This is My To-Do List</h2>
				{ReadtDom.createPortal(
					<h2 style={{ textAlign: "center" }}>React Portal</h2>,
					document.getElementById("heading")!
				)}
			</div>
		</React.Fragment>

		// <Wrapper>
		// 	<div className={style.App}>
		// 		<h2 className={style.heading}>To-Do List : </h2>
		// 		<NewTodo onAddTodo={addTodoHandler} />
		// 		<TodoList
		// 			todolist={todos}
		// 			onDeleteTodo={deleteTodoHandler}
		// 		/>
		// 	</div>
		// 	<div>
		// 		<h2 style={{ textAlign: "center" }}>This is My To-Do List</h2>
		// 	</div>
		// </Wrapper>
	);
};

export default App;
