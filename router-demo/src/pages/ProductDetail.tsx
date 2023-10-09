import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
	const params = useParams();

	return (
		<>
			<h2>Product Detail </h2>
			<p>Product Id : {params.prdId}</p>
		</>
	);
};

export default ProductDetail;
