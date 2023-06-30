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
              <motion.img
                variants={fadeInVariant}
                animate="animate"
                exit="exit"
                initial="initial"
                key={images}
                src="/hero1.png"
                className="lg:max-w-none max-w-[500px] w-full object-contain"
                alt=""
              />
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
                    <img
                      src="/hero2.png"
                      className="lg:max-w-none max-w-[500px] w-full object-contain"
                      alt=""
                    />
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
                  <motion.img
                    variants={fadeInVariant}
                    animate="animate"
                    exit="exit"
                    initial="initial"
                    key={images}
                    src="/hero3.png"
                    className="lg:max-w-none max-w-[500px] w-full object-contain"
                    alt=""
                  />
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
