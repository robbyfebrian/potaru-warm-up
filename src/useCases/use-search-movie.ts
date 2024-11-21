import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

const useSearchMovie = (keyword: string) => {
    return useQuery({
        enabled: !!keyword,
        queryKey: ["search", keyword],
        queryFn: async () => {
            const response = await client.api.movies.search.$get({ query: { keyword } });
            if (!response.ok) { throw new Error("Failed to fetch search results"); }
            return await response.json();
        },
    });
};

export default useSearchMovie;