import React from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { Meal } from "@/components/meals/MealsGrid";
import { notFound } from "next/navigation";
import { describe } from "node:test";

type Params = {
	params: { mealSlug: string };
};
export async function generateMetadata({ params }: Params) {
	const meal = getMeal(params.mealSlug);
	if (!meal) {
		notFound();
	}
	return { title: meal.title, description: meal.summary };
}

const MealDetailsPage = ({ params }: Params) => {
	const meal = getMeal(params.mealSlug);
	if (!meal) {
		notFound();
	}
	meal.instructions = meal.instructions.replace(/\n/g, "</br>");
	return (
		<>
			<header className="flex py-8 px-4 gap-12 m-auto max-w-80rem">
				<div className="relative h-80 w-30rem">
					<Image
						src={meal.image}
						fill
						alt=""
						className="object-cover rounded-[8px] shadow-md anima animate-slideInFromLeft "
					/>
				</div>
				<div className="pt-2 px-4 pb-0 text-light max-w-40rem animate-slideInFromRight ">
					<h1 className="m-0 text-6xl uppercase drop-shadow-xl  ">
						{meal.title}
					</h1>
					<p className=" text-2xl italic">
						by{" "}
						<a
							href={`mailto:${meal.email}`}
							className="bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-gradient2 hover:from-gradient2 hover:to-gradient1 focus:from-gradient2 focus:to-gradient1">
							{meal.creator}
						</a>
					</p>
					<p className="text-2xl">{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className="text-lg bg-bg rounded-2xl shadow-lg p-8 my-8 mx-auto w-90p animate-slideInFromBottom "
					dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
			</main>
			;
		</>
	);
};

export default MealDetailsPage;
