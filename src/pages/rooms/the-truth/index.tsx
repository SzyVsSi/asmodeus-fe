import { CodeCheckForm } from '@/common/components/CodeCheckInput';
import { withRedirect } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';
import { Trans, useTranslation } from 'react-i18next';

const TheTruthPage = () => {
	const { t } = useTranslation('theTruth');

	return (
		<div className='bg-gray-200 p-2 text-center'>
			<h1 className='text-red-500 text-4xl underline tracking-wider'>
				{t('title')}
			</h1>
			<p className='text-blue-500 text-lg font-bold tracking-widest animate-fade'>
				{t('subTitle')}
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
				<Trans
					t={t}
					i18nKey='exposed'
					components={[
						<span key='0' className='text-red-500 font-bold' />,
						<span key='1' className='text-green-500 font-bold' />,
					]}
				/>
			</h2>

			<p className='text-purple-500 text-md leading-loose border-2 border-black p-2 bg-red-100 word-spacing-wide'>
				<Trans
					t={t}
					i18nKey='eyes'
					components={{
						0: <span className='text-2xl text-red-500 font-bold' />,
						1: <span className='bg-yellow-500' />,
					}}
				/>
			</p>

			<p className='text-red-900 text-xl bg-yellow-500 p-5 mt-5 border-5 border-purple-500 transform rotate-[-2deg]'>
				<Trans
					t={t}
					i18nKey='asmodeus'
					components={[<span key='0' className='text-2xl font-bold' />]}
				/>
			</p>

			<div className='text-left my-6 p-2 border-2 border-black bg-gray-300'>
				<h3 className='text-red-500 text-xl underline'>{t('prophecies')}</h3>
				<div className='flex flex-col gap-4 font-bold'>
					<p className='text-xl text-black italic'>
						<Trans
							t={t}
							i18nKey='devil'
							components={[<span key='0' className='underline' />]}
						/>
					</p>

					<p className='text-xl text-black italic'>
						<Trans
							t={t}
							i18nKey='tree'
							components={[<span key='0' className='underline' />]}
						/>
					</p>

					<p className='text-xl text-black italic'>
						<Trans
							t={t}
							i18nKey='sacrifice'
							components={[<span key='0' className='underline' />]}
						/>
					</p>

					<p className='text-xl text-black italic'>
						<Trans
							t={t}
							i18nKey='sober'
							components={[<span key='0' className='underline' />]}
						/>
					</p>
				</div>
			</div>

			<p className='text-orange-500 text-xl border-t-4 border-black pt-4 mt-5 text-left p-5'>
				<Trans
					t={t}
					i18nKey='luxury'
					components={{
						0: <span className='italic' />,
						1: <span className='text-2xl text-blue-500' />,
						2: <span className='bg-black text-white p-1' />,
					}}
				/>
			</p>

			<CodeCheckForm
				room='room_three'
				to={Routes.Run}
				formClassName='mt-5'
				inputClassName='border-3 border-red-500 bg-pink-500 w-72 p-2.5 text-lg'
				buttonClassName='bg-lime-500 p-2.5 border-3 border-green-500 text-xl font-bold'
				placeholder={t('placeholder')}
			/>

			<footer className='mt-6 p-2 bg-gray-400 text-center border-t-5 border-black'>
				<p className='text-black text-xs uppercase'>{t('sacred')}</p>
			</footer>
		</div>
	);
};

export default withRedirect(TheTruthPage, 'room_two');
