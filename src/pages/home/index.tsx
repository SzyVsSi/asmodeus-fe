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
		<div className='h-screen flex flex-col justify-center items-center'>
			{error && <p>Invalid code</p>}
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className='border p-1'
				placeholder='Enter token'
			/>
			<button
				type='submit'
				onClick={handleSubmit}
				className='mt-2 p-1 border bg-gray-100'
			>
				Submit
			</button>
		</div>
	);
};

export default HomePage;
