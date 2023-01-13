import useSWR from 'swr';

export default function useUser() {
	const { data, error, mutate } = useSWR('/api/me');

	return {
		isLoading: !error && !data,
		isLoggedIn: !error && data && !data?.error,
		user: data,
		error,
		mutate,
	};
}
