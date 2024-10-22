const TheBeginning = () => (
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
					What is the John Doe Show?
				</h2>
				<p className='text-lg text-purple-800 font-bold'>
					John Doe Show was a beloved children's television series that captured
					the hearts of viewers around the world. The show followed the
					adventures of John Doe, an adventurer who travels through magical
					realms filled with mythical creatures and surreal landscapes. Each
					episode presented John with a new challenge or lesson, often involving
					friendship, bravery, or self-discovery.
				</p>
				<p className='text-lg text-purple-800 font-bold mt-4'>
					The series became famous for its enchanting blend of humor, heart, and
					mystery. With its captivating storytelling and memorable characters,
					John Doe Show became a cultural icon, inspiring a generation to dream
					beyond the ordinary and embrace the extraordinary.
				</p>
				<p className='text-lg text-purple-800 font-bold mt-4'>
					But John Doe... grew tired of all this bullshit.
				</p>
			</article>
		</main>

		<footer className='w-full bg-yellow-500 py-8 text-center border-t-8 border-purple-700 shadow-inner'>
			<p className='text-lg font-mono text-purple-900'>
				&copy; 2024 John Doe Show!!! ALL RIGHTS RESERVED!!!!
			</p>
		</footer>
	</div>
);

export default TheBeginning;
