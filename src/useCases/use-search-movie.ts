import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

const useSearchMovie = (query: string) => {
    return useQuery({
        enabled: !!query,
        queryKey: ["search", query],
        queryFn: async () => {
            const response = await client.api.movies.search.$get({ query: { query } });
            if (!response.ok) { throw new Error("Failed to fetch search results"); }
            return await response.json();
        },
    });
};

export default useSearchMovie;