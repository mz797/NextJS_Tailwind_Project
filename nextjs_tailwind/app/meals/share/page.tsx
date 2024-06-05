"use client";
import React from "react";
import ImagePicker from "@/components/meals/ImagePicker";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";
import MealsFormSubmit from "@/components/meals/MealsFormSubmit";

const ShareMealPage = () => {
	const [state, formAction] = useFormState(shareMeal, { message: "" });
	return (
		<>
			<header
				className={
					"gap-12 mt-12 mb-20 mx-auto w-90p max-w-75rem text-light text-2xl"
				}>
				<h1>
					Share your{" "}
					<span className="bg-gradient-to-r from-gradient1 to-gradient2 bg-clip-text text-transparent font-bold">
						favorite meal
					</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className="w-90p max-w-75rem my-12 mx-auto text-white">
				<form className="max-w-50rem" action={formAction}>
					<div className={"w-full"}>
						<p className={"w-full"}>
							<label htmlFor="name" className="label">
								Your name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="input p-2"
								required
							/>
						</p>
						<p className={"w-full"}>
							<label htmlFor="email" className="label">
								Your email
							</label>
							<input
								className="input p-2"
								type="email"
								id="email"
								name="email"
								required
							/>
						</p>
					</div>
					<p>
						<label htmlFor="title" className="label">
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							required
							className="input p-2"
						/>
					</p>
					<p>
						<label htmlFor="summary" className="label">
							Short Summary
						</label>
						<input
							type="text"
							id="summary"
							name="summary"
							required
							className="input p-2"
						/>
					</p>
					<p>
						<label className="label" htmlFor="instructions">
							Instructions
						</label>
						<textarea
							id="instructions"
							name="instructions"
							rows={10}
							className="input p-2"
							required></textarea>
					</p>
					<ImagePicker label="Image" name="image" />
					{state.message && <p>{state.message}</p>}
					<p className="text-right">
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
};

export default ShareMealPage;
