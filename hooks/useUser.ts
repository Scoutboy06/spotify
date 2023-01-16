import useSWR from 'swr';

export default function useUser() {
	const { data: user, error, mutate, isLoading } = useSWR('/api/me');
	const isLoggedIn = !error && !!user;

	return {
		isLoading,
		isLoggedIn,
		user,
		error,
		mutate,
	};
}
