import signatureJohnDoe from '@/assets/images/johnDoe.png';
import signatureTrustee from '@/assets/images/trustee.png';
import { Layout } from '@/common/components/layout/Layout';
import { type FormEventHandler, useState } from 'react';
import { RedText } from './components/RedText';
import { Signature } from './components/Signature';

const RoomOne = () => {
	const [showInput, setShowInput] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleExpireClick = () => setShowInput(true);

	const submitInput: FormEventHandler = (event) => {
		event.preventDefault();

		if (inputValue === 'test') {
			alert('Code valid');
		}
	};

	return (
		<Layout>
			<div className='flex items-center justify-center h-screen bg-gray-900 p-4'>
				<div className='bg-gray-800 shadow-2xl rounded-lg p-12 max-w-4xl border-4 border-gray-700'>
					<h1 className='text-5xl font-extrabold text-center mb-8 underline text-red-500 font-specialElite'>
						Deed of Trust
					</h1>

					<p className='text-lg text-gray-300 mb-6 leading-relaxed font-specialElite'>
						THIS DEED, made this <RedText>20th</RedText> day of{' '}
						<RedText>October</RedText>, <RedText>2024</RedText>, by{' '}
						<RedText>John Doe</RedText>, hereinafter referred to as the
						"Grantor" and <RedText>Acme Land Title Company</RedText>, as
						trustee, hereinafter referred to as the "Trustee".
					</p>

					<p className='text-lg text-gray-300 mb-6 leading-relaxed font-specialElite'>
						WITNESSETH: That for and in consideration of the sum of{' '}
						<RedText>$500,000</RedText> paid by <RedText>John Smith</RedText>,
						the "Beneficiary," the Grantor does hereby transfer, convey, and
						assign unto the Trustee, in trust, all that certain property
						situated in the County of <RedText>Orange</RedText>, State of{' '}
						<RedText>California</RedText>, described as follows:
					</p>

					<blockquote className='italic text-lg text-gray-500 mb-6 border-l-4 border-red-500 pl-4 font-specialElite'>
						Lot 12, Block 9, in the Subdivision known as "Sunshine Meadows,"
						according to the official plat recorded in the Public Records of
						Orange County, California.
					</blockquote>

					<p className='text-lg text-gray-300 mb-6 leading-relaxed font-specialElite'>
						TO HAVE AND TO HOLD the said property, together with all
						appurtenances thereunto belonging, unto the Trustee and its
						successors forever, in trust for the benefit of the Beneficiary, to
						secure the payment of the sum of money as stated in the Promissory
						Note dated the 20th day of <RedText>October</RedText>,{' '}
						<RedText>2024</RedText>.
					</p>

					<p className='text-lg text-gray-300 mb-6 leading-relaxed font-specialElite'>
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
						<form
							className='mt-6 flex flex-col items-center'
							onSubmit={submitInput}
						>
							<input
								type='text'
								className='border border-gray-500 rounded-lg p-2 bg-gray-700 text-gray-300 mb-4 font-specialElite'
								placeholder='Enter your input'
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
							<button
								type='submit'
								className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 font-specialElite'
							>
								Check
							</button>
						</form>
					)}

					<div className='flex justify-between items-center mt-12'>
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

export default RoomOne;