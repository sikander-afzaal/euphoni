const Hero = () => {
  return (
    <section className="wrapper pt-3 sm:pt-8 lg:pt-[80px]">
      <div className="contain lg:flex-row flex-col justify-between gap-6 sm:gap-10 items-start">
        <div className="flex justify-start w-full lg:w-1/2 items-start flex-col gap-4">
          <h2 className="text-[32px] sm:text-[45px] leading-[1.3] font-extrabold text-white">
            Next generation relationship management
          </h2>
          <p className="text-white text-base sm:text-lg  font-normal">
            AI powered tool for cultivating amazing personal and professional
            relationships.
          </p>
          <a
            className="bg-white sm:mt-2 rounded-full py-1.5 px-4 flex justify-center items-center gap-3 text-[rgb(15,23,2)] text-sm "
            href="#"
          >
            Request demo{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(168, 85, 247)"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="w-full flex justify-center items-center lg:w-1/2 ">
          <img
            src="/hero1.png"
            className="lg:max-w-none max-w-[500px] w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
