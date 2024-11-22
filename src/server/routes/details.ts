import { Hono } from 'hono';
import { fetcher } from '@/server/utils/fetcher'
import { Details } from "@/types/Details";
import { AUTHORIZATION , MOVIES_DETAIL_URL } from "@/constants/config";
import { SimilarMovie } from "@/types/SimilarMovie";

const details = new Hono()
    .get("/:id", async (c) => {
        const id = c.req.param('id');
        try {
            const data = await fetcher<Details>(`${MOVIES_DETAIL_URL}${id}`, AUTHORIZATION);
            return c.json(data);
        } catch ( error ) {
            return c.json({ error: error instanceof Error ? error.message : 'Unexpected error occurred'}, 500)
        }
    })
    .get("/:id/similar", async (c) => {
        const id = c.req.param('id');
        try {
            const data = await fetcher<SimilarMovie>(`${MOVIES_DETAIL_URL}${id}/similar`, AUTHORIZATION);
            console.log(c.json(data))
            return c.json(data);
        } catch ( error ) {
            return c.json({ error: error instanceof Error ? error.message : 'Unexpected error occurred'}, 500)
        }
    })

export default details;
