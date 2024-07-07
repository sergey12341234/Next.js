const isServer = typeof window === 'undefined';

export const BASE_URL = isServer ? process.env.NEXT_PUBLIC_BASE_URL : '';
