import { Pagination } from '@mui/material';
import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 16;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = data.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);
	const paginate = (e, page) => {
		setCurrentPage(page);
		const exercicesEl = document.getElementById('exercises');
		exercicesEl.scrollIntoView();
	};
	return (
		<div className="container p-7 mx-auto">
			<div
				id="exercises"
				className="container p-7 gap-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
			>
				{currentExercises.map((e) => (
					<ExerciseCard key={e.id} exercise={e} />
				))}
			</div>
			<div className="mx-auto flex items-center">
				{data.length > 15 && (
					<Pagination
						className="mx-auto rounded py-2 px-3"
						color="secondary"
						sx={{ bgcolor: 'white' }}
						count={Math.ceil(data.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</div>
		</div>
	);
};

export default Exercises;
