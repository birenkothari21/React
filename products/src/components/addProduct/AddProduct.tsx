import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import "./AddProduct.css";

const AddProduct: React.FC = () => {
	const [toggleForm, setToggleForm] = useState(false);

	const addFormHandler = () => {
		setToggleForm((prev) => !prev);
	};

	return (
		<>
			<div className="add-procuct">
				<button onClick={addFormHandler}>
					{!toggleForm ? "Add Product" : "Close Form"}
				</button>
			</div>
			{toggleForm && <AddProductForm></AddProductForm>}
		</>
	);
};

export default AddProduct;
