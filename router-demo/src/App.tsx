import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";

import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/products", element: <Products /> },
			{ path: "/products/:prdId", element: <ProductDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
