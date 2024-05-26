// src/app/(mainLayout)/movies-api/page.tsx
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getMovies } from '@/(mainLayout)/movies-api/getMovies';
import { MOVIES_REVALIDATE_TIME } from '@/(mainLayout)/movies-api/constants';
import { MoviesList } from '@/(mainLayout)/movies-api/components/MoviesList';
import { useSearchParams } from 'next/navigation';

export default async function MoviesPage({
  searchParams,
}: {
  searchParams?: { search?: string; page?: string }
}) {
  const page = parseInt(searchParams?.page || '1', 10);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [ 'movies', page ],
    queryFn: () => getMovies(page),
    staleTime: MOVIES_REVALIDATE_TIME,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <div className='flex flex-col h-fit w-full items-center mt-5'>
        <div className='max-w-[1480px]'>
          <MoviesList />
        </div>
      </div>
    </HydrationBoundary>
  );
}
