import signatureTrustee from '@/assets/images/hawkTuah.svg';
import signatureJohnDoe from '@/assets/images/johnDoe.svg';
import { CodeCheckForm } from '@/common/components/CodeCheckInput';
import { Layout } from '@/common/components/layout/Layout';
import { withRedirectToHome } from '@/core/router/helpers';
import { Routes } from '@/core/router/routes';
import clsx from 'clsx';
import { useState } from 'react';
import { RedText } from './components/RedText';
import { Signature } from './components/Signature';

const TheDeedPage = () => {
	const [showInput, setShowInput] = useState(false);

	const handleExpireClick = () => setShowInput(true);

	return (
		<Layout>
			<div className='flex items-center justify-center h-screen bg-gray-900 p-4 overflow-auto'>
				<div className='bg-gray-800 shadow-2xl rounded-lg p-4 md:p-12 max-w-4xl border-4 border-gray-700 max-h-full overflow-auto'>
					<h1 className='text-2xl md:text-5xl font-extrabold text-center mb-8 underline text-red-500 font-specialElite'>
						Deed of Trust
					</h1>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap'>
						THIS DEED, made this <RedText>20th</RedText> day of{' '}
						<RedText>October</RedText>, <RedText>2024</RedText>, by{' '}
						<RedText>John Doe</RedText>, hereinafter referred to as the
						"Grantor" and <RedText>Acme Land Title Company</RedText>, as
						trustee, hereinafter referred to as the "Trustee".
					</p>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						WITNESSETH: That for and in consideration of the sum of{' '}
						<RedText>$500,000</RedText> paid by <RedText>John Smith</RedText>,
						the "Beneficiary," the Grantor does hereby transfer, convey, and
						assign unto the Trustee, in trust, all that certain property
						situated in the County of <RedText>Orange</RedText>, State of{' '}
						<RedText>California</RedText>, described as follows:
					</p>
					<blockquote className='italic text-xs md:text-lg text-gray-500 mb-6 border-l-4 border-red-500 pl-4 font-specialElite whitespace-pre-wrap text-wrap'>
						Lot 12, Block 9, in the Subdivision known as "Sunshine Meadows,"
						according to the official plat recorded in the Public Records of
						Orange County, California.
					</blockquote>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						TO HAVE AND TO HOLD the said property, together with all
						appurtenances thereunto belonging, unto the Trustee and its
						successors forever, in trust for the benefit of the Beneficiary, to
						secure the payment of the sum of money as stated in the Promissory
						Note dated the 20th day of <RedText>October</RedText>,{' '}
						<RedText>2024</RedText>.
					</p>
					<p className='text-xs md:text-lg text-gray-300 mb-6 leading-relaxed font-specialElite whitespace-pre-wrap text-wrap'>
						Should the Grantor{' '}
						<button
							type='button'
							onClick={handleExpireClick}
							className='font-bold text-red-400'
						>
							expire
						</button>{' '}
						before the terms of this agreement are fulfilled, the property and
						all its claims shall transfer to the Trustee in full.
					</p>
					{showInput && (
						<CodeCheckForm
							room='room_one'
							to={Routes.JohnDoeShow}
							formClassName='mt-6 flex flex-col items-center'
							inputClassName='border border-gray-500 rounded-lg p-2 bg-gray-700 text-gray-300 mb-4 font-specialElite'
							buttonClassName={clsx(
								'bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 font-specialElite',
							)}
							placeholder='Enter code...'
						/>
					)}
					<div className='flex flex-row justify-around items-center mt-12'>
						<Signature
							name='John Doe'
							role='Grantor'
							signatureSrc={signatureJohnDoe}
						/>
						<Signature
							name="Trustee's Representative"
							role='Trustee'
							signatureSrc={signatureTrustee}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withRedirectToHome(TheDeedPage);
