"use client";
import React from "react";

const ErrorPage = ({ error }: any) => {
	console.log(error);

	return (
		<main className="mt-20 text-center">
			<h1 className="text-7xl m-0 font-black bg-gradient-to-r from-[#f9572a] via-[#ffc905] to-[#f9572a] inline-block text-transparent bg-clip-text ">
				An error occurred!
			</h1>
			<p className="text-2xl font-medium text=[#ddd8d8]">
				Failed to fetch meal data. Please try again later.
			</p>
		</main>
	);
};

export default ErrorPage;
