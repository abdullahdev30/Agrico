const HeroSection = ({ data }) => {
  return (
    <section 
      className="relative h-[350px] sm:h-[450px] md:h-[550px] bg-cover bg-center rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden mx-auto"
      style={{ backgroundImage: `url("/home_page/hero_bg.svg")` }}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      
      <h1 className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[95%] max-w-[1200px] text-center font-semibold text-[28px] sm:text-[40px] md:text-[56px] leading-[1.3] sm:leading-[1.4] md:leading-[1.5] tracking-[0.05em] sm:tracking-[0.07em] text-[#F9FAD9] px-4">
        {data.title}
      </h1>
      
      <p className="absolute left-1/2 top-[72%] sm:top-[75%] -translate-x-1/2 w-[90%] max-w-[800px] text-center font-semibold text-[14px] sm:text-[18px] md:text-[22px] leading-[1.4] tracking-[0.03em] sm:tracking-[0.05em] text-[#F9FAD9] px-4">
        {data.description}
      </p>

      <div className="absolute left-1/2 bottom-[5px] -translate-x-1/2 flex flex-col  gap-2 items-center">
        <div className="border border-transparent p-1 backdrop-blur-sm">
          <a href="/" className="text-[#F9FAD9] font-normal text-[12px] sm:text-[14px]">
            Explore Now
          </a>
        </div>
        <div className="w-2 h-8 rounded-full bg-[#F9FAD9]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
