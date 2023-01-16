import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';
import Cookies from 'cookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const cookies = new Cookies(req, res);
	const access_token = cookies.get('access_token');

	if (!access_token) {
		console.log('No access_token');

		return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
		// return res.status(401).json({ error: 'Unauthorized' });
	}

	console.log('access_token');

	return NextResponse.next();
}
