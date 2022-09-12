import React, { useEffect, useState } from 'react';
import ExerciseCard from '../../components/ExerciseCard';
import { exercisesOptions, getData, youtubeOptions } from '../../services';

const ExerciseDetail = ({ exercise, youtubeVideos }) => {

	const [similarTargetMuscles, setSimilarTargetMuscles] = useState([]);
	const [similarEquipment, setSimilarEquipment] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			await getData(
				`https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}`,
				exercisesOptions
			).then((d) => setSimilarTargetMuscles(d.slice(0, 8)));
			await getData(
				`https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise.equipment}`,
				exercisesOptions
			).then((d) => setSimilarEquipment(d.slice(0, 8)));
		};
		fetchData();
	}, [exercise]);
	return (
		<div className="container mx-auto p-7">
			<div className=" flex items-start gap-6 ">
				<img src={exercise.gifUrl} alt="" className="flex-1 " />
				<div className="flex-1">
					<h1 className="font-bold text-2xl ">{exercise.name}</h1>
					<p className="mt-20 mb-5">
						this exercise focuse on :{' '}
						<span className="text-green-600 font-bold pl-1  ">
							{exercise.target}
						</span>{' '}
					</p>
					<p>
						the equipment for this exercise is :{' '}
						<b className="pl-1">{exercise.equipment}</b>
					</p>
				</div>
			</div>
			{/* exercises Vdeos */}
			<h1 className="font-bold my-7 text-4xl mt-20">
				Here&apos;s somme <span className="text-red-500">youtube videos</span>{' '}
				that show you how to do it{' '}
			</h1>
			{/* <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center mt-20 gap-7 xs:grid-cols-1">
				{youtubeVideos &&
					youtubeVideos.slice(0, 6).map(({ video }, i) => {
						return (
							<a
								key={i}
								target="_blank"
								className=" rounded overflow-hidden "
								rel="noreferrer"
								href={`https://youtube.com/watch?v=${video.videoId}`}
							>
								<div className="outline-2">
									<div className="relative">
										<img
											className="w-full h-full object-cover max-h-64"
											src={video.thumbnails[0].url}
											alt={video.title}
										/>
										<span className="absolute bottom-0 right-0 font-bold bg-black rounded p-1 opacity-80 ">
											{video.lengthText}
										</span>
									</div>
									<div className="">
										<h1 className="font-bold mt-2">{video.title}</h1>
										<h5 className="text-sx text-gray-400">
											{video.channelName}
										</h5>
									</div>
								</div>
							</a>
						);
					})}
			</div> */}
			{/* Similar Exercises */}

			<h1 className="font-bold my-7 text-4xl mt-20">
				similar <span className="text-red-500">Target Muscles</span> exercises{' '}
			</h1>
			<div
				id="exercises"
				className="container p-7 gap-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
			>
				{similarTargetMuscles.map((e) => (
					<ExerciseCard key={e.id} exercise={e} />
				))}
			</div>

			<h1 className="font-bold my-7 text-4xl mt-20">
				similar <span className="text-red-500">Equipment</span> exercises{' '}
			</h1>
			<div
				id="exercises"
				className="container p-7 gap-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
			>
				{similarEquipment.map((e) => (
					<ExerciseCard key={e.id} exercise={e} />
				))}
			</div>
		</div>
	);
};

export default ExerciseDetail;

export const getStaticPaths = async () => {
	const exercises = await getData(
		'https://exercisedb.p.rapidapi.com/exercises',
		exercisesOptions
	).then((d) => d);
	return {
		paths: exercises.map((e) => ({
			params: { id: e.id },
		})),
		fallback: true,
	};
};

export const getStaticProps = async ({ params: { id } }) => {
	const exercise = await fetch(
		`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
		exercisesOptions
	)
		.then((res) => res.json())
		.then((d) => d);
	let youtubeVideos = [];
	let flag = 0
	try {
		youtubeVideos = await fetch(
			`https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}+exercise`,
			youtubeOptions
		)
			.then((res) => res.json())
			.then((d) => d);
	} catch (error) {
		flag = 1
		console.log(error)
	}
	return {
		props: {
			exercise,
			youtubeVideos: [] 
			//  youtubeVideos.contents,

		},
	};
};
