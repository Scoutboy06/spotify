import Link from 'next/link';

import styles from '@/styles/login.module.css';

export default function Login() {
	return (
		<div className={styles.container}>
			<h2>You need to log in to use this site</h2>
			<Link href='/api/auth/login' className={styles.button}>
				Login
			</Link>
		</div>
	);
}
