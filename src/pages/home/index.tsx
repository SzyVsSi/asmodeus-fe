import { Routes } from '@/core/router/routes';
import { gameSessionsModule } from '@/core/services/apiInitializer';
import { SessionStorageService } from '@/util/sessionStorage';
import clsx from 'clsx';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LanguagePicker } from './components/LanguagePicker';

type Inputs = {
	token: string;
};

const HomePage = () => {
	const { t } = useTranslation('home');
	const navigate = useNavigate();
	const { useVerifyToken } = gameSessionsModule;
	const { verifyToken, error, isPending } = useVerifyToken();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async ({ token }) => {
		await verifyToken(token);
		console.log('token correct');
		SessionStorageService.setItem('token', token);
		navigate(Routes.TheDeed);
	};

	return (
		<div className='h-screen flex flex-col justify-center items-center gap-3 bg-gray-300'>
			<div className='bg-white p-8 shadow-lg rounded-lg w-3/4 md:w-2/4'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					{t('common:asmodeus')}
				</h1>
				<p className='text-2xl mb-6 text-center'>{t('introduction')}</p>
				{(errors.token || error) && (
					<p className='text-red-500 mb-6 text-center'>
						{t('errors.invalidCode')}
					</p>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						className='border p-2 w-full mb-4 rounded text-center'
						placeholder='Enter game code'
						aria-label='Enter game code'
						{...register('token', { required: true, minLength: 6 })}
					/>
					<button
						type='submit'
						className={clsx(
							'w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
							{
								'opacity-50': isPending,
								'cursor-not-allowed': isPending,
							},
						)}
					>
						{isPending ? `${t('common:verifying')}...` : t('common:verify')}
					</button>
				</form>
			</div>
			<div className='min-w-fit'>
				<LanguagePicker />
			</div>
		</div>
	);
};

export default HomePage;
