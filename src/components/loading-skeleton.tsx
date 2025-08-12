import { Skeleton } from "./ui/skeleton";

function WeatherSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-6 items-center ">
          {
            Array.from({length:6}).map((_,index)=>(
              <Skeleton key={index} className="h-[100px] w-full grid-cols-2" />
            ))
          }
          
        </div>
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default WeatherSkeleton;
