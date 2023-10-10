import React from "react";
import { Link, useLoaderData, LoaderFunction } from "react-router-dom";

interface product {
	id: string;
	title: string;
}

const products: product[] = [
	{ id: "p1", title: "Product 1" },
	{ id: "p2", title: "Product 2" },
	{ id: "p3", title: "Product 3" },
	{ id: "p4", title: "Product 4" },
	{ id: "p5", title: "Product 5" },
];

const Products: React.FC = () => {
	const products = useLoaderData() as product[];
	console.log(products);

	return (
		<>
			<h1>Products Page</h1>
			<ul>
				{products.map((prod) => {
					return (
						<li key={prod.id}>
							<Link to={`/products/${prod.id}`}>{prod.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Products;

export const loader: LoaderFunction = () => {
	return products;
};
