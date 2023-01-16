import type { NextApiRequest, NextApiResponse } from 'next';

import { NextResponse } from 'next/server';
import Cookies from 'cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const cookies = new Cookies(req, res);
	const access_token = cookies.get('access_token');

	if (!access_token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	fetch('https://api.spotify.com/v1' + req.url, {
		headers: {
			Authorization: 'Bearer ' + access_token,
			'Content-Type': 'application/json',
		},
		method: req.method || 'GET',
		body: req.body || null,
	})
		.then(raw => raw.json())
		.then(json => res.json(json))
		.catch(error => res.status(error.status || 500).json({ error }));
}
