import React from "react";

import "./App.css";

function App() {
	const getDataHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(event);

		fetch("http://localhost:3000/api/smartphones")
			.then((response) => {
				return response;
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<div>
				<button onClick={getDataHandler}>Get Data</button>
			</div>
		</div>
	);
}

export default App;
