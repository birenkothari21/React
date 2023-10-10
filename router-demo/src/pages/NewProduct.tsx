import React from "react";
import { Form, ActionFunction, redirect } from "react-router-dom";
import {} from "react-router-dom";

const NewProduct: React.FC = () => {
	return (
		<>
			<Form method="post">
				<label> Product Title</label>
				<input
					type="text"
					name="prdTitle"
				/>
				<button type="submit">Add</button>
			</Form>
		</>
	);
};

export default NewProduct;

export const action: ActionFunction = async ({ request, params }) => {
	const data = await request.formData();
	const title = data.get("prdTitle");
	console.log(title);
	return redirect("/");
};
