import Head from 'next/head';

import Layout from '@/components/Layout';

export default function Home() {
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

			<div
				style={{
					width: '100%',
					height: 'calc(100% - 4rem)',
					background: 'var(--overlay)',
				}}
			></div>
		</Layout>
	);
}
