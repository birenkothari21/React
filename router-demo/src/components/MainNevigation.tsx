import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNevigation.module.css";

const MainNevigation: React.FC = () => {
	return (
		<div className={classes.list}>
			<ul>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/products"
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/products/new"
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						Add Product
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default MainNevigation;
