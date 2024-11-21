import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/server/utils/fetcher";
import { Movies } from "@/types/Movies";
import { options, UPCOMING_MOVIES_URL } from "@/constants/config";

const useGetPopularMovies = () => {
    return useQuery({
        queryKey: ["popular"],
        queryFn: async () => {
            const response = await fetcher<{ results: Movies[] }>(`${ UPCOMING_MOVIES_URL }`, options);
            if (!response.ok) { throw new Error("Failed to fetch popular movies"); }
            const { popular } = await response.json();
            return popular;
        },
    });
};

export default useGetPopularMovies;