import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => {
    return (
        <div className="p-2">
            <Card className="animate-pulse">
                <CardContent className="relative p-0">
                    <Skeleton className="w-[160px] h-[240px]" />
                </CardContent>
            </Card>
        </div>
    );
};

export default MovieCardSkeleton;
