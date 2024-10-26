import { withRedirect } from '@/core/router/helpers';
import { useTranslation } from 'react-i18next';

const TheBeginningPage = () => {
	const { t } = useTranslation('theBeginning');

	return (
		<div className='min-h-screen bg-gradient-to-r from-pink-300 via-purple-400 to-green-300 flex flex-col items-center p-4'>
			<header className='w-full bg-yellow-500 py-6 text-center shadow-md'>
				<h1 className='text-5xl font-extrabold text-red-700 underline'>
					{t('title')}
				</h1>
				<p className='text-xl text-blue-900 italic mt-2'>{t('journey')}</p>
			</header>
			<main className='w-full p-6 bg-pink-200 border-t-4 border-green-500'>
				<article className='w-full bg-blue-100 p-6 rounded-lg border-8 border-red-700 shadow-lg'>
					<h2 className='text-3xl font-mono text-green-800 mb-4 underline'>
						{t('what')}
					</h2>
					<p className='text-lg text-purple-800 font-bold'>{t('beloved')}</p>
					<p className='text-lg text-purple-800 font-bold mt-4'>
						{t('series')}
					</p>
					<p className='text-lg text-purple-800 font-bold mt-4'>{t('tired')}</p>
				</article>
			</main>
			<footer className='w-full bg-yellow-500 py-8 text-center border-t-8 border-purple-700 shadow-inner'>
				<p className='text-lg font-mono text-purple-900'>
					{t('common:copyright')}
				</p>
			</footer>
		</div>
	);
};

export default withRedirect(TheBeginningPage, 'room_one');
