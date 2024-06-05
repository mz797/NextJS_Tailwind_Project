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
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} fill alt="" />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
			</main>
			;
		</>
	);
};

export default MealDetailsPage;
