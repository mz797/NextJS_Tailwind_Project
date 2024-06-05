"use client";
import React from "react";

const ErrorPage = ({ error }: any) => {
	console.log(error);

	return (
		<main className="error">
			<h1>An error occurred!</h1>
			<p>Failed to share. Please try again later.</p>
		</main>
	);
};

export default ErrorPage;
