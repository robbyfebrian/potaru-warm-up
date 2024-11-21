import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useGetUpcomingMovies, useSearchMovie } from "@/useCases";
import { router } from "next/client";

export function SearchBar() {
    const [query, setQuery] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("")

    const { data: upcomingMovies, isLoading: isLoadingUpcoming, error: upcomingError } = useGetUpcomingMovies();
    const { data: searchedMovies, isLoading: isLoadingSearch, error: searchError } = useSearchMovie(searchTerm);

    const movieToShow = searchTerm ? searchedMovies : upcomingMovies;

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTerm(query);
    };

    const handleNavigateToDetail = async (id: number | string) => {
        await router.push(`/details/${ id }`)
    }

    return (
        <div className="max-w-7xl mx-auto">
            <form onSubmit={ handleSearch }
                  className="flex max-w-4xl justify-center items-center space-x-2 pb-8 mx-auto">
                <Input
                    type="text"
                    placeholder="Cari judul film favoritmu..."
                    value={ query }
                    onChange={ (e) => setQuery(e.target.value) }
                    className="text-white"
                />
                <Button type="submit" variant="secondary">
                    Search
                </Button>
            </form>

            { (isLoadingUpcoming || isLoadingSearch) && <p>Loading...</p> }

            { (upcomingError || searchError) && (
                <p className="text-red">{ upcomingError?.message || searchError?.message }</p>
            ) }

            <div className="flex justify-center items-center flex-wrap max-w-6xl gap-2">
                { movieToShow && movieToShow.length > 0 ? (
                    movieToShow
                        .filter((movie) => movie.poster_path)
                        .map((movie) => (
                            <div className="p-2" key={ movie.id }>
                                <Card className="border-0 shadow-accent-foreground" onClick={() => handleNavigateToDetail(movie.id)}>
                                    <CardContent className="relative p-0">
                                        <div className="relative group">
                                            { movie.poster_path ? (
                                                <Image
                                                    src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` }
                                                    alt={ movie.title }
                                                    className="rounded-xl transition-all duration-300"
                                                    loading="lazy"
                                                    width={ 160 }
                                                    height={ 240 }
                                                />
                                            ) : (
                                                <span className="text-2xl font-semibold">No Image</span>
                                            ) }
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-75">
                                                <span className="text-yellow-400 text-xl text-center font-bold mx-4">{ movie.title }</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                ) : (
                    <p className="text-white">No result Found</p>
                ) }
            </div>
        </div>
    )
}
