import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from '@/components/Layout';

// import useUser from '@/hooks/useUser';

export default function Home() {
	const router = useRouter();
	// const { isLoggedIn, isLoading } = useUser();

	// useEffect(() => {
	// 	if (!isLoading && !isLoggedIn) router.push('/login');
	// }, [isLoggedIn, isLoading, router]);

	return (
		<Layout>
			<Head>
				<title>Spotify Clone</title>
				<meta
					name='description'
					content='A Spotify clone made by Elias Wennerlund'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Hello!</h1>
		</Layout>
	);
}
