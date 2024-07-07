// src/app/(mainLayout)/movies-api/[movieId]/page.tsx
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { MOVIES_REVALIDATE_TIME } from '@/(mainLayout)/movies-api/constants';
import { getMovie } from '@/(mainLayout)/movies-api/[movieId]/getMovie';
import { MovieInfo } from '@/(mainLayout)/movies-api/[movieId]/components/MovieInfo';

export default async function MoviesPage({ params }: { params: { movieId: string } }) {
  const { movieId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [ 'movie-by-id', movieId ],
    queryFn: () => getMovie({ movieId }),
    staleTime: MOVIES_REVALIDATE_TIME,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <div className='flex flex-col h-fit w-full items-center mt-5'>
        <div className='max-w-[1480px]'>
          <MovieInfo movieId={ movieId } />
        </div>
      </div>
    </HydrationBoundary>
  );
}
