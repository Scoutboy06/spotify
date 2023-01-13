import Link from 'next/link';
import useSWR from 'swr';

export default function LeftSidebar() {
	// const { data: playlists } = useSWR('/api/me/playlists');

	return (
		<div
			className='w-72 p-4'
			style={{ gridArea: 'left-sidebar', backgroundColor: 'rgba(0, 0, 0, .5)' }}
		>
			<div className='flex flex-col pb-4'>
				<Link
					href='/'
					className='flex p-1 gap-2 transition-opacity hover:opacity-50'
				>
					<i className='icon'>home</i>
					Home
				</Link>
				<Link
					href='/search'
					className='flex p-1 gap-2 transition-opacity hover:opacity-80'
				>
					<i className='icon'>search</i>
					Search
				</Link>
				<Link
					href='/library'
					className='flex p-1 gap-2 transition-opacity hover:opacity-50'
				>
					<i className='icon'>library_books</i>
					Your Library
				</Link>
				<Link
					href='/new-playlist'
					className='flex p-1 gap-2 transition-opacity hover:opacity-50'
				>
					<i className='icon'>add</i>
					Create Playlist
				</Link>
				<Link
					href='/liked-songs'
					className='flex p-1 gap-2 transition-opacity hover:opacity-50'
				>
					<i className='icon'>favorite</i>
					Liked songs
				</Link>
				<Link
					href='/your-episodes'
					className='flex p-1 gap-2 transition-opacity hover:opacity-50'
				>
					<i className='icon'>bookmark</i>
					Your Episodes
				</Link>
			</div>

			<div className='h-full w-full overflow-y-auto'>Playlists</div>
		</div>
	);
}
