import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const Layout = ({ children }: Props) => {
	return <div className='min-w-full min-h-screen bg-slate-300'>{children}</div>;
};
