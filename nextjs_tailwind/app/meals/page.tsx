import React, { Suspense } from "react";

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
			<header className="gap-12 mt-12 mb-20 mx-auto w-90p text-light text-2xl">
				<h1>
					Delicious meals, created{" "}
					<span className="bg-gradient-to-r from-gradient1 to-gradient2 bg-clip-text text-transparent font-bold">
						by you
					</span>
				</h1>
				<p className="m-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero, dolorem.
				</p>
				<p className={"m-0"}>
					<Link
						className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-gradient1 to-gradient2 color-white font-bold "
						href="/meals/share">
						Share Your favorite recipe{" "}
					</Link>{" "}
				</p>
			</header>
			<main>
				<Suspense fallback={<LoadingOut />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
