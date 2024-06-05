"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
const isInvalidText = (value: string | undefined) => {
	return !value || value.trim() === "";
};
export const shareMeal = async (
	prevState: { message: string },
	formData: FormData
) => {
	const meal = {
		title: formData.get("title")?.toString(),
		creator: formData.get("name")?.toString(),
		summary: formData.get("summary")?.toString(),
		instructions: formData.get("instructions")?.toString(),
		image: formData.get("image"),
		creator_email: formData.get("email")?.toString(),
	};
	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator_email) ||
		!meal.image
	)
		return {
			message: "Invalid input",
		};
	await saveMeal(meal);
	revalidatePath("/meals", "layout"); // layout - all nested paths will be revalidated
	redirect("/meals");
};
