import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { SWRConfig } from 'swr';

// import useUser from '@/hooks/useUser';
// import fetcher from '@/functions/fetcher';

// import styles from '@/styles/index.module.css';

export default function Home() {
	const router = useRouter();
	// const { isLoggedIn, isLoading } = useUser();

	// useEffect(() => {
	// 	if (!isLoading && !isLoggedIn) router.push('/login');
	// }, [isLoggedIn, isLoading, router]);

	return (
		<>
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
		</>
	);
}
