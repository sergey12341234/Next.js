import { MOVIE_API_URL } from '@/utils/constants';
import { NextRequest, NextResponse } from 'next/server';
import { moviesFetch } from './moviesFetch';

export async function GET(request: NextRequest) {
  const response = await moviesFetch(`${MOVIE_API_URL}/films`, {
    next: {
      revalidate: 3600,
    },
  });
  const result = await response.json();
  return NextResponse.json(result, { status: 200 });
}
