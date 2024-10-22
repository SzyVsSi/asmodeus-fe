import { withRedirect } from '@/core/router/helpers';

const RunPage = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-black'>
			<h1 className='text-red-600 text-9xl font-bold'>RUN</h1>
		</div>
	);
};

export default withRedirect(RunPage, 'run');
