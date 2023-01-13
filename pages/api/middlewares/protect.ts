import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';

import Cookies from 'cookies';
import { NextResponse } from 'next/server';

export type ProtectedApiRequest = NextApiRequest & { access_token: string };

export default function handler(
	req: ProtectedApiRequest,
	res: NextApiResponse
) {
	const cookies = new Cookies(req, res);
	const access_token = cookies.get('access_token');

	if (!access_token) {
		return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
		// return res.status(401).json({ error: 'Unauthorized' });
	}

	req.access_token = access_token;
	return req;
}
