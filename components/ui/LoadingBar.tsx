const LoadingBar = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="relative h-1 w-full sm:w-1/2 bg-muted mb-[25%]">
        <div className="relative top-0 h-1 w-full rounded overflow-hidden after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:-translate-x-full after:bg-primary after:animate-loader" />
      </div>
    </div>
  );
};

export default LoadingBar;
