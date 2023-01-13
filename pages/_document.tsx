import { Html, Head, Main, NextScript } from 'next/document';


import useUser from '@/hooks/useUser';
import fetcher from '@/functions/fetcher';

// import styles from '@/styles/index.module.css';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
