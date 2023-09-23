import React, { useState, useRef } from "react";
import UserForm from "./components/Forms/UserForm";
import UserList from "./components/UserList/UserList";

import "./App.css";

type user = {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
};

function App() {
	const [users, setUsers] = useState<user[]>([]);

	const addUser = (user: user) => {
		setUsers((prev) => [
			...prev,
			{
				firstName: user.firstName,
				lastName: user.lastName,
				age: user.age,
				email: user.email,
			},
		]);
	};

	return (
		<div>
			<UserForm onSubmitForm={addUser}></UserForm>
			<UserList users={users}></UserList>
		</div>
	);
}

export default App;
