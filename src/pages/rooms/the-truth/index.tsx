import { CodeCheckForm } from '@/common/components/CodeCheckInput';
import { withRedirect } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';

const TheTruthPage = () => (
	<div className='bg-gray-200 p-2 text-center'>
		<h1 className='text-red-500 text-4xl underline tracking-wider'>
			THE TRUTH THEY HID!!!
		</h1>
		<p className='text-blue-500 text-lg font-bold tracking-widest animate-fade'>
			(It's...been...there...all...along)
		</p>

		<style>
			{`
				@keyframes fade {
					0% { opacity: 0; }
					100% { opacity: 1; }
				}
			`}
		</style>

		<h2 className='text-green-500 text-3xl underline mt-6 italic'>
			🚨 EXPOSED -- THE INNOCENCE LIE 🚨
		</h2>

		<p className='text-purple-500 text-xl leading-loose border-2 border-black p-2 bg-red-100 word-spacing-wide'>
			OPEN YOUR EYES!!! The kids --- THEY WERE NEVER PURE!!! You think THEY were
			just like you?
			<span className='text-2xl text-red-500 font-bold'> HA! </span> NOTHING is
			as it seems!! John Doe KNEW.
			<span className='bg-yellow-500'>He KNEW</span> all along!!! And now, NOW,
			you sit there...acting like it's all fine...BUT IT ISN'T.
		</p>

		<p className='text-red-900 text-xl bg-yellow-500 p-5 mt-5 border-5 border-purple-500 transform rotate-[-2deg]'>
			THEY DON’T WANT YOU TO KNOW Asmodeus, the Lord of the UNDERWORLD, is
			coming, just like it was foretold... and YOU WON’T BE READY. Do you think
			John Doe is just a character??
			<span className='text-2xl font-bold'> WAKE UP </span> !!! HE WAS TRAPPED
			HERE, CHAINED, and Asmodeus is the key!!! You all laughed... but who’s
			laughing NOW?? 💀💀
		</p>

		<div className='text-left my-6 p-2 border-2 border-black bg-gray-300'>
			<h3 className='text-red-500 text-xl underline'>
				Biblical Prophecies: The Fall of Asmodeus
			</h3>
			<p className='text-xl text-black italic'>
				1. And the devil that deceived them was cast into the lake of fire and
				brimstone, where the beast and the false prophet are, and shall be
				tormented day and night for ever and ever. <br />— Revelation 20:10
			</p>

			<p className='text-xl text-black italic mt-4'>
				2. They sacrificed unto devils, not to God; to gods whom they knew not,
				to new gods that came newly up, whom your fathers feared not. <br />—
				Deuteronomy 32:17
			</p>

			<p className='text-xl text-black italic mt-4'>
				3. Be sober, be vigilant; because your adversary the devil, as a roaring
				lion, walketh about, seeking whom he may devour. <br />— 1 Peter 5:8
			</p>

			<p className='text-xl text-black italic mt-4'>
				4. And the angels which kept not their first estate, but left their own
				habitation, he hath reserved in everlasting chains under darkness unto
				the judgment of the great day. <br />— Jude 1:6
			</p>
		</div>

		<p className='text-orange-500 text-xl border-t-4 border-black pt-4 mt-5 text-left p-5'>
			And ME?! I LIVE in a luxury—
			<span className='italic'>oh, it’s funny</span>, isn't it? I HAVE
			EVERYTHING I NEED...but NOTHING...
			<span className='text-2xl text-blue-500'>nothing at ALL</span>. It’s
			unfair, SO UNFAIR!!!!! They...the ones up there... live carefree, while
			we’re DOWN HERE, in the real world, trapped in our perfect hells. Asmodeus
			SEES, John Doe KNOWS, but YOU’RE BLIND!!! They CENSORED IT. They REMOVED
			IT, erased it from history like it NEVER EXISTED!
			<span className='bg-black text-white p-1'>EXPOSE THE TRUTH</span>
		</p>

		<CodeCheckForm
			room='room_three'
			to={Routes.Run}
			formClassName='mt-5'
			inputClassName='border-3 border-red-500 bg-pink-500 w-72 p-2.5 text-lg'
			buttonClassName='bg-lime-500 p-2.5 border-3 border-green-500 text-xl font-bold'
			placeholder='CONFESS'
		/>

		<footer className='mt-6 p-2 bg-gray-400 text-center border-t-5 border-black'>
			<p className='text-black text-xs uppercase'>NOTHING IS SACRED!!!!</p>
		</footer>
	</div>
);

export default withRedirect(TheTruthPage, 'room_two');
