import { Routes } from '@/core/router/routes';
import { gameSessionsModule } from '@/core/services/apiInitializer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const { useVerifyCode } = gameSessionsModule;
	const { verifyCode, error } = useVerifyCode();
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async () => {
		await verifyCode(inputValue);

		if (error) {
			return;
		}
		navigate(Routes.TheDeed);
	};

	return (
		<div className='h-screen flex flex-col justify-center items-center bg-gray-300'>
			<div className='bg-white p-8 shadow-lg rounded-lg w-2/4'>
				<h1 className='text-3xl font-bold mb-6 text-center'>Introduction</h1>
				<p className='text-2xl mb-6 text-center'>
					Hello Player! Please enter the token provided to you from the game in
					order to proceed. Do not close this window, as you will need it to
					progress through the game. Enjoy!
				</p>
				{error && <p className='text-red-500 mb-2 text-center'>Invalid code</p>}
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className='border p-2 w-full mb-4 rounded text-center'
					placeholder='Enter token'
				/>
				<button
					type='submit'
					onClick={handleSubmit}
					className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default HomePage;
