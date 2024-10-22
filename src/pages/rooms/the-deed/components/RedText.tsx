import type { ReactNode } from 'react';

export const RedText = ({ children }: { children: ReactNode }) => {
	return <span className='font-bold text-red-400'>{children}</span>;
};
