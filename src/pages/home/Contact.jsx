const Contact = () => {
  return (
    <section className="wrapper relative isolate">
      <div
        class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
        aria-hidden="true"
      >
        <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
        <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
      </div>
      <div className="contain justify-center items-center py-[100px]">
        <a
          className="bg-white sm:mt-2 rounded-full py-1.5 px-4 flex justify-center items-center gap-3 text-[rgb(15,23,2)] text-sm "
          href="#"
        >
          Contact Us{" "}
        </a>
      </div>
    </section>
  );
};

export default Contact;
