//Comments help me rember stuff

import { sections } from './data/sections';
import { Link } from 'react-router-dom';

const funFacts = [
	'John Doe was voiced by three different actors!',
	'The first episode of John Doe Show was shot in a barn!',
	"John Doe's sidekick was originally supposed to be a robot!",
	'John Doe Show had a crossover episode with an alien detective!',
	'The theme song for John Doe Show won a Grammy!',
];

const happyUsers = Math.floor(Math.random() * 666) + 1;
const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

const RoomTwo = () => (
	<div className='min-h-screen bg-gradient-to-r from-pink-300 via-purple-400 to-green-300 flex flex-col items-center p-4'>
		<header className='w-full bg-yellow-500 py-6 text-center shadow-md'>
			<h1 className='text-5xl font-extrabold text-red-700 underline'>
				John Doe Show!!!
			</h1>
			<p className='text-xl text-blue-900 italic mt-2'>
				A Journey of Magic and Wonder!
			</p>
		</header>

		<div className='w-full bg-green-600 text-white text-center py-4 mt-4'>
			<p className='text-2xl font-bold'>
				Join our concurrent {happyUsers} Happy Users on this Magical Journey!
			</p>
		</div>

		<main className='w-full p-6 bg-pink-200 border-t-4 border-green-500'>
			<div className='flex flex-col md:flex-row justify-between'>
				<section className='w-full md:w-2/3 bg-blue-100 p-6 rounded-lg border-8 border-red-700 shadow-lg mb-6'>
					<h2 className='text-3xl font-mono text-green-800 mb-4 underline'>
						Welcome to the John Doe Show!
					</h2>
					<p className='text-lg text-purple-800 font-bold'>
						Join John Doe as he explores fantastical worlds, encounters mythical
						creatures, and learns valuable life lessons! Experience the magic
						that enchanted millions of children around the globe. Journey
						through the heartwarming, humorous, and sometimes mysterious
						adventures of John Doe and friends!
					</p>
				</section>

				<section className='w-full md:w-1/3 bg-yellow-100 p-6 rounded-lg border-8 border-blue-700 shadow-lg mb-6 ml-0 md:ml-4'>
					<h2 className='text-3xl font-mono text-red-800 mb-4 underline'>
						Did You Know?
					</h2>
					<p className='text-lg text-blue-900 font-bold'>{randomFact}</p>
				</section>
			</div>

			<section className='space-y-8'>
				{sections.map(({ imgSrc, alt, title, description, link }) => (
					<div
						key={title}
						className='w-full p-6 bg-white border-4 border-purple-900 shadow-xl'
					>
						<img
							src={imgSrc}
							alt={alt}
							className='w-1/2 h-auto mb-4 mx-auto border-2 border-blue-600'
						/>
						<Link
							to={link}
							className='text-center text-lg font-bold text-red-600'
						>
							{title}
						</Link>
						<p className='text-sm text-purple-800 mt-2'>{description}</p>
					</div>
				))}
			</section>
		</main>

		<footer className='w-full bg-yellow-500 py-8 text-center border-t-8 border-purple-700 shadow-inner'>
			<p className='text-lg font-mono text-purple-900'>
				&copy; 2024 John Doe Show!!! ALL RIGHTS RESERVED!!!!
			</p>
		</footer>
	</div>
);

export default RoomTwo;
