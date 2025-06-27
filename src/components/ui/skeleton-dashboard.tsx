export const SkeletonDashboard = () => {
  return (
    <div className="w-full h-full flex gap-7 pt-5">
      {/* Overview */}
      <div className="w-full h-full flex flex-col gap-7 overflow-auto">
        <div className="flex justify-between gap-7">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full h-28 bg-gray-300 dark:bg-muted rounded-xl p-6 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex justify-between gap-7">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full h-28 bg-gray-300 dark:bg-muted rounded-xl p-6 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex justify-between gap-7">
          <div className="w-full h-64 bg-gray-300 dark:bg-muted rounded-xl animate-pulse"></div>
          <div className="w-full h-64 bg-gray-300 dark:bg-muted rounded-xl animate-pulse"></div>
        </div>

        <div className="w-full h-52 bg-gray-300 dark:bg-muted rounded-xl animate-pulse"></div>
      </div>

      {/* Sidebar */}
    </div>
  );
};
