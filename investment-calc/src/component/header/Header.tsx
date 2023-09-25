import React from "react";

import classes from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<>
			<div className={classes["header-heading"]}>
				<h2>Investment Calculator</h2>
			</div>
		</>
	);
};

export default Header;
