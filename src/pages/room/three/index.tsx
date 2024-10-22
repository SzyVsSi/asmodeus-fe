const RoomThree = () => (
	<div
		style={{
			backgroundColor: '#f0f0f0',
			padding: '10px',
			textAlign: 'center',
		}}
	>
		<h1
			style={{
				color: 'red',
				fontSize: '40px',
				textDecoration: 'underline',
				letterSpacing: '5px',
			}}
		>
			THE TRUTH THEY HID!!!
		</h1>
		<p
			style={{
				color: 'blue',
				fontSize: '16px',
				fontWeight: 'bold',
				letterSpacing: '10px',
				animation: 'fade 2s infinite alternate',
			}}
		>
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

		<h2
			style={{
				color: 'green',
				fontSize: '30px',
				textDecoration: 'underline',
				marginTop: '30px',
				fontStyle: 'italic',
			}}
		>
			🚨 EXPOSED -- THE INNOCENCE LIE 🚨
		</h2>

		<p
			style={{
				color: 'purple',
				fontSize: '18px',
				lineHeight: '1.5',
				border: '2px dashed black',
				padding: '10px',
				backgroundColor: '#ffcccb',
				wordSpacing: '10px',
			}}
		>
			OPEN YOUR EYES!!! The kids --- THEY WERE NEVER PURE!!! You think THEY were
			just like you?
			<span style={{ fontSize: '24px', color: 'red', fontWeight: 'bold' }}>
				{' '}
				HA!{' '}
			</span>{' '}
			NOTHING is as it seems!! John Doe KNEW.
			<span style={{ backgroundColor: 'yellow' }}>He KNEW</span> all along!!!
			And now, NOW, you sit there...acting like it's all fine...BUT IT ISN'T.
		</p>

		<p
			style={{
				color: 'darkred',
				fontSize: '18px',
				backgroundColor: 'yellow',
				padding: '20px',
				marginTop: '20px',
				border: '5px solid purple',
				transform: 'rotate(-2deg)',
			}}
		>
			THEY DON’T WANT YOU TO KNOW Asmodeus, the Lord of the UNDERWORLD, is
			coming, just like it was foretold... and YOU WON’T BE READY. Do you think
			John Doe is just a character??
			<span
				style={{
					fontSize: '26px',
					fontWeight: 'bold',
				}}
			>
				{' '}
				WAKE UP{' '}
			</span>
			!!! HE WAS TRAPPED HERE, CHAINED, and Asmodeus is the key!!! You all
			laughed... but who’s laughing NOW?? 💀💀
		</p>

		<div
			style={{
				textAlign: 'left',
				margin: '30px 0',
				padding: '10px',
				border: '2px solid black',
				backgroundColor: '#eeeeee',
			}}
		>
			<h3
				style={{ color: 'red', fontSize: '22px', textDecoration: 'underline' }}
			>
				Biblical Prophecies: The Fall of Asmodeus
			</h3>
			<p style={{ fontSize: '18px', color: 'black', fontStyle: 'italic' }}>
				1. And the devil that deceived them was cast into the lake of fire and
				brimstone, where the beast and the false prophet are, and shall be
				tormented day and night for ever and ever. <br />— Revelation 20:10
			</p>

			<p
				style={{
					fontSize: '18px',
					color: 'black',
					fontStyle: 'italic',
					marginTop: '15px',
				}}
			>
				2. They sacrificed unto devils, not to God; to gods whom they knew not,
				to new gods that came newly up, whom your fathers feared not. <br />—
				Deuteronomy 32:17
			</p>

			<p
				style={{
					fontSize: '18px',
					color: 'black',
					fontStyle: 'italic',
					marginTop: '15px',
				}}
			>
				3. Be sober, be vigilant; because your adversary the devil, as a roaring
				lion, walketh about, seeking whom he may devour. <br />— 1 Peter 5:8
			</p>

			<p
				style={{
					fontSize: '18px',
					color: 'black',
					fontStyle: 'italic',
					marginTop: '15px',
				}}
			>
				4. And the angels which kept not their first estate, but left their own
				habitation, he hath reserved in everlasting chains under darkness unto
				the judgment of the great day. <br />— Jude 1:6
			</p>
		</div>

		<p
			style={{
				color: 'orange',
				fontSize: '18px',
				borderTop: '4px solid black',
				paddingTop: '15px',
				marginTop: '20px',
				textAlign: 'left',
				padding: '20px',
			}}
		>
			And ME?! I LIVE in a luxury—
			<span style={{ fontStyle: 'italic' }}>oh, it’s funny</span>, isn't it? I
			HAVE EVERYTHING I NEED...but NOTHING...
			<span style={{ fontSize: '22px', color: 'blue' }}>nothing at ALL</span>.
			It’s unfair, SO UNFAIR!!!!! They...the ones up there... live carefree,
			while we’re DOWN HERE, in the real world, trapped in our perfect hells.
			Asmodeus SEES, John Doe KNOWS, but YOU’RE BLIND!!! They CENSORED IT. They
			REMOVED IT, erased it from history like it NEVER EXISTED!
			<span style={{ backgroundColor: '#000', color: '#fff', padding: '5px' }}>
				EXPOSE THE TRUTH
			</span>
		</p>

		<div style={{ marginTop: '20px' }}>
			<input
				type='text'
				placeholder='CONFESS'
				style={{
					border: '3px solid red',
					padding: '10px',
					fontSize: '16px',
					width: '300px',
					backgroundColor: 'pink',
				}}
			/>
			<button
				type='button'
				onClick={() =>
					alert('navigate to last screen if entered correct order of verses')
				}
				style={{
					backgroundColor: 'lime',
					padding: '10px',
					marginLeft: '10px',
					border: '3px dotted green',
					fontWeight: 'bold',
					fontSize: '18px',
				}}
			>
				FREE YOURSELF OF SIN
			</button>
		</div>

		<footer
			style={{
				marginTop: '30px',
				padding: '10px',
				backgroundColor: '#cccccc',
				textAlign: 'center',
				borderTop: '5px solid black',
			}}
		>
			<p
				style={{ color: 'black', fontSize: '12px', textTransform: 'uppercase' }}
			>
				NOTHING IS SACRED!!!!
			</p>
		</footer>
	</div>
);

export default RoomThree;
