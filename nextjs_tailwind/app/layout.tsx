import { ReactNode } from "react";
import "./globals.css";
import MainHeader from "@/components/mainHeader/MainHeader";

export const metadata = {
	title: "NextLevel Food",
	description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="m-0 bg-[#282c34]">
				<div className="text-white">
					<MainHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
