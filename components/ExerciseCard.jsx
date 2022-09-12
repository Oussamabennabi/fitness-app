import Link from 'next/link';
import React from 'react';

const ExerciseCard = ({ exercise }) => {
	return (
		<Link href={`/exercises/${exercise.id}`}>
			<div className="rounded bg-orang outline felx outline-2 flex-col justify-between cursor-pointer transition-all duration-200 hover:scale-105 outline-red-500  ">
				<div className=" bg-white relative">
					<img
						loading="lazy"
						src={exercise.gifUrl}
						alt={exercise.name}
						className="w-full"
					/>
					<span className="bg-green-600 top-1 right-1 rounded lg:hidden absolute px-2 py-1">
						{exercise.target}
					</span>
				</div>
				<div className="p-2 font-bold  ">
					<h1 className="">{exercise.name}</h1>
					<div className="mt-4 flex-col flex items-start gap-2">
						<span className="bg-green-600 lg:inline-block hidden mr-3 rounded px-2 py-1">
							{exercise.target}
						</span>
						<span className="text-sm">{exercise.equipment}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ExerciseCard;
