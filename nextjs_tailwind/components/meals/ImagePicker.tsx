"use client";
import React, { RefAttributes, useRef, useState } from "react";
import classes from "./imagePicker.module.css";
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
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!image && <p>No image picked yet!</p>}
					{typeof image === "object" && (
						<Image
							src={(image as ArrayBuffer)?.toString()}
							alt="The image selected by user"
							fill
						/>
					)}
					{typeof image === "string" && (
						<Image
							src={image}
							alt="The image selected by user"
							fill
						/>
					)}
				</div>
				<input
					ref={ref}
					className={classes.input}
					type="file"
					id={name}
					accept="image/png. image/jpg"
					name={name}
					onChange={handleImageChange}
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}>
					Pick Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
