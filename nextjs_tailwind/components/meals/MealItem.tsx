import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./mealItem.module.css";

type Props = {
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
};
const MealItem = ({ title, slug, image, summary, creator }: Props) => {
	return (
		<article className="flex flex-col justify-between h-full rounded-md shadow-md overflow-hidden transition text-light  bg-gradient-to-r from-gradientM1 to-gradientM2 ">
			<header>
				<div className="relative h-60">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover"
					/>
				</div>
				<div className="pt-2 px-4 pb-4 ">
					<h2 className="m-0 text-2xl text-mealTitle italic ">
						{title}
					</h2>
					<p className="text-sm m-0">by {creator}</p>
				</div>
			</header>
			<div className="flex flex-col justify-between h-full">
				<p className="pt-4 px-4 pb-0">{summary}</p>
				<div className="p-4 text-right">
					<Link
						href={`/meals/${slug}`}
						className="inline-block mt-4 py-2 px-4 rounded-sm bg-gradient-to-tr from-gradient1 to-gradient2 text-white font-bold hover:from-gradient2 hover:to-gradient1 hober:shadow-xl active:from-gradient2 active:to-gradient1 active:shadow-xl ">
						View Details
					</Link>
				</div>
			</div>
		</article>
	);
};

export default MealItem;
