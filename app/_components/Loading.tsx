import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <Skeleton className="bg-gray-200 opacity-5 h-20 w-1/2 flex  justify-center md:w-2/3 lg:w-3/4 xl:w-2/5 mt-6  mx-auto "></Skeleton>
      <main className="flex flex-col gap-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        {Array?.from({ length: 20 }, (_, index) => index + 1)?.map((id) => {
          return (
            <div className="border border-slate-600 rounded-md p-2" key={id}>
              <Skeleton className="h-6 w-2/3 opacity-5 bg-gray-200"></Skeleton>
              <Skeleton className="h-4 w-1/4 opacity-5 bg-gray-200 mt-3"></Skeleton>
              <Skeleton className="h-28 w-full opacity-5 rounded-md bg-gray-400 mt-4"></Skeleton>
              <Skeleton className="h-6 w-7 opacity-5 rounded-md bg-gray-400 mt-4"></Skeleton>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default loading;
