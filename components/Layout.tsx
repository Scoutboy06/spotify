import Image from 'next/image';
import { useEffect } from 'react';

import TopBar from '@/components/TopBar';
import LeftSidebar from '@/components/LeftSidebar';
import BottomBar from '@/components/BottomBar';

import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';

export default function Layout({ children }: any) {
	const { isLoading, isLoggedIn, user } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isLoggedIn) router.push('/login');
	}, [isLoggedIn, isLoading, router]);

	// if (isLoading) return null;
	// console.log('isLoading:', isLoading);
	// console.log('isLoggedIn:', isLoggedIn);
	// console.log('user:', user);

	return (
		<main className='main'>
			<LeftSidebar />

			<div style={{ gridArea: 'main-area', position: 'relative' }}>
				<TopBar />
				{children}
			</div>

			<BottomBar />

			<Image
				src='https://i.scdn.co/image/ab67616d0000b27364be01336a8f917538a60b74'
				alt='Background image'
				className='backdrop'
				fill={true}
			/>
		</main>
	);
}
