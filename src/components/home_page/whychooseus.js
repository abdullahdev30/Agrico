import siteData from "../../data/home.json";

const WhyChooseAgrico = () => {
  const data = siteData.reasonsToChooseSection;

  return (
    <section className="relative bg-[#30511D] rounded-[86px]  px-6 md:px-14 m-4 md:mx-8 overflow-hidden min-h-[550px]">
      


          
          {/* Card 1 – more left */}
          <div className="absolute top-1 left-40 bg-olive-light/20 border-4 border-cream-dark/30 rounded-3xl p-6 w-[500px] h-[203px] bg-[#466333] backdrop-blur-sm">
            <h3 className="text-cream text-xl font-semibold mt-2">
              {data.reasons[0].title}
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed ">
              {data.reasons[0].description}
            </p>
          </div>
     <div className="absolute top-[50%] left-1">

          <h2 className=" text-[40px] font-semibold ">WHY CHOOSE AGRICO.</h2></div>
          {/* Card 2 – starts after text */}
          <div className="absolute top-[28%] left-[40%] bg-olive-light/20 border-4 border-cream-dark/30 rounded-3xl p-6 w-[500px] h-[203px] bg-[#466333]">
            <h3 className="text-cream text-xl font-semibold mt-2">
              {data.reasons[1].title}
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              {data.reasons[1].description}
            </p>
          </div>

          {/* Card 3 – bottom right corner */}
          <div className="absolute bottom-0 right-6 bg-olive-light/20 border-4 border-cream-dark/30 rounded-3xl p-6 w-[500px] h-[203px] bg-[#466333] backdrop-blur-sm">
            <h3 className="text-cream text-xl font-semibold mt-">
              {data.reasons[2].title}
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed mt-4">
              {data.reasons[2].description}
            </p>
          </div>

    </section>
  );
};

export default WhyChooseAgrico;
