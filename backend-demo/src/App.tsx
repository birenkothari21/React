import React from "react";

import "./App.css";

function App() {
	const getDataHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/api/products/show");
			console.log(response);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const getSingleDataHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/api/smartphones/3");
			console.log(response);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<div>
				<button onClick={getDataHandler}>Get Data</button>
				<button onClick={getSingleDataHandler}>Get Single Data</button>
			</div>
		</div>
	);
}

export default App;
