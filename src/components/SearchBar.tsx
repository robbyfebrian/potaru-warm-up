import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {KEYWORD_MOVIES_URL, Movie, options, UPCOMING_MOVIES_URL} from "@/app/data/MoviesRepository";

export function SearchBar() {
    const [query, setQuery] = useState<string>("")
    const [allMovies, setAllMovies] = useState<Movie[]>([])
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(UPCOMING_MOVIES_URL, options)
            .then((res) => res.json())
            .then((data) => {
                setAllMovies(data.results);
                setFilteredMovies(data.results);
                console.log(data);
            })
            .catch((error) => {
                setError(error);
                console.log(`Error fetching data: ${error}`);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const searchQuery = query.trim();

        if (!searchQuery) {
            setFilteredMovies(allMovies);
            return;
        }

        fetch(`${KEYWORD_MOVIES_URL}${encodeURIComponent(searchQuery)}&language=en-US&page=1`, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.results) {
                    setFilteredMovies(data.results);
                }
            })
            .catch((error) => {console.log("Error Fetching search result:", error)})
    };

    return (
        <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSearch} className="flex max-w-4xl justify-center items-center space-x-2 pb-8 mx-auto">
                <Input
                    type="text"
                    placeholder="Cari judul film favoritmu..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="text-white"
                />
                <Button type="submit" variant="secondary">
                    Search
                </Button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red">{error}</p>}

            <div className="flex justify-center items-center flex-wrap max-w-6xl gap-2">
                {filteredMovies && filteredMovies.length > 0 ? (
                    filteredMovies
                        .filter((movie) => movie.poster_path)
                        .map((movie) => (
                            <div className="p-2" key={movie.id}>
                                <Card className="border-0 shadow-accent-foreground">
                                    <CardContent className="relative p-0">
                                        <div className="relative group">
                                        {movie.poster_path ? (
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                    alt={movie.title}
                                                    className="rounded-xl transition-all duration-300"
                                                    loading="lazy"
                                                    width={160}
                                                    height={240}
                                                />
                                            ) : (
                                                <span className="text-2xl font-semibold">No Image</span>
                                            )}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-75">
                                                <span
                                                    className="text-yellow-400 text-xl text-center font-bold mx-4">{movie.title}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                ) : (
                    <p className="text-white">No result Found</p>
                )}
            </div>
        </div>
    )
}
