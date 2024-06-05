"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

type Props = {
	label: string;
	name: string;
};
const ImagePicker = ({ label, name }: Props) => {
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);
	const ref = useRef<HTMLInputElement | null>(null);
	const handlePickClick = () => {
		if (ref.current) ref.current.click();
	};
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let file;
		if (e?.target?.files) {
			file = e.target.files[0];
		}
		if (!file) {
			setImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	console.log(image);

	return (
		<div>
			<label htmlFor={name} className="label">
				{label}
			</label>
			<div className="flex items-start gap-6 mb-4">
				<div className="w-40 h-40 border  border-pickerColor flex justify-center items-center text-center text-pickerColor relative">
					{!image && <p className="m-0 p-4">No image picked yet!</p>}

					{typeof image === "string" && (
						<Image
							className="object-cover"
							src={image}
							alt="The image selected by user"
							fill
						/>
					)}
				</div>
				<input
					ref={ref}
					className="hidden"
					type="file"
					id={name}
					accept="image/png. image/jpg"
					name={name}
					onChange={handleImageChange}
				/>
				<button
					className="border-none py-2 px-6 rounded-md inherit bg-pickerColor  duration-500 hover:bg-pickerColorHover focus:bg-pickerColorHover"
					type="button"
					onClick={handlePickClick}>
					Pick Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
