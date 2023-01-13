import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';

import LeftSidebar from '@/components/LeftSidebar';
import BottomBar from '@/components/BottomBar';

import useUser from '@/hooks/useUser';
import fetcher from '@/functions/fetcher';

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

			<SWRConfig value={{ fetcher }}>
				<main
					className='w-full h-full overflow-hidden grid relative'
					style={{
						gridTemplateAreas: `
					"left-sidebar main-area"
					"bottom-bar bottom-bar"`,
						gridTemplateColumns: 'auto 1fr',
						gridTemplateRows: '1fr auto',
					}}
				>
					<Image
						src='https://i.scdn.co/image/ab67616d0000b27364be01336a8f917538a60b74'
						alt='Background image'
						// className={}
						fill={true}
						style={{
							objectFit: 'cover',
							zIndex: -1,
							opacity: 0.8,
							filter: 'blur(16px)',
						}}
					/>

					<LeftSidebar />

					<div
						style={{
							gridArea: 'main-area',
						}}
					></div>

					<BottomBar />
				</main>
			</SWRConfig>
		</>
	);
}
