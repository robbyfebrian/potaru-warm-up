export type Details = {
    data:
        | {
        title: string;
        poster_path: string;
        vote_average: number | string;
        id: number | string;
        release_date: string;
        original_language: string;
    } [] | undefined
}