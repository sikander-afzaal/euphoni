import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [images, setImages] = useState(1);
  const fadeInVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImages((prev) => {
        if (prev === 4) {
          return 1;
        } else {
          return (prev += 1);
        }
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [images]);

  return (
    <section className="wrapper relative md:h-screen overflow-hidden min-h-[570px] isolate ">
      <div className="absolute inset-0  -z-10  pointer-events-none overflow-hidden">
        <img
          src="/glow.svg"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10 max-w-none object-contain"
          alt=""
        />
      </div>
      <div className="contain pb-[60px] pt-[130px]  lg:flex-row flex-col justify-between gap-6 sm:gap-10 items-start">
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
        <div className="w-full min-h-[350px] flex justify-center items-start lg:w-1/2 ">
          <AnimatePresence mode="wait">
            {images === 1 && (
              <motion.div
                variants={fadeInVariant}
                animate="animate"
                exit="exit"
                key={images}
                className="lg:max-w-none max-w-[600px] w-full flex justify-start items-start flex-col gap-4 p-4 rounded-lg bg-white "
                initial="initial"
              >
                <div className="flex justify-start items-center gap-3 w-full">
                  <div className="bg-black w-14 h-14 rounded-md"></div>
                  <div
                    className="flex
                  flex-col  justify-start items-start gap-1"
                  >
                    <h4
                      className="text-black
                    leading-[1] font-semibold text-2xl"
                    >
                      Hearth AI
                    </h4>
                    <p
                      className="text-black
                    leading-[1] text-opacity-60 text-base font-medium"
                    >
                      Daily Briefing
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full  items-start">
                  <div className="flex justify-start items-start flex-col gap-2">
                    <div className="flex justify-start items-center gap-5">
                      <p className="text-blue-500 text-sm font-medium">
                        Alex Perez
                      </p>
                      <a href="#" className="text-blue-500 text-sm font-medium">
                        Linkedin
                      </a>
                      <a href="#" className="text-blue-500 text-sm font-medium">
                        Twitter
                      </a>
                    </div>
                    <div className="flex justify-start items-start flex-col gap-3">
                      <div className="flex justify-start items-start flex-col gap-0.5">
                        <p className="text-black font-semibold text-sm">
                          1. Current role and location
                        </p>
                        <p className="text-black font-normal text-sm">
                          - Co-founder & Partner at YGen, United States
                        </p>
                      </div>
                      <div className="flex justify-start items-start flex-col gap-0.5">
                        <p className="text-black font-semibold text-sm">
                          1. Current role and location
                        </p>
                        <p className="text-black font-normal text-sm">
                          - Co-founder & Partner at YGen, United States
                        </p>
                      </div>
                      <div className="flex justify-start items-start flex-col gap-0.5">
                        <p className="text-black font-semibold text-sm">
                          1. Current role and location
                        </p>
                        <p className="text-black font-normal text-sm">
                          - Co-founder & Partner at YGen, United States
                        </p>
                      </div>
                      <div className="flex justify-start items-start flex-col gap-0.5">
                        <p className="text-black font-semibold text-sm">
                          1. Current role and location
                        </p>
                        <p className="text-black font-normal text-sm">
                          - Co-founder & Partner at YGen, United States
                        </p>
                      </div>
                      <div className="flex justify-start items-start flex-col gap-0.5">
                        <p className="text-black font-semibold text-sm">
                          1. Current role and location
                        </p>
                        <p className="text-black font-normal text-sm">
                          - Co-founder & Partner at YGen, United States
                        </p>
                      </div>
                      <p className="text-black font-normal text-sm">
                        Alex's personel website is{" "}
                        <a
                          href="#"
                          className="text-blue-500 underline font-bold"
                        >
                          https://xyz.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="bg-black min-w-[64px] w-16 h-16 rounded-lg"></div>
                </div>
              </motion.div>
              // <motion.img

              //   src="/hero1.png"
              //   c
              //   alt=""
              // />
            )}
            {images >= 2 && (
              <div className="flex justify-start items-start flex-col gap-3">
                {images >= 2 && (
                  <motion.div
                    variants={fadeInVariant}
                    animate="animate"
                    exit="exit"
                    initial="initial"
                  >
                    <div className="lg:max-w-none max-w-[600px] w-full flex justify-start items-center gap-2 p-4 text-blue-500 rounded-lg bg-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="min-w-[20px] h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <p className="text-black text-xs sm:text-sm font-medium">
                        Who are my{" "}
                        <span className="text-blue-500">
                          mutual connections
                        </span>{" "}
                        with Alex and where do they{" "}
                        <span className="text-blue-500">work</span>?
                      </p>
                    </div>
                    {/* <img
                      src="/hero2.png"
                      className="lg:max-w-none max-w-[600px] w-full object-contain"
                      alt=""
                    /> */}
                    {(images === 2 || images === 3) && (
                      <div className="mt-3 ml-2 flex justify-start items-center gap-1">
                        <div class="snippet" data-title="dot-flashing">
                          <div class="stage">
                            <div class="dot-flashing"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {images === 4 && (
                  <motion.div
                    variants={fadeInVariant}
                    animate="animate"
                    exit="exit"
                    initial="initial"
                    key={images}
                    src="/hero3.png"
                    className="lg:max-w-none max-w-[600px] w-full flex justify-start items-center gap-2 p-4 text-blue-500 rounded-lg bg-white "
                    alt=""
                  >
                    <div className="bg-black min-w-[32px] rounded h-8"></div>
                    <p className="text-black text-xs sm:text-sm font-medium">
                      Alex and you are mutually connected to{" "}
                      <span className="text-blue-500">Kristie Brown</span> and{" "}
                      <span className="text-blue-500">Ian Calloway</span> who
                      both work in tech sales roles at{" "}
                      <span className="text-blue-500">Apple</span>
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
