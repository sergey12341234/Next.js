// src/app/api/movies/route.ts
import { NextResponse } from 'next/server';
import { moviesFetch } from '@/api/movies/moviesFetch';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';

  const response = await moviesFetch(`films?page=${page}`);
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
