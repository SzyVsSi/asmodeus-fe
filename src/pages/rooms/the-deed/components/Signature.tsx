type Props = {
	name: string;
	role: string;
	signatureSrc: string;
};

export const Signature = ({ name, role, signatureSrc }: Props) => {
	return (
		<div className='text-center'>
			<img
				src={signatureSrc}
				alt={`${name}'s Signature`}
				className='h-16 mb-2 mx-auto opacity-75'
			/>
			<p className='underline text-gray-400'>_________________________</p>
			<p className='text-red-500 font-specialElite'>{name}</p>
			<p className='text-sm text-gray-500 font-specialElite'>{role}</p>
		</div>
	);
};
