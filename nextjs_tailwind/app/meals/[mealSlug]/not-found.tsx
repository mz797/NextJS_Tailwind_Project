import React from "react";

const NotFound = () => {
	return (
		<main className="mt-20 text-center ">
			<h1 className="text-7xl m-0 font-black bg-gradient-to-r from-[#f9572a] via-[#ffc905] to-[#f9572a] inline-block text-transparent bg-clip-text ">
				Not found
			</h1>
			<p className="text-2xl font-medium text=[#ddd8d8]">
				Unfortunnatley, we could not find the requested page or meal
				data.
			</p>
		</main>
	);
};

export default NotFound;
