const NotFound = () => {
  return (
    <div className="p-15 pl-15 flex gap-10">
      <section className="flex flex-col items-center justify-center my-auto mx-auto min-h-[50vh]">
        <h1 className="text-8xl mx-auto lg:text-[320px] opacity-70 font-bold">
          Sh<span className="text-red-500">!</span>sh
        </h1>
        <h3 className="mx-auto text-4xl text-center lg:text-5xl">ERROR 404</h3>
        <h4 className="mx-auto text-4xl text-center lg:text-5xl">
          Page not found
        </h4>
      </section>
    </div>
  );
};

export default NotFound;
