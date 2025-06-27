import AppLoader from "@/components/ui/app-loader";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AppLoader />
    </div>
  );
};

export default Loading;
