import ImageSlideshow from "@/components/images/ImageSlideshow";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className="flex gap-12 my-12 mx-auto w-11/12 max-6xl ">
				<div className="h-96" style={{ width: "40rem" }}>
					<ImageSlideshow />
				</div>
				<div>
					<div className="text-orange-200 text-3xl ">
						<h1 className="text-4xl font-bold uppercase  bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
							NextLevel Food for NextLevel Foodies
						</h1>
						<p>Taste & share food from all over the world</p>
					</div>
					<div className="text-2xl flex gap-4 items-center">
						<Link href="/community" className="mt-4 py-2">
							Join the Community
						</Link>
						<Link
							href="/meals"
							className="inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold bg-gradient-to-r from-red-500 to-yellow-500">
							Explore Meals
						</Link>
					</div>
				</div>
			</header>
			<main className="flex flex-col items-center">
				<section
					className={
						"flex flex-col  text-orange-200 text-xl max-w-3xl w-11/12 text-center my-8 "
					}>
					<h2>How it works</h2>
					<p>
						NextLevel Food is a platform for foodies to share their
						favorite recipes with the world. It&apos;s a place to
						discover new dishes, and to connect with other food
						lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to
						connect with other food lovers.
					</p>
				</section>

				<section
					className={
						"flex flex-col text-orange-200 text-xl max-w-3xl w-11/12 text-center my-"
					}>
					<h2>Why NextLevel Food?</h2>
					<p>
						NextLevel Food is a platform for foodies to share their
						favorite recipes with the world. It&apos;s a place to
						discover new dishes, and to connect with other food
						lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to
						connect with other food lovers.
					</p>
				</section>
			</main>
		</>
	);
}
