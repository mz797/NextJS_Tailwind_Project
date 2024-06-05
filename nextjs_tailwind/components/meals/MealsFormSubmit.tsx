"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="border-none py-3 px-8 bg-gradient-to-r from-gradient1 to-gradient2 rounded-[2px] text-inherit text-lg  shadow-xl  hover:from-gradient2 hover:to-gradient1 disabled:text-[#979797] disabled:bg-[#ccc] disabled:cursor-not-allowed hover:disabled:text-[#979797] hover:disabled:bg-[#ccc] hover:disabled:cursor-not-allowed focus:disabled:text-[#979797] focus:disabled:bg-[#ccc] focus:disabled:cursor-not-allowed  ">
			{pending ? "Submitting..." : "Share Meal"}
		</button>
	);
};

export default MealsFormSubmit;
