import { withRedirect } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';
import { useNavigate } from 'react-router-dom';

const RunPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(Routes.Home);
	};

	return (
		<div className='flex items-center justify-center h-screen bg-black'>
			<h1 className='text-red-600 text-9xl font-bold '>
				<button
					type='button'
					className='hover:text-white hover:cursor-pointer'
					onClick={handleClick}
				>
					RUN
				</button>
			</h1>
		</div>
	);
};

export default withRedirect(RunPage, 'room_three');
