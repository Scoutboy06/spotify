import { useRouter } from 'next/router';
import Image from 'next/image';

import useUser from '@/hooks/useUser';
import CurrentUser from '@/types/CurrentUser';

import styles from '@/styles/TopBar.module.css';
import Link from 'next/link';

export default function TopBar() {
	const { user }: { user: CurrentUser } = useUser();
	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<button
					className='icon'
					onClick={() => router.back()}
					// disabled={window?.history?.state?.idx > 0}
				>
					navigate_before
				</button>
				<button
					className='icon'
					// onClick={() => router.}
					// disabled={window?.history?.state?.idx !== window?.history?.length}
				>
					navigate_next
				</button>
			</div>

			<div className={styles.right}>
				<button className={styles.profile}>
					<Image
						src={user.images[0].url}
						width={26}
						height={26}
						alt='Profile picture'
					/>

					<span>{user?.display_name}</span>

					<i className='icon'>arrow_drop_down</i>

					<div className={styles.dropdown}>
						<Link href='/profile'>Profile</Link>
						<Link href='/settings'>Settings</Link>
						<hr />
						<Link href='/api/logout'>Log out</Link>
					</div>
				</button>
			</div>
		</div>
	);
}
