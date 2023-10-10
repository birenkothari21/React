import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";

import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

import { loader as productsLoader } from "./pages/Products";
import NewProduct, { action as addAction } from "./pages/NewProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/products",
				element: <Products />,
				loader: productsLoader,
			},
			{
				path: "/products/:prdId",
				element: <ProductDetail />,
			},
			{ path: "/products/new", element: <NewProduct />, action: addAction },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
