import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<nav className="container border-b border-red-500 mx-auto flex justify-start gap-10 items-center">
			<Link href={'/'}>
				<Image
					width={150}
					height={150}
					className="object-cover cursor-pointer"
					src="/Logo.png"
					alt="I GYM"
				/>
			</Link>
			<ul className="flex gap-5">
				<Link href={'/'}>
					<li className="text-red-500 cursor-pointer font-bold">Home</li>
				</Link>
				<Link href={'/#exercises'}>
					<li className="text-red-500 cursor-pointer font-bold">
						All Exercises
					</li>
				</Link>
				<Link href={'/#search'}>
					<li className="text-red-500 cursor-pointer font-bold">
						Search for exercise
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;
