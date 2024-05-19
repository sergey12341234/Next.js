import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getMovies } from '@/(mainLayout)/movies-api/getMovies';
import { MovieCart } from './components/MovieCart';

export default async function MoviesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [ 'movies' ],
    queryFn: getMovies,
    staleTime: 1 * 60 * 1000,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <div className='flex flex-col h-fit w-full'>
        <MovieCart />
      </div>
    </HydrationBoundary>
  );
}
