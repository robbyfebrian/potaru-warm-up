import React, { useState } from "react";
import { Movies } from "@/types/Movies";
import useMovieId from "@/hooks/use-movie-id";

const DetailFeature = async () => {
    const movieId = useMovieId()

    const [movie, setMovie] = useState<Movies | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <main className="max-w-4xl mx-auto p-4 text-white">
            <h1 className="text-4xl font-bold">{movie?.title}</h1>
            <p className="mt-4"></p>
            <p className="mt-2">Release Date: </p>
            {movie?.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="mt-4 rounded-lg"
                />
            )}
        </main>
    )
}

export default DetailFeature;