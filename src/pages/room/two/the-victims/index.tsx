const TheVictims = () => (
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
					Meet the Kid Stars of the John Doe Show
				</h2>
				<p className='text-lg text-purple-800 font-bold'>
					The John Doe Show introduced the world to a talented group of young
					actors, who quickly became household names. Leading the charge was
					Michael, the bright and curious boy who brought John Doe to life.
					Alongside him were Sarah, the adventurous and quick-witted girl who
					played John's best friend, David, the brave and loyal sidekick, and
					Grace, the kind-hearted dreamer who added warmth to every episode.
				</p>
				<p className='text-lg text-purple-800 font-bold mt-4'>
					Together, Michael (13 years old), Sarah (11 years old), David (8 years
					old), and Grace (5 years old) captured the imagination of children and
					adults alike, bringing a magical blend of authenticity and charm to
					their roles. Their performances helped shape the legacy of the show,
					making John Doe Show a timeless classic in children's television
					history.
				</p>
				<p className='text-lg text-purple-800 font-bold mt-4'>
					But John Doe... had other plans for these kids... A more grandiose
					plan.
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

export default TheVictims;
