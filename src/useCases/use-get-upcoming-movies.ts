import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

const useGetUpcomingMovies = () => {
    return useQuery({
        queryKey: ["upcoming"],
        queryFn: async () => {
            const response = await client.api.movies.$get();
            if (! response.ok) { throw new Error("Failed to fetch upcoming movies"); }
            const { upcoming } = await response.json();
            return upcoming;
        },
    });
};

export default useGetUpcomingMovies;