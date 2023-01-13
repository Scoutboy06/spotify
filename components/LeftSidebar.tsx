import Link from 'next/link';
import useSWR from 'swr';

import styles from '@/styles/LeftSidebar.module.css';

export default function LeftSidebar() {
	// const { data: playlists } = useSWR('/api/me/playlists');

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Link href='/'>
					<i className='icon'>home</i>
					Home
				</Link>
				<Link href='/search'>
					<i className='icon'>search</i>
					Search
				</Link>
				<Link href='/library'>
					<i className='icon'>library_books</i>
					Your Library
				</Link>
				<Link href='/new-playlist'>
					<i className='icon'>add</i>
					Create Playlist
				</Link>
				<Link href='/liked-songs'>
					<i className='icon'>favorite</i>
					Liked songs
				</Link>
				<Link href='/your-episodes'>
					<i className='icon'>bookmark</i>
					Your Episodes
				</Link>
			</div>

			<div className={styles.playlists}>Playlists</div>
		</div>
	);
}
