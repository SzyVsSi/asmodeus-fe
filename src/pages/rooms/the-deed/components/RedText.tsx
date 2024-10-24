import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
};

export const RedText = ({ children, className }: Props) => {
	return (
		<span className={clsx('font-bold text-red-400', className)}>
			{children}
		</span>
	);
};
