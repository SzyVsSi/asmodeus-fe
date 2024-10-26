import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type Props = {
	className?: string;
};

export const RedText = ({ children, className }: PropsWithChildren<Props>) => {
	return (
		<span className={clsx('font-bold text-red-400', className)}>
			{children}
		</span>
	);
};
