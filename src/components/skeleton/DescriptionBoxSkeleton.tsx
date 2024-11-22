import { Skeleton } from "@/components/ui/skeleton";

const DescriptionBoxSkeleton = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-2">
            <Skeleton className="w-1/2 h-8 rounded-lg bg-gray-500" />
            <div className="flex items-center gap-x-3">
                {[...Array(3)].map((_, i) => (
                    <Skeleton
                        key={i}
                        className="w-[150px] h-10 rounded-3xl border-2 border-yellow-400"
                    />
                ))}
            </div>
            <Skeleton className="w-full max-w-5xl h-10 rounded-lg bg-white" />
        </div>
    );
};

export default DescriptionBoxSkeleton;