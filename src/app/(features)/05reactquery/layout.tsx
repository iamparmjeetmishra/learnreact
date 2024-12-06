"use client"
type LayoutProps = {
	children: React.ReactNode;
};

import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</>
	);
}
