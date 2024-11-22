import React from "react";

interface GenreProps {
    genres: {
        id: number;
        name: string;
    } [] | undefined;
}

const Genre = ({ genres }: GenreProps) => {
    return (
        <div className="flex justify-center items-center gap-2 mb-2">
            {genres?.map((item) => (
                <span key={item?.id} className="font-bold text-white border-2 border-yellow-400 rounded-3xl px-3 py-1">{item?.name}</span>
            ))}
        </div>
    )
}

export default Genre;