import React from "react";
import ProductList from "./components/productList/ProductList";
import AddProduct from "./components/addProduct/AddProduct";

import "./App.css";

function App() {
	return (
		<div className="App">
			<h2>Product List</h2>
			<AddProduct></AddProduct>
			<ProductList></ProductList>
		</div>
	);
}

export default App;
