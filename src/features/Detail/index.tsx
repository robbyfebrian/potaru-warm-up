'use client';

import Link from "next/link";
import { useGetMoviesByDetail } from "@/useCases";
import { RiArrowLeftDoubleLine } from "@remixicon/react";
import {
    DescriptionBox,
    DetailBackground,
    DetailPoster,
    Genre,
    SimilarMoviesCarousel
} from "@/features/Detail/components";
import { DescriptionBoxSkeleton, DetailPosterSkeleton, GenreSkeleton, } from "@/components/";
import React from "react";

const DetailFeature = ({ params }: { params: { id: string } }) => {
    const { data: movieDetail, isLoading, error } = useGetMoviesByDetail(params.id);

    if (error) {
        return <div className="text-center text-red-500">Something went wrong: {String(error)}</div>;
    }

    return (
        <div className="w-full h-[100vh] xs:py-5 xs:overflow-y-scroll relative">
            <Link href="/" className="absolute top-6 left-6">
                <RiArrowLeftDoubleLine size={60} color="gold" />
            </Link>
            <DetailBackground title={movieDetail?.title} backdrop_path={movieDetail?.backdrop_path} />
            <div className="w-full h-full bg-gray-900/50 flex justify-center items-center">
                <div className="max-w-[80%] lg:max-w-[90%] sm:max-w-full sm:px-3 sm:flex-col sm:items-center flex items-start gap-x-7">
                    {isLoading ? (
                        <DetailPosterSkeleton />
                    ) : (
                        <DetailPoster title={movieDetail?.title} poster_path={movieDetail?.poster_path} />
                    )}
                    {isLoading ? (
                        <DescriptionBoxSkeleton />
                    ) : (
                        <DescriptionBox
                            title={movieDetail?.title}
                            runtime={movieDetail?.runtime}
                            // @ts-ignore
                            revenue={movieDetail?.revenue}
                            // @ts-ignore
                            vote_average={movieDetail?.vote_average}
                            overview={movieDetail?.overview}
                        />
                    )}
                    {isLoading ? (
                        <GenreSkeleton />
                    ) : (
                        <Genre genres={movieDetail?.genres || []} />
                    )}
                    {isLoading ? (
                        <SimilarMoviesCarousel params={{ id: params.id }} />
                    ) : (
                        <SimilarMoviesCarousel params={{ id: params.id }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailFeature;
