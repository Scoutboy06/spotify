import type { NextApiResponse } from 'next';
import type { ProtectedApiRequest } from '@/middlewares/protect';

export default function handler(
	req: ProtectedApiRequest,
	res: NextApiResponse
) {
	fetch('https://api.spotify.com/v1' + req.url, {
		headers: {
			Authorization: 'Bearer ' + req.access_token,
			'Content-Type': 'application/json',
		},
		method: req.method || 'GET',
		body: req.body,
	})
		.then(res => res.text())
		.then(json => res.json(json))
		.catch(err => res.status(err.status || 500).json({ error: err }));
}
