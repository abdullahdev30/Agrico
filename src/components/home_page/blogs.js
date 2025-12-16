

const BlogSection = ({ data }) => {
  return (
    <section className="min-h-screen m-4  bg-secondary flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary text-text-light px-6 py-2 rounded-full text-sm font-medium tracking-wide mb-4">
            {data.category}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
            {data.heading}
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {data.blog.map((item, index) => (
            <article
              key={index}
              className="flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img
                  src={item.imagePath}
                  alt={item.altText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-5">
                <time className="text-text-light text-sm">{item.date}</time>
                <h3 className="font-display text-lg md:text-xl font-semibold text-text-light mt-2 mb-4 leading-snug">
                  {item.title}
                </h3>
                <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-2.5 rounded-full font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            {data.callToAction}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
