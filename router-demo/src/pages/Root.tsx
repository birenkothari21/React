import React from "react";
import { Outlet } from "react-router-dom";
import MainNevigation from "../components/MainNevigation";

const RootLayout: React.FC = () => {
	return (
		<>
			<MainNevigation />
			<Outlet />
		</>
	);
};

export default RootLayout;
