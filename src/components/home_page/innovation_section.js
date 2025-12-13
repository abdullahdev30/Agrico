

const InnovationSection = ({ data }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto bg-innovation-bg rounded-[2rem] p-6 md:p-10 lg:p-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex flex-col gap-4">
          {/* Category Badge */}
          <span className="inline-block w-fit px-4 py-1.5 bg-[#83A439] text-innovation-badge-text text-[11px] md:text-[12px] font-medium rounded-full">
            {data.category}
          </span>
          
          {/* Heading */}
          <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] tracking-[0.02em] text-black uppercase max-w-[450px]">
            {data.heading}
          </h2>
        </div>
        
        {/* Summary */}
        <p className=" md:text-[15px] lg:text-[22px]  leading-[1.5] font-semibold text-black mt-16 w-[40%] ">
          {data.summary}
        </p>
      </div>

      <div className="flex flex-wrap flex-row gap-6 md:gap-5">
        {data.features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[200px] sm:h-[200px] md:h-[350px] rounded-xl overflow-hidden">
              <img
                src={feature.imagePath}
                alt={feature.altText}
                className="w-full h-full object-cover rounded-[4rem]"
              />
            </div>
            <h3 className="mt-3 font-semibold text-[14px] md:text-[16px] text-black text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationSection;
