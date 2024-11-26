'use client';

import { useGetSimilarMovies } from "@/useCases";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MovieCard, MovieCardSkeleton } from "@/components";

const SimilarMoviesCarousel = ({ params }: { params : { id : string } }) => {
    const { data : similarMovies, isLoading : isLoading, error : error } = useGetSimilarMovies(params.id);

    return (
        <div className="max-w-4xl mx-auto">
            {(error) && (
                <p className="text-red">
                    {error?.message}
                </p>
            )}
            <Carousel className="w-full max-w-4xl mx-auto" opts={{ align : "center", loop : true }}>
                <CarouselContent className="-ml-1">
                    {isLoading ? (
                        [...Array(20)].map((_, i) =>
                            <CarouselItem key={i} className="pl-1 md:basis-1/4 lg:basis-1/5">
                                <MovieCardSkeleton />
                            </CarouselItem>
                        )
                    ) : (
                        similarMovies?.results.map((movie: any) => (
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

export default SimilarMoviesCarousel;