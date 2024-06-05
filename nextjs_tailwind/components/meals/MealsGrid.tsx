import React from "react";
import classes from "./mealsGrid.module.css";
import MealItem from "./MealItem";
type Props = {
	meals: Meal[];
};
export type Meal = {
	id: string;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
};
const MealsGrid = ({ meals }: any) => {
	return (
		<ul className={classes.meals}>
			{meals.map((meal: Meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
