import React from "react";
import "./AddProductForm.css";

const AddProductForm: React.FC = () => {
	return (
		<div className="add-product-form">
			<form action="">
				<div className="form-control">
					<label htmlFor=""> Product Name </label>
					<input
						type="text"
						name="prd-name"
						id="prd-name"
						placeholder="Product Name"
					/>
				</div>
				<div className="form-control">
					<label htmlFor=""> Product Price </label>
					<input
						type="text"
						name="prd-name"
						id="prd-name"
						placeholder="Product Name"
					/>
				</div>
				<div className="form-control">
					<label htmlFor=""> Product Category </label>
					<input
						type="text"
						name="prd-name"
						id="prd-name"
						placeholder="Product Name"
					/>
				</div>
				<div className="form-control">
					<label htmlFor=""> Product Company </label>
					<input
						type="text"
						name="prd-name"
						id="prd-name"
						placeholder="Product Name"
					/>
				</div>
				<div className="form-control-actions">
					<button
						type="reset"
						className="btn-cancel"
					>
						Reset
					</button>
					<button
						type="submit"
						className="btn-submit"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddProductForm;
