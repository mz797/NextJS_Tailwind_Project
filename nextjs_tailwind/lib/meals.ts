import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
const db = sql("meals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string): any {
	return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}
export type Meal = {
	title: string | undefined;
	creator: string | undefined;
	summary: string | undefined;
	instructions: string | undefined;
	image: FormDataEntryValue | null;
	creator_email: string | undefined;
};
export type DBMeal = {
	title: string | undefined;
	creator: string | undefined;
	summary: string | undefined;
	instructions: string | undefined;
	image: string;
	creator_email: string | undefined;

	slug: string;
};

export async function saveMeal(meal: Meal) {
	let newMeal: DBMeal = { ...meal, image: "", slug: "" };
	newMeal.slug = slugify(meal.title || "", { lower: true });
	newMeal.instructions = xss(meal.instructions || "");

	if (meal.image instanceof File) {
		const extention = meal.image.name.split(".").pop();
		const fileName = `${newMeal.slug}.${extention}`;
		const stream = fs.createWriteStream(`public/images/${fileName}`);
		const bufferedImage = await meal.image.arrayBuffer();
		stream.write(Buffer.from(bufferedImage), (error) => {
			if (error) throw Error("Saving image failed!");
		});
		newMeal.image = `/images/${fileName}`;
	}

	db.prepare(
		`
	INSERT INTO meals
	(title, summary, instructions, creator, creator_email, image, slug )
	VALUES( 
		@title,
		@summary,
		@instructions,
		@creator,
		@creator_email,
		@image,
		@slug)
	`
	).run(newMeal);
}
