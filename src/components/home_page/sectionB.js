const MetricsBlock = ({ data }) => {
  return (
    <section
      className="
        mx-4
        rounded-[4rem] md:rounded-[3rem]
        pt-0 sm:p-8 md:p-5
        bg-[#30511D] dark:bg-[#131F15] text-primary-text
      "
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row p-5 justify-between gap-6 mb-10">
        <h2
          className="
            font-bold uppercase
            text-2xl sm:text-3xl md:text-4xl
            leading-tight tracking-wider
            max-w-[520px]
          "
        >
          {data.headline}
        </h2>

        <p
          className="
            font-medium italic
            text-base sm:text-lg md:text-xl
            leading-relaxed
            max-w-[520px]
          "
        >
          {data.tagline}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Images */}
        <div className="flex gap-4 lg:w-[60%]">
          {data.imageGallery.map((image, index) => (
            <div
              key={index}
              className="
                flex-1
                h-[260px] sm:h-[320px] md:h-[380px]
                rounded-2xl overflow-hidden
              "
            >
              <img
                src={image.imagePath}
                alt={image.altText}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-col pl-4 justify-between gap-6 md:gap-4 lg:w-[35%]">
          {data.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <span
                className="
                  block font-bold
                  text-3xl sm:text-4xl md:text-5xl
                  leading-none
                "
              >
                {metric.value}
              </span>

              <h3
                className="
                  font-semibold uppercase
                  text-sm sm:text-base
                  tracking-wider
                "
              >
                {metric.title}
              </h3>

              <p
                className="
                  text-sm sm:text-[15px]
                  leading-relaxed
                  max-w-[400px]
                "
              >
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
