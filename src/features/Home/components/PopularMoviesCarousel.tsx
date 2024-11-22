'use client';

import React from "react";
import { Movies } from "@/types/Movies";
import { useGetPopularMovies } from "@/useCases";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import MovieCard from "@/components/movies/MovieCard";
import { MovieCardSkeleton } from "@/components";

const PopularMoviesCarousel = () => {
    const { data : popularMovies, isLoading : isLoading, error : error } = useGetPopularMovies();

    return (
        <div className="max-w-7xl mx-auto">
            {(error) && (
                <p className="text-red">
                    {error?.message}
                </p>
            )}
            <Carousel className="pb-8 w-full max-w-4xl mx-auto" opts={{ align : "center", loop : true }}>
                <CarouselContent className="-ml-1">
                    {isLoading ? (
                        [...Array(20)].map((_, i) =>
                            <CarouselItem key={i} className="pl-1 md:basis-1/4 lg:basis-1/5">
                                <MovieCardSkeleton />
                            </CarouselItem>
                        )
                    ) : (
                        popularMovies?.map((movie : Movies) => (
                            <CarouselItem key={movie.id} className="pl-1 md:basis-1/4 lg:basis-1/5">
                                    <MovieCard
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        posterPath={movie.poster_path}
                                    />
                            </CarouselItem>
                        )))}
                </CarouselContent>
                <CarouselPrevious variant='secondary'/>
                <CarouselNext variant='secondary'/>
            </Carousel>
        </div>
    )
}

export default PopularMoviesCarousel;