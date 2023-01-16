import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';

import CurrentUser from '@/types/CurrentUser';

import styles from '@/styles/TopBar.module.css';

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
				<span>{user?.display_name}</span>
			</div>
		</div>
	);
}
