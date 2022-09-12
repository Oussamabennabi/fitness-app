import React from 'react';

const Hero = () => {
	return (
		<div className="container lg:pl-5 p-7 lg:p-0 border-b  border-red-500 mx-auto flex flex-col lg:flex-row sm:flex-col lg:mt-20 justify-between">
			<div className="flex-1 text-center lg:text-left order-2 lg:order-1">
				<hgroup>
					<h1 className="font-bold  pt-7 lg:pt-0 text-4xl  md:text-5xl">
						You Only Fail, When You Stop Trying
					</h1>
					<h4 className="font-semibold mt-10 text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						excepturi perferendis ipsa consequatur distinctio totam atque illo
						nihil? Sunt dignissimos reiciendis nam fuga cum sit error facilis
						necessitatibus illum dolorem.
					</h4>
				</hgroup>
				<a href="#exercises" className=" ">
					<button className="mt-8 bg-red-600  px-7 py-4 font-semibold rounded uppercase">
						See All Exercises
					</button>
				</a>
			</div>
			<div className="flex-1 order-1 lg:order-2 mx-auto ">
				<img
					className="w-96 float-none object-cover  lg:float-right"
					src="/banner.png"
					alt="a gym bro"
				/>
			</div>
		</div>
	);
};

export default Hero;
