import { withRedirect } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';
import { SessionStorageService } from '@/util/sessionStorage';
import { useNavigate } from 'react-router-dom';

const RunPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		const token = SessionStorageService.getItem('token');

		if (token) {
			SessionStorageService.removeItem('token');
			SessionStorageService.removeItem('room_three');
			SessionStorageService.removeItem('room_two');
			SessionStorageService.removeItem('room_one');
		}

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
