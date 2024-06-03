"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";
const MainHeader = () => {
	const path = usePathname();
	console.log(path.startsWith("/meals"));

	return (
		<header className={"flex justify-between  items-center py-8 px-4"}>
			<Link
				href="/"
				className={
					"flex items-center justify-center gap-8 color-orange-200 font-bold uppercase text-2xl"
				}>
				<Image
					className="w-20 h-20 object-contain"
					src={logoImg}
					alt=""
				/>
				NextLevel Food
			</Link>
			<nav>
				<ul
					className={
						"m-0 p-0 flex gap-6 text-xl [&>li>a]:text-orange-200 [&>li>a]:font-bold [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:rounded-lg"
					}>
					<li
						className={
							path.startsWith("/meals")
								? "[&>a]:bg-clip-text [&>a]:text-transparent [&>a]:bg-gradient-to-tr [&>a]:from-red-400 [&>a]:to-yellow-300"
								: undefined
						}>
						<Link href="/meals">Brows Meals</Link>
					</li>
					<li
						className={
							path === "/community"
								? "[&>a]:bg-clip-text [&>a]:text-transparent [&>a]:bg-gradient-to-tr [&>a]:from-red-400 [&>a]:to-yellow-300"
								: "[&>a]:text-red-400"
						}>
						<Link href="/community" className="text-red-400">
							Foodies Community
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
