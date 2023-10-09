import React from "react";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
	return (
		<>
			<h1>Products Page</h1>
			<ul>
				<li>
					<Link to={"/products/prd_1"}>Product 1</Link>
				</li>
				<li>
					<Link to={"/products/prd_2"}>Product 2</Link>
				</li>
				<li>
					<Link to={"/products/prd_3"}>Product 3</Link>
				</li>
				<li>
					<Link to={"/products/prd_4"}>Product 4</Link>
				</li>
				<li>
					<Link to={"/products/prd_5"}>Product 5</Link>
				</li>
			</ul>
		</>
	);
};

export default Products;
