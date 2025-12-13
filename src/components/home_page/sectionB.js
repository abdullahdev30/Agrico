const MetricsBlock = ({ data }) => {
  return (
    <section className=" mx-auto bg-[#30511D]  rounded-[4rem] p-8 mb:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <h2 className="font-bold text-[28px] md:text-[36px] leading-[1.2] tracking-[0.1rem] text-[#F2FFE2] uppercase max-w-[500px]">
          {data.headline}
        </h2>
        <p className="font-semibold italic text-[18px] md:text-[22px] leading-[1.4] text-[#F2FFE2] max-w-[500px]">
          {data.tagline}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-row gap-4 lg:w-[70%]">
          {data.imageGallery.map((image, index) => (
            <div 
              key={index} 
              className="flex-1 h-[400px] md:h-[450px] rounded-xl overflow-hidden"
            >
              <img
                src={image.imagePath}
                alt={image.altText}
                className="w-full h-full rounded-[2rem] object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between lg:w-[45%] gap-6">
          {data.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <span className="block font-bold text-[40px] md:text-[52px] leading-none text-[#F2FFE2]">
                {metric.value}
              </span>
              <h3 className="font-bold text-[16px] md:text-[18px] uppercase tracking-[0.05em] text-[#F2FFE2]">
                {metric.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.4] text-[#F2FFE2] max-w-[350px]">
                {metric.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBlock;
