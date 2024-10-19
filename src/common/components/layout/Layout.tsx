import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className='w-dvw h-dvh bg-slate-300'>{children}</div>;
};
