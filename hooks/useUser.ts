import useSWR from 'swr';

export default function useUser() {
	const { data: user, error, mutate, isLoading } = useSWR('/api/me');
	const isLoggedIn = !error && !!user && !user?.error;

	return {
		isLoading,
		isLoggedIn,
		user,
		error,
		mutate,
	};
}
