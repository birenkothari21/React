import React from "react";

type todo = {
	todolist: { id: number; task: string }[];
};

const TodoList: React.FC<todo> = (props) => {
	return (
		<div>
			<ul>
				{props.todolist.map((todo) => {
					// console.log(todo.id);
					return <li key={todo.id}>{todo.task}</li>;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
