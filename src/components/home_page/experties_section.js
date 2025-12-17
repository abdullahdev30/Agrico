

const Expertise = ({ data }) => {
  return (
    <section className=" max-w-7xl min-h-screen bg-[#30511D] dark:bg-[#141F17] text-expertise-foreground px-4 py-8 md:px-8   rounded-[2.5rem] p-6 sm:p-8 md:p-12 m-8 lg:px-12 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 lg:mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl italic tracking-tight max-w-md">
            {data.heading}
          </h2>
          <p className="text-expertise-muted text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:text-right">
            {data.tagline}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {data.services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col group"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={service.imagePath}
                  alt={service.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-semibold text-base md:text-lg lg:text-xl text-center text-expertise-foreground">
                {service.title}
              </h3>
              <p className="mt-1 text-xs md:text-sm text-center text-expertise-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
