import Image from "next/image";
import React from "react";

interface DetailPosterProps {
    title?: string;
    poster_path?: string;
}

const DetailPoster = ({ title, poster_path }: DetailPosterProps) => {
    return (
        <Image
            width={160}
            height={240}
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            // @ts-ignore
            alt={title}
        />
    )
}

export default DetailPoster;