import Image from "next/image";

interface BackgroundProps {
    title? : string;
    backdrop_path? : string;
}

const DetailBackground = ({ title, backdrop_path }: BackgroundProps) => {
    return (
        <Image
            priority={true}
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            // @ts-ignore
            alt={title}
            className="w-full h-[100vh] object-cover absolute top-0 left-0 z-[-1]"
            width={1000}
            height={1200}
        />
    )
};

export default DetailBackground;