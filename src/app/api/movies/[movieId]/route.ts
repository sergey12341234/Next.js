// src/app/api/movies/route.ts
import { NextResponse } from 'next/server';
import { moviesFetch } from '@/api/movies/moviesFetch';

export async function GET(request: Request, { params }: { params: { movieId: string } }) {
  const { movieId } = params;

  const response = await moviesFetch(`films/${movieId}`);
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
