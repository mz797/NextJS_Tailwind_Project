import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import LoadingOut from "./loading-out";

export const metadata = {
	title: "All meals",
	description: "Delicious meals, shared by a food-loving community.",
};

const Meals = async () => {
	const meals = await getMeals();
	console.log("featching...");

	return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero, dolorem.
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your favorite recipe </Link>{" "}
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<LoadingOut />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
