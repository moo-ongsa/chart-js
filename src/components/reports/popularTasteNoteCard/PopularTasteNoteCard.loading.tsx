import { AspectRatio } from "@/components/ui/AspectRatio";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    // <CardContent className="flex flex-1 flex-wrap gap-6 justify-center">
    <>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-2/3">
          <AspectRatio ratio={1 / 1} className="flex justify-center">
            <Skeleton className="w-full h-full rounded-full" />
          </AspectRatio>
        </div>
      </div>
      <Card className="flex-1 shadow-none">
        <CardHeader className="px-6 pt-[26px] pb-[7px]">
          <Skeleton className="h-[20px] w-[85px]" />
        </CardHeader>
        <CardContent className="pt-0 pb-[6px] relative max-h-[400px] overflow-auto">
          <div className="flex flex-col mt-[34px] gap-y-3 gap-x-9 w-full">
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-6 w-6 rounded-lg" />
              <Skeleton className="h-5 w-[120px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-6 w-6 rounded-lg" />
              <Skeleton className="h-5 w-[70px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-6 w-6 rounded-lg" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-6 w-6 rounded-lg" />
              <Skeleton className="h-5 w-[100px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-6 w-6 rounded-lg" />
              <Skeleton className="h-5 w-[60px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>

    // </CardContent>
  );
};

export default Loading;
