import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
// import classes from "./page.module.css";

export default function CommunityPage() {
	return (
		<>
			<header className="gap-12 mt-12 mb-20 tx-auto  text-orange-200 text-xl text-center">
				<h1 className="font-bold text-4xl mb-8 w-11/12">
					One shared passion:{" "}
					<span
						className={
							"bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-yellow-300"
						}>
						Food
					</span>
				</h1>
				<p>Join our community and share your favorite recipes!</p>
			</header>
			<main
				className="w-11/12  my-0 mx-auto text-center"
				style={{ maxWidth: "40rem" }}>
				<h2 className="text-3xl mb-12 text-orange-200 ">
					Community Perks
				</h2>

				<ul
					className={
						"my-12 mx-0 p0 [&>li]:flex [&>li]:flex-col [&>li]:items-center gap-8 [&>li>img]:w-32 [&>li>img]:h-32 [&>li>img]:object-contain [&>li>p]:text-orange-200 [&>li>p]:font-bold"
					}>
					<li>
						<Image src={mealIcon} alt="A delicious meal" />
						<p>Share & discover recipes</p>
					</li>
					<li>
						<Image
							src={communityIcon}
							alt="A crowd of people, cooking"
						/>
						<p>Find new friends & like-minded people</p>
					</li>
					<li>
						<Image
							src={eventsIcon}
							alt="A crowd of people at a cooking event"
						/>
						<p>Participate in exclusive events</p>
					</li>
				</ul>
			</main>
		</>
	);
}
