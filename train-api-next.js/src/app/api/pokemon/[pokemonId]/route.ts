import { NextResponse } from 'next/server';

const apiUri = process.env.NEXT_PUBLIC_API_URI as string;

export async function GET(
  request: Request,
  { params }: { params: { pokemonId: string } },
) {
  const { pokemonId } = params;
  const response = await fetch(`${apiUri}/pokemon/${pokemonId}`);
  const result = await response.json();
  return NextResponse.json(result, { status: 200 });
}
