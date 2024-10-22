import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/core/router/routes';

const RoomTwo = () => {
	const [inputValue, setInputValue] = useState('');
	const handleInputChange = (e) => setInputValue(e.target.value);
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (inputValue === 'MSDG') {
			//door two logic
			navigate(Routes.TheTruth);
		} else {
			alert('Wrong');
		}
	};

	const largeBreak = <br key={Math.random()} />;
	const breaks = Array.from({ length: 10 }).map(() => largeBreak);

	return (
		<div className='min-h-screen bg-gradient-to-r from-pink-300 via-purple-400 to-green-300 flex flex-col items-center p-4'>
			<header className='w-full bg-yellow-500 py-6 text-center shadow-md'>
				<h1 className='text-5xl font-extrabold text-red-700 underline'>
					John Doe Show!!!
				</h1>
				<p className='text-xl text-blue-900 italic mt-2'>
					A Journey of Magic and Wonder!
				</p>
			</header>

			<main className='w-full p-6 bg-pink-200 border-t-4 border-green-500'>
				<article className='w-full bg-blue-100 p-6 rounded-lg border-8 border-red-700 shadow-lg'>
					<h2 className='text-3xl font-mono text-green-800 mb-4 underline'>
						Why Did the John Doe Show Really End?
					</h2>
					<p className='text-lg text-purple-800 font-bold'>
						The official statement said that the *John Doe Show* ended because
						of declining ratings and budget cuts... but those who were close to
						the production knew a much darker truth.
					</p>

					{breaks}

					<p className='text-lg text-purple-800 font-bold'>
						It started with whispers on the set. Rumors spread among the crew,
						murmurs that John Doe, the show's beloved fictional hero, had become
						too close to the young stars behind the camera. What began as
						innocent interactions soon turned into unsettling stories that none
						could shake. The investors heard these whispers... and they didn’t
						like them.
					</p>

					{breaks}

					<p className='text-lg text-purple-800 font-bold'>
						Despite no official accusations ever surfacing, the tension around
						the production grew unbearable. The investors withdrew their
						funding, citing “moral concerns” that were never fully explained.
						Behind the colorful sets and magical moments on screen, there was
						something darker creeping around the corners, something that
						couldn’t be ignored.
					</p>

					{breaks}

					<p className='text-lg text-purple-800 font-bold'>
						And so, without warning, the show came to an abrupt end, leaving
						behind more questions than answers.
					</p>

					{breaks}

					<p className='text-lg text-purple-800 font-bold'>
						The magic was gone.
					</p>

					{breaks}

					<p className='text-lg text-purple-800 font-bold'>
						Only the silence remained.
					</p>

					{breaks}

					<div className='flex justify-center items-center mt-4'>
						<input
							type='text'
							value={inputValue}
							onChange={handleInputChange}
							className='w-full p-4 border-4 border-purple-900 shadow-lg text-lg font-bold text-red-700 placeholder-red-600'
							placeholder='The start of each of the victim, was the beginning of the end...'
						/>
						<button
							type='button'
							onClick={handleSubmit}
							className='ml-4 p-4 bg-red-700 text-white font-bold rounded-lg shadow-lg'
						>
							Submit
						</button>
					</div>
				</article>
			</main>

			<footer className='w-full bg-yellow-500 py-8 text-center border-t-8 border-purple-700 shadow-inner'>
				<p className='text-lg font-mono text-purple-900'>
					&copy; 2024 John Doe Show!!! ALL RIGHTS RESERVED!!!!
				</p>
			</footer>
		</div>
	);
};

export default RoomTwo;
