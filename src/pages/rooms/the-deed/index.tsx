import signatureTrustee from '@/assets/images/bartholomewSnickerdoodle.svg';
import signatureJohnDoe from '@/assets/images/johnDoe.svg';
import { CodeCheckForm } from '@/common/components/CodeCheckInput';
import { Layout } from '@/common/components/layout/Layout';
import { withRedirectToHome } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';
import clsx from 'clsx';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { RedText } from './components/RedText';
import { Signature } from './components/Signature';

const TheDeedPage = () => {
	const { t } = useTranslation('theDeed');
	const [showInput, setShowInput] = useState(false);

	const handleClick = () => {
		setShowInput(true);
	};

	return (
		<Layout>
			<div className='flex items-center justify-center h-screen bg-gray-900 p-4 overflow-auto'>
				<div className='bg-gray-800 shadow-2xl rounded-lg p-4 md:p-12 max-w-4xl border-4 border-gray-700 max-h-full overflow-auto'>
					<h1 className='text-2xl md:text-5xl font-extrabold text-center mb-8 underline text-red-500 font-specialElite'>
						{t('title')}
					</h1>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap'>
						<Trans
							i18nKey='thisDeed'
							t={t}
							components={[<RedText key='redText' />]}
						/>
					</p>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						<Trans
							i18nKey='witnesseth'
							t={t}
							components={[<RedText key='redText' />]}
						/>
					</p>
					<blockquote className='italic text-xs md:text-lg text-gray-500 mb-6 border-l-4 border-red-500 pl-4 font-specialElite whitespace-pre-wrap text-wrap'>
						<Trans
							i18nKey='quote'
							t={t}
							components={[<RedText key='redText' />]}
						/>
					</blockquote>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						<Trans
							i18nKey='property'
							t={t}
							components={[<RedText key='redText' />]}
						/>
					</p>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						<Trans
							i18nKey='expire'
							t={t}
							components={{
								0: <RedText key='redText' className='underline' />,
								1: <button key='button' type='button' onClick={handleClick} />,
							}}
						/>
					</p>
					{showInput && (
						<CodeCheckForm
							room='room_one'
							to={Routes.JohnDoeShow}
							formClassName='mt-6 flex w-fit mx-auto flex-row items-center gap-2'
							inputClassName='border border-gray-500 rounded-lg p-2 bg-gray-700 text-gray-300 font-specialElite'
							buttonClassName={clsx(
								'bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 font-specialElite',
							)}
							placeholder={`${t('placeholder')}...`}
						/>
					)}
					<div className='flex flex-row justify-around items-center mt-12'>
						<Signature
							name='John Doe'
							role={t('grantor')}
							signatureSrc={signatureJohnDoe}
						/>
						<Signature
							name={t('representative')}
							role={t('trustee')}
							signatureSrc={signatureTrustee}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withRedirectToHome(TheDeedPage);
