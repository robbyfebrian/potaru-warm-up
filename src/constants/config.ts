export const ACCESS_TOKEN = `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
export const POPULAR_MOVIES_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular`;
export const UPCOMING_MOVIES_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming`;
export const MOVIES_DETAIL_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/movie/`;
export const KEYWORD_MOVIES_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/search/movie?query=`;

export const AUTHORIZATION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
};