import React from "react";
import classes from "./page.module.css";

const ShareDetailsPage = ({ params }: { params: { mealSlug: string } }) => {
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}></div>
			</header>
			<main></main>;
		</>
	);
};

export default ShareDetailsPage;
