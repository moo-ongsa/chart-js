import { CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <CardContent>
      <Skeleton className="h-[258px] w-full rounded-xl" />
      <div className="grid grid-cols-2 gap-4 mt-[34px] gap-y-[7.5px] gap-x-9">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </CardContent>
  );
};

export default Loading;
