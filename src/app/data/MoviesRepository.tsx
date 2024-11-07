export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const KEYWORD_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie?query=';
export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    }
};

export type Movie = {
    id: number;
    title: string;
    poster_path: string | null;
};