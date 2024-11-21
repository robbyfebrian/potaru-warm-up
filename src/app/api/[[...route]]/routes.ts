import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import movies from "@/server/routes/movies";
import details from "@/server/routes/details";

const app = new Hono().basePath('/api');

const routes = app
    .route("/movies", movies)
    .route("/details", details)

export const GET = handle(app)

export type AppType = typeof routes;