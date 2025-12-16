
const InnovationSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full max-w-7xl min-h-screen mx-auto bg-bg dark:bg-[#6F8F6A]  rounded-[2.5rem] p-6 sm:p-8 md:p-12 my-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
        <div className="flex flex-col gap-4 max-w-[520px]">
          <span className="w-fit px-5 py-2 bg-primary text-primary-text text-xs font-medium dark:text-text rounded-full">
            {data.category}
          </span>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl md:text-4xl leading-tight tracking-wide text-text-light dark:text-text ">
            {data.heading}
          </h2>
        </div>
        <p className="max-w-[420px] text-sm sm:text-base md:text-lg leading-relaxed text-text-light dark:text-text">
          {data.summary}
        </p>
      </div>

      {/* Feature Grid - 2x2 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden ">
              <img
                src={feature.imagePath}
                alt={feature.altText}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-center font-medium text-sm sm:text-base text-text-light dark:text-text">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationSection;
