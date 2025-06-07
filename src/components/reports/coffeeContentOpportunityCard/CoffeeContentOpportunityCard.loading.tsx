import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <>
      <Card className="flex-1 shadow-none md:w-[calc(50%-12px)]">
        <CardHeader className="px-6 pt-6">
          <Skeleton className="h-[20px] w-[135px]" />
        </CardHeader>
        <Separator className="w-full" />
        <CardContent className="py-[34.5px] px-6 h-full flex flex-col items-center ">
          <Skeleton className="w-[224px] h-[224px] rounded-full" />
          <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[140px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[90px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex-1 shadow-none w-full  md:w-[calc(50%-12px)]">
        <CardHeader className="px-6 pt-6">
          <Skeleton className="h-[20px] w-[135px]" />
        </CardHeader>
        <Separator className="w-full" />
        <CardContent className="pb-[6px] pt-[14px] relative">
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

          <div className="flex flex-col mt-[34px] gap-y-3 gap-x-9 w-full">
            <Skeleton className="h-5 w-[220px] " />
            <Skeleton className="h-6 w-full " />
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Loading;
