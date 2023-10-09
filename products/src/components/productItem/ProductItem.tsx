import React from "react";
import "./ProductItem.css";

import edit from "../../assets/edit.png";
import del from "../../assets/delete.png";

interface proptype {
	prdId: number;
	prdName: string;
	prdPrice: number;
	prdCategory: string;
	prdCompany: string;
}

const ProductItem: React.FC<proptype> = (props) => {
	return (
		<div
			className="product-item"
			// key={props.prdId}
		>
			<div className="product-desc">
				<h3>{props.prdName}</h3>
				<p>
					<b>Price :</b> {props.prdPrice}
				</p>
				<p>
					<b>Category :</b> {props.prdCategory}
				</p>
				<p>
					<b>Company :</b> {props.prdCompany}
				</p>
			</div>
			<div className="product-action">
				<button>
					<img
						src={edit}
						alt=""
						className="action"
					/>
				</button>
				<button>
					<img
						src={del}
						alt=""
						className="action"
					/>
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
