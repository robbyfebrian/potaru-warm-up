export const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
export const POPULAR_MOVIES_URL = process.env.NEXT_PUBLIC_POPULAR_MOVIES_URL;
export const UPCOMING_MOVIES_URL = process.env.NEXT_PUBLIC_UPCOMING_MOVIES_URL;
export const MOVIES_DETAIL_URL = process.env.NEXT_PUBLIC_MOVIES_URL;
export const KEYWORD_MOVIES_URL = process.env.NEXT_PUBLIC_KEYWORD_MOVIES_URL;

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
};