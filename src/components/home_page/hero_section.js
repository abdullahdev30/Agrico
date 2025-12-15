import Theme from "../../components/toggle"

const HeroSection = ({ data }) => {
  return (
    <section 
      className=" relative h-[650px]  md:h-[550px] sm:h-[380px] bg-cover bg-center rounded-[84px] md:rounded-[3rem] sm:rounded-[2rem] overflow-hidden "
      style={{ backgroundImage: `url("/home_page/hero_bg.svg")` }}
    >
       <Theme className="m-8"/>
      
      <h1 className="absolute left-1/2 top-[45%] md:top-[43%] sm:top-[40%] -translate-x-1/2 w-[95%] max-w-[1200px] text-center font-semibold text-[56px] md:text-[36px] sm:text-[28px] leading-[1.1] md:leading-[1.15] sm:leading-[0.1] tracking-[0.05em] md:tracking-[0.06em] sm:tracking-[0.07em] px-4">
        {data.title}
      </h1>
      
      <p className="absolute left-1/2 top-[70%] md:top-[72%] sm:top-[68%] -translate-x-1/2 w-[95%] max-w-[1000px] md:max-w-[700px] sm:max-w-[500px] text-center font-semibold text-[26px] md:text-[20px] sm:text-[16px] leading-[1.4] md:leading-[1.45] sm:leading-[1.5] tracking-[0.03em] md:tracking-[0.04em] sm:tracking-[0.05em] px-4">
        {data.description}
      </p>

      <div className="absolute left-1/2 bottom-[5%] md:bottom-[6%] sm:bottom-[7%] -translate-x-1/2 flex flex-col gap-2 items-center">
        <div className="border border-transparent p-1 backdrop-blur-sm">
          <a href="/" className="text-[#F9FAD9] font-normal text-[14px] md:text-[13px] sm:text-[12px]">
            Explore Now
          </a>
        </div>
        <div className="w-8 h-12 md:w-7 md:h-11 sm:w-6 sm:h-10 rounded-full bg-[#F9FAD9] flex items-center justify-center text-[16px] md:text-[14px] sm:text-[12px]">
          L
        </div>
      </div>
    </section>
  );
};

export default HeroSection;