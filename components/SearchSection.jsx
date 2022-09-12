import React from 'react';
import SingleCategoriCard from './SingleCategoriCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const SearchSection = ({
	bodyParts,
	setSelectedBodyPart,
	setPrevSelectedBodyPart,
	selectedBodyPart,
	setSearchedExercises,
	setSearchValue,
	searchValue,
	exercises,
}) => {

	const handleChange =(value)=> {
		setSearchValue(value);
		if (searchValue) {
			setSearchedExercises(
				exercises.filter(
					(exercise) =>
						exercise.bodyPart.toLowerCase().includes(searchValue) ||
						exercise.name.toLowerCase().includes(searchValue) ||
						exercise.target.toLowerCase().includes(searchValue) ||
						exercise.equipment.toLowerCase().includes(searchValue)
				)
			);
			
		}

	}
	console.log(searchValue);

	
	return (
		<div
			className="container mx-auto p-7 mb-28 lg:p-0 mt-10 flex justify-start flex-col items-center h-96"
			id="search"
		>
			<h1 className="font-bold text-center lg:text-left text-4xl mb-10 mt-14 md:text-5xl">
				Search Up For 1300+ Exercises
			</h1>
			<div className="h-16 flex justify-center float-right w-full">
				<input
					type="text"
					className=" h-full w-full max-w-4xl rounded outline-none text-black px-5 py-4 text-xl"
					placeholder="search for an exercise"
					value={searchValue}
					onChange={(e) => handleChange(e.target.value)}
				/>
				<button
					type="submit"
					className="h-full bg-red-600 ml-4 px-7 py-4 font-semibold rounded "
				>
					Search
				</button>
			</div>
			{/* Categories Section */}
			<div className="mb-20 mt-10 w-full h-96 ">
				<Carousel
					infinite
					autoPlay
					ssr={true}
					showStatus={false}
					responsive={responsive}
					containerClass="gap-5"
				>
					<SingleCategoriCard
						selectedBodyPart={selectedBodyPart}
						setSelectedBodyPart={setSelectedBodyPart}
						part={'all'}
						setPrevSelectedBodyPart={setPrevSelectedBodyPart}
					/>

					{bodyParts.map((part, i) => (
						<SingleCategoriCard
							selectedBodyPart={selectedBodyPart}
							setSelectedBodyPart={setSelectedBodyPart}
							key={i}
							part={part}
							setPrevSelectedBodyPart={setPrevSelectedBodyPart}
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default SearchSection;
