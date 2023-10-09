import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "./ProductList.css";

interface proptype {
	prdId: number;
	prdName: string;
	prdPrice: number;
	prdCategory: string;
	prdCompany: string;
}

const ProductList: React.FC = () => {
	const [products, setProducts] = useState<proptype[]>([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/products/show")
			.then((response) => {
				return response.json();
			})
			.then((data: proptype[]) => {
				console.log(data);
				setProducts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="product-list">
			{products.map((prd) => {
				return (
					<div key={prd.prdId}>
						<ProductItem
							key={prd.prdId}
							prdId={prd.prdId}
							prdName={prd.prdName}
							prdPrice={prd.prdPrice}
							prdCategory={prd.prdCategory}
							prdCompany={prd.prdCompany}
						></ProductItem>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
