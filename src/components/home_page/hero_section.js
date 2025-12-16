import Navbar from "../navbar";

const HeroSection = ({ data }) => {
  return (
    <section
      className="
         h-screen
        sm:min-h-[580px]
        bg-cover bg-center
        rounded-[3rem] sm:rounded-[2rem] md:rounded-[2rem]
        mx-6
        bg-bg text-text
      "
      style={{ backgroundImage: `url("/home_page/hero_bg.svg")` }}
    >
      <Navbar className="m-6 md:m-10" />

      {/* Heading */}
      <h1
        className="
          absolute left-1/2 top-[42%]
          -translate-x-1/2
          w-[90%] max-w-[1100px]
          text-center font-semibold
          text-3xl sm:text-4xl md:text-5xl
          leading-tight
          tracking-wide
        "
      >
        {data.title}
      </h1>

      {/* Description */}
      <p
        className="
          absolute left-1/2 top-[62%]
          -translate-x-1/2
          w-[90%] max-w-[850px]
          text-center font-medium
          text-base sm:text-lg md:text-xl
          leading-relaxed
          tracking-wide
        "
      >
        {data.description}
      </p>

      {/* Bottom CTA */}
      <div
        className="
          absolute left-1/2 bottom-6 md:bottom-8
          -translate-x-1/2
          flex flex-col items-center gap-3
        "
      >
        <a
          href="/"
          className="
            px-4 py-2
            border-transparent
            backdrop-blur-sm
            rounded-md
            text-sm md:text-base
            hover:opacity-80 transition
          "
        >
          Explore Now
        </a>

        <div
          className="
            w-5 h-11 sm:w-3 sm:h-12
            rounded-full
            bg-white
            flex items-center justify-center
            text-sm md:text-base
          "
        >
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
