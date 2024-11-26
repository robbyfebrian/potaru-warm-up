import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

const useGetMovieDetail = (id: string) => {
    return useQuery({
        enabled: !!id,
        queryKey: ["details", { id }],
        queryFn: async () => {
            const response = await client.api.details[":id"].$get({ param: { id } });
            if (!response.ok) { throw new Error("Failed to fetch movie details"); }
            return await response.json();
        },
    });
};

export default useGetMovieDetail;