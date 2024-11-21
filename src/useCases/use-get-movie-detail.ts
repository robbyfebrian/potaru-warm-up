import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

const useGetMovieDetail = (id: string) => {
    return useQuery({
        enabled: !! id,
        queryKey: ["details", { id }],
        queryFn: async () => {
            const response = await client.api.details[":id"].$get({ param: { id } });
            if (! response.ok) { throw new Error("Failed to fetch movie details"); }
            const { data } = await response.json();
            return data;
        },
    });
};

export default useGetMovieDetail;