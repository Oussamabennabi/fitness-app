import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
function selectImage(text) {
	let image;
	switch (text) {
		case 'back':
			image = '/back.jpg';
			break;
		case 'cardio':
			image = '/cardio.jpg';
			break;
		case 'chest':
			image = '/chest.png';
			break;
		case 'lower arms':
			image = '/arms.jpeg';
			break;
		case 'lower legs':
			image = '/legs.avif';
			break;
		case 'upper arms':
			image = '/arms.jpeg';
			break;
		case 'upper legs':
			image = '/legs.avif';
			break;
		case 'shoulders':
			image = '/shoulders.jpg';
			break;
		case 'neck':
			image = '/neck.webp';
			break;
		case 'waist':
			image = '/waist.jpg';
			break;
		case 'all':
			image = '/all.jpg';
			break;
		default:
			return '';
	}
	return image;
}
const SingleCategoriCard = ({
	part,
	selectedBodyPart,
	setSelectedBodyPart,
	setPrevSelectedBodyPart,
}) => {
	return (
		<a href={`#exercises`}>
			<article
				onClick={() => {
		
					setPrevSelectedBodyPart(selectedBodyPart);
						setSelectedBodyPart(part);
				}}
				className="rounded-lg cursor-pointer   transition-all duration-300 hover:border-white hover:border hover:scale-95 overflow-hidden w-full bg-red-500 h-48 relative"
			>
				<div className="absolute inset-0 bg-black opacity-40"></div>
				<h1 className="font-bold text-2xl  text-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
					{part}
				</h1>
				<img
					className="w-full object-cover h-full "
					src={selectImage(part)}
					alt={part}
				/>
			</article>
		</a>
	);
};

export default SingleCategoriCard;
