import type { NextApiRequest, NextApiResponse } from 'next';

import Cookies from 'cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const cookies = new Cookies(req, res);
	const access_token = cookies.get('access_token');

	if (access_token) res.send(access_token);
	else res.status(401).json({ error: 'Unauthorized' });
}
