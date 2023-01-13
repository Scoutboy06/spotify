import { useState } from 'react';

import styles from '@/styles/BottomBar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const songData = {
	album: {
		album_type: 'album',
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/3PWp9R5HvbQgxI5KBx5kVd',
				},
				href: 'https://api.spotify.com/v1/artists/3PWp9R5HvbQgxI5KBx5kVd',
				id: '3PWp9R5HvbQgxI5KBx5kVd',
				name: 'KANA-BOON',
				type: 'artist',
				uri: 'spotify:artist:3PWp9R5HvbQgxI5KBx5kVd',
			},
		],
		available_markets: [],
		external_urls: {
			spotify: 'https://open.spotify.com/album/3XfcRL9lvavzkYOkVt9GtD',
		},
		href: 'https://api.spotify.com/v1/albums/3XfcRL9lvavzkYOkVt9GtD',
		id: '3XfcRL9lvavzkYOkVt9GtD',
		images: [
			{
				height: 640,
				url: 'https://i.scdn.co/image/ab67616d0000b273aff92b4ab762a6439db4e922',
				width: 640,
			},
			{
				height: 300,
				url: 'https://i.scdn.co/image/ab67616d00001e02aff92b4ab762a6439db4e922',
				width: 300,
			},
			{
				height: 64,
				url: 'https://i.scdn.co/image/ab67616d00004851aff92b4ab762a6439db4e922',
				width: 64,
			},
		],
		name: 'Time',
		release_date: '2015-01-21',
		release_date_precision: 'day',
		total_tracks: 12,
		type: 'album',
		uri: 'spotify:album:3XfcRL9lvavzkYOkVt9GtD',
	},
	artists: [
		{
			external_urls: {
				spotify: 'https://open.spotify.com/artist/3PWp9R5HvbQgxI5KBx5kVd',
			},
			href: 'https://api.spotify.com/v1/artists/3PWp9R5HvbQgxI5KBx5kVd',
			id: '3PWp9R5HvbQgxI5KBx5kVd',
			name: 'KANA-BOON',
			type: 'artist',
			uri: 'spotify:artist:3PWp9R5HvbQgxI5KBx5kVd',
		},
	],
	available_markets: [],
	disc_number: 1,
	duration_ms: 240133,
	explicit: false,
	external_ids: { isrc: 'JPU901401691' },
	external_urls: {
		spotify: 'https://open.spotify.com/track/21z1GxeHjfD3qkaF5CgCTO',
	},
	href: 'https://api.spotify.com/v1/tracks/21z1GxeHjfD3qkaF5CgCTO',
	id: '21z1GxeHjfD3qkaF5CgCTO',
	is_local: false,
	name: 'シルエット',
	popularity: 1,
	preview_url: null,
	track_number: 10,
	type: 'track',
	uri: 'spotify:track:21z1GxeHjfD3qkaF5CgCTO',
};

export default function BottomBar() {
	const [isPlaying, setIsPlaying] = useState(true);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Image
					src={songData.album.images[2].url}
					alt='Album cover'
					width={56}
					height={56}
				/>

				<div className={styles.songMeta}>
					<Link href={`/tracks/${songData.id}`} className={styles.songTitle}>
						{songData.name}
					</Link>
					<div className={styles.artistName}>
						{songData.artists.map((artist, i) => (
							<Link href={`/artists/${artist.id}`} key={artist.id}>
								{artist.name}
								{i !== songData.artists.length - 1 ? ', ' : null}
							</Link>
						))}
					</div>

					<Link
						href={`/albums/${songData.album.id}`}
						className={styles.albumName}
					>
						{songData.album.name}
					</Link>
				</div>
			</div>

			<div className={styles.middle}>
				<button className='icon'>skip_previous</button>
				<button className='icon' onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? 'pause' : 'play_arrow'}
				</button>
				<button className='icon'>skip_next</button>
			</div>

			<div className={styles.right}>Right</div>
		</div>
	);
}
