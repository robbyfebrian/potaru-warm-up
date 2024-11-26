import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

const useGetSimilarMovies = (id: string) => {
    return useQuery({
        enabled: !!id,
        queryKey: ['similar', id],
        queryFn: async () => {
            const response = await client.api.details[":id"].similar.$get({ param: {  id } })
            if (!response.ok) { throw new Error("Failed to fetch similar movie"); }
            return await response.json();
        }
    })
}

export default useGetSimilarMovies;