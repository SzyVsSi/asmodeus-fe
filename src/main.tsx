import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/router';
import './main.css';
import { Fallback } from './common/components/fallback/Fallback';

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: Vite default
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<Fallback />}>
				<RouterProvider router={router} />
			</Suspense>
		</QueryClientProvider>
	</StrictMode>,
);
