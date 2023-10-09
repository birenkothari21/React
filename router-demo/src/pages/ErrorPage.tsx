import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
	return (
		<>
			<h2>ERROR!</h2>
			<p>Oops, Error occuured with this path.</p>
			<Link to="/"> Visit Home Page</Link>
		</>
	);
};

export default ErrorPage;
