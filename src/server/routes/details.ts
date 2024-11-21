import { Hono } from 'hono';
import { fetcher } from '@/server/utils/fetcher'
import { Details } from "@/types/Details";
import { MOVIES_DETAIL_URL, options } from "@/constants/config";

const details = new Hono()
    .get("/:id", async (c) => {
        const id = c.req.param('id');
        try {
            const data = await fetcher<Details>(`${MOVIES_DETAIL_URL}${id}`, options);
            return c.json(data);
        } catch ( error ) {
            return c.json({ error: error instanceof Error ? error.message : 'Unexpected error occurred'}, 500)
        }
    })

export default details;
