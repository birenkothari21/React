import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<>
			<h2>Product Detail </h2>
			<p>Product Id : {params.prdId}</p>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</button>
		</>
	);
};

export default ProductDetail;
