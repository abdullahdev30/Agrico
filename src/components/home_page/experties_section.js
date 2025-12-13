

const Experties = ({ data }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto bg-[#30511D] rounded-[4rem] pt-4 md:p-10 lg:p-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex flex-col gap-4">
         
          <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[38px] leading-[1.15] mt-16 tracking-[0.02em]  uppercase max-w-[450px]">
            {data.heading}
          </h2>
        </div>
        
        <p className=" md:text-[15px] lg:text-[22px]  leading-[1.5] font-semibold  mt-16 w-[50%] ">
          {data.tagline}
        </p>
      </div>

      <div className="flex flex-wrap flex-row gap-6 md:gap-5">
        {data.services.map((services, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[200px] sm:h-[200px] md:h-[350px] rounded-xl overflow-hidden">
              <img
                src={services.imagePath}
                alt={services.altText}
                className="w-full h-full object-cover rounded-[4rem]"
              />
            </div>
            <h3 className="mt-3 font-semibold text-[14px] md:text-[16px]  text-center">
              {services.title}
            </h3>
            <p className="mt-3 font-semibold text-[14px] md:text-[16px]  text-center">
            {services.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experties ;
