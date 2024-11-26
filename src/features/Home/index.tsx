import { PopularMoviesCarousel } from "@/components";
import { HomeBackground, MoviesPage, Title } from "@/features/Home/components";

const HomeFeatures = () => {
    return (
        <main className="flex flex-col w-full">
            <HomeBackground/>
            <div className="bg-black min-h-[80vh]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black-400 max-h-[100vh] opacity-90">
                <div className="relative flex flex-col my-16 justify-center min-h-screen items-center z-1">
                    <Title/>
                    <PopularMoviesCarousel/>
                    <MoviesPage/>
                </div>
            </div>
        </main>
    )
}

export default HomeFeatures;