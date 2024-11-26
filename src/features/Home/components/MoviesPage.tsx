'use client';

import React, { useState } from "react";
import { useGetUpcomingMovies, useSearchMovie } from "@/useCases";
import SearchBar from "@/features/Home/components/SearchBar";
import MovieCard from "@/components/movies/MovieCard";
import { MovieCardSkeleton } from "@/components";

const MoviesPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { data: upcomingMovies, isLoading: isLoadingUpcoming, error: upcomingError } = useGetUpcomingMovies();
    const { data: searchedMovies, isLoading: isLoadingSearch, error: searchError } = useSearchMovie(searchTerm);

    const movieToShow = searchTerm ? searchedMovies : upcomingMovies;

    const handleSearch = (query: string) => {
        setSearchTerm(query);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <SearchBar onSearch={handleSearch} placeholder="Cari judul film favoritmu..." />

            {(upcomingError || searchError) && (
                <p className="text-red">
                    {upcomingError?.message || searchError?.message}
                </p>
            )}

            <div className="flex justify-center items-center flex-wrap max-w-6xl gap-2">
                <div className="flex justify-center items-center flex-wrap max-w-6xl gap-2">
                    {isLoadingSearch || isLoadingUpcoming ? (
                        [...Array(18)].map((_, i) => <MovieCardSkeleton key={i} />)
                    ) : (
                        movieToShow?.filter((movie) => movie.poster_path)
                            .slice(0, 18)
                            .map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    posterPath={movie.poster_path}
                                />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default MoviesPage;