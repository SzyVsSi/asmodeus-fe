import { Layout } from '@/common/components/layout/Layout';
import { gameSessionsModule } from '@/core/services/apiInitializer';

const RoomThree = () => {
	const { useGetAllGameSessions } = gameSessionsModule;
	const { data, isLoading } = useGetAllGameSessions();

	return (
		<Layout>
			<div className='flex flex-col gap-2'>
				{isLoading && <p className='text-lg'>Loading...</p>}
				{data?.map((gameSession) => (
					<p key={gameSession.token} className='text-lg'>
						{gameSession.token}, room one active:
						{String(gameSession.getRoomStatus('one'))}
					</p>
				))}
			</div>
		</Layout>
	);
};

export default RoomThree;
