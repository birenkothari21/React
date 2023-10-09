import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<>
			<h1>Home Page</h1>
			<p>
				Visit our <Link to="/products"> Products </Link> Page.
			</p>
		</>
	);
};

export default Home;
