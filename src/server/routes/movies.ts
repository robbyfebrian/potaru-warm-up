import { Hono } from 'hono';
import { Movies } from '@/types/Movies';
import { fetcher } from '@/server/utils/fetcher';
import { KEYWORD_MOVIES_URL, options, POPULAR_MOVIES_URL, UPCOMING_MOVIES_URL } from '@/constants/config';

const movies = new Hono()
    .get('/', async (c) => {
    try {
        const [upcoming, popular] = await Promise.all([
            fetcher<{ results: Movies[] }>(`${ UPCOMING_MOVIES_URL }`, options),
            fetcher<{ results: Movies[] }>(`${ POPULAR_MOVIES_URL }`, options),
        ]);

        console.log(c.json({ upcoming : upcoming.results, popular : popular.results }));
        return c.json({ upcoming : upcoming.results, popular : popular.results });
    } catch ( error ) {
        console.error('Error fetching upcoming movies:', error);
        return c.json({ error : error instanceof Error ? error.message : 'Unexpected error' }, 500);
    }
    })

    .get('/search', async (c) => {
    const keyword = c.req.query('keyword');
    if (! keyword) {
        return c.json({ error : 'Keyword is required' }, 400);
    }

    try {
        const data = await fetcher<{ results: Movies[] }>(
            `${ KEYWORD_MOVIES_URL }${ encodeURIComponent(keyword) }`,
            options
        );
        return c.json(data.results);
    } catch ( error ) {
        return c.json({ error : error instanceof Error ? error.message : 'Unexpected error' }, 500);
    }
});

export default movies;