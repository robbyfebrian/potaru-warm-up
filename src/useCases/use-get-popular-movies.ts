import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

const useGetPopularMovies = () => {
    return useQuery({
        queryKey: ["popular"],
        queryFn: async () => {
            const response = await client.api.movies.$get();
            if (! response.ok) { throw new Error("Failed to fetch popular movies"); }
            const { popular } = await response.json();
            return popular;
        },
    });
};

export default useGetPopularMovies;