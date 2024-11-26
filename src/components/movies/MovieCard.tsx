'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card , CardContent } from "@/components/ui/card";

interface MovieCardProps {
    id : string | number;
    title : string;
    posterPath? : string;
}

const MovieCard = ({ id, title, posterPath } : MovieCardProps) => {
    return (
        <div className="p-2">
            <Card className="border-0 shadow-accent-foreground">
                <CardContent className="relative p-0">
                    <div className="relative group">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                            alt={title}
                            className="w-[160px] h-[240px] rounded-xl transition-all duration-300"
                            loading="lazy"
                            width={160}
                            height={240}
                        />
                        <Link href={`/movies/${id}`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 rounded-xl group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-75">
                                <span className="text-yellow-400 text-lg text-center font-bold mx-4 tracking-tighter leading-tighter">
                                  {title}
                                </span>
                            </div>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default MovieCard;