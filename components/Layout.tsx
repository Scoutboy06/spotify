import type { ReactNode } from 'react';

import Image from 'next/image';

import LeftSidebar from '@/components/LeftSidebar';
import BottomBar from '@/components/BottomBar';
import { AppProps } from 'next/app';

export default function Layout({ children }: AppProps) {
	return (
		<main className='main'>
			<Image
				src='https://i.scdn.co/image/ab67616d0000b27364be01336a8f917538a60b74'
				alt='Background image'
				className='backdrop'
				fill={true}
			/>

			<LeftSidebar />

			<div style={{ gridArea: 'main-area' }}></div>

			<BottomBar />
		</main>
	);
}
