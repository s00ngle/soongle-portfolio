const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-40 sm:py-80 text-center gap-2">
      <h1 className="text-4xl sm:text-6xl font-bold">
        404 <span className="inline-block animate-pulse">Not</span> Found
      </h1>
      <p className="text-lg sm:text-2xl text-neutral-600 dark:text-neutral-400">
        Page not found
      </p>
    </div>
  );
};

export default NotFound;
