import { BackgroundImage } from "@/features/Home/components/BackgroundImage";
import { Title } from "@/features/Home/components/Title";
import { PopularMovies } from "@/features/Home/components/Carousel";
import { SearchBar } from "@/features/Home/components/SearchBar";

const HomeFeatures = () => {
    return (
        <div className="flex flex-col w-full">
            <BackgroundImage/>
            <div className="bg-black min-h-[100vh]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black-400 max-h-[100vh] opacity-90">
                <div className="relative flex flex-col justify-center min-h-screen items-center z-1">
                    <Title/>
                    <PopularMovies/>
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures;