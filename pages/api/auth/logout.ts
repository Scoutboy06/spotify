import type { NextApiRequest, NextApiResponse } from 'next';

import Cookies from 'cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const cookies = new Cookies(req, res);

	if (cookies.get('access_token')) cookies.set('access_token');

	res.redirect('/');
}
