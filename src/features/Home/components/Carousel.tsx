import { useEffect, useState } from "react"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { options, POPULAR_MOVIES_URL } from "@/constants/config";
import { Movies } from "@/types/Movies";

export function PopularMovies() {
    const [items, setItems] = useState<Movies[]>([])

    useEffect(() => {
        fetch(`${POPULAR_MOVIES_URL}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data.results || []);
            })
            .catch(error => console.log("Error fetching data:", error));
    }, [])

    return (
        <Carousel className="pb-8 w-full max-w-4xl mx-auto" opts={{align: "center", loop:true}}>
            <CarouselContent className="-ml-1">
                {items.map((item) => (
                    <CarouselItem key={item.id} className="pl-1 md:basis-1/4 lg:basis-1/5">
                        <div className="p-2">
                            <Card className="border-0 shadow-accent-foreground">
                                <CardContent className="relative p-0">
                                    <div className="relative group">
                                        {item.poster_path ? (
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                alt={item.title}
                                                className="w-full h-auto rounded-xl transition-all duration-300"
                                                loading="lazy"
                                                width={160}
                                                height={240}
                                            />
                                        ) : (
                                            <span className="text-2xl font-semibold">No Image</span>
                                        )}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-75">
                                            <span className="text-yellow-400 text-xl text-center font-bold mx-4">{item.title}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
