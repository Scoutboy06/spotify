import nc from 'next-connect';
import spotifyAPI from './functions/spotifyAPI';

const routes = nc()
	.get('/playlists/:id', spotifyAPI)
	.get('/me', spotifyAPI)
	.get('/me/player', spotifyAPI)
	.get('/me/player/devices', spotifyAPI)
	.get('/me/playlists', spotifyAPI);

const handler = nc().use('/api', routes);

export default handler;
