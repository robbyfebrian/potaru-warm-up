import { Skeleton } from "@/components/ui/skeleton";

const GenreSkeleton = () => {
    return (
        <div className="flex justify-center items-center gap-2 mb-2">
            {[...Array(4)].map((_, i) => (
                <Skeleton
                    key={i}
                    className="w-[80px] h-8 rounded-3xl border-2 yellow-400"
                />
            ))}
        </div>
    );
};

export default GenreSkeleton;

