import { useParams } from "next/navigation";

const useMovieId = () => {
    const params = useParams();
    return params.id as string;
};

export default useMovieId;