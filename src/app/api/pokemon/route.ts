import { NextRequest, NextResponse } from 'next/server';

const apiUri = process.env.NEXT_PUBLIC_API_URI as string;

export async function GET(request: NextRequest) {
  const limit = request.nextUrl.searchParams.get('limit') as string;
  const offset = request.nextUrl.searchParams.get('offset') as string;

  // Parse the URL
  const url = new URL(`${apiUri}/pokemon`);

  // Create query parameters
  const searchParams = new URLSearchParams();
  searchParams.set('limit', limit);
  searchParams.set('offset', offset);

  // Update the URL with the new search parameters
  url.search = searchParams.toString();

  // Resulting URL
  const updatedUrl = url.toString();
  const response = await fetch(updatedUrl);
  const result = await response.json();
  return NextResponse.json(result, { status: 200 });
}

// export async function POST(req: NextRequest): TCustomNextApiResponse<{id: number}> {
//   const body = await req.json();
//   const response = await fetch(`${URI}/pokemon`, {
//     method: 'POST',
//     body,
//   });
//   const result = await response.json();
//   return NextResponse.json(result, { status: 200 });
// }
