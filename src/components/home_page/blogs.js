import React from "react";
import homeData from "../../data/home.json"; // Your JSON file

const BlogSection = () => {
  const blogSection = homeData.blogSection; // directly use data

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block  text-[#262A1D] px-6 py-2 rounded-full text-sm font-medium tracking-wide mb-4" style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}>
            {blogSection.category}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#262A1D] leading-tight">
            {blogSection.heading}
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {blogSection.blog.map((item, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imagePath}
                  alt={item.altText}
                  className="w-full h-full rounded-[4rem] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <time className="text-[#262A1D] text-sm">{item.date}</time>
                <h3 className="font-display text-lg md:text-xl font-semibold text-[#262A1D] mt-2 mb-4 leading-snug">
                  {item.title}
                </h3>
                <button
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}
                  className="px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--btn-hover-bg)] transition-colors"
                >
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            style={{
              borderColor: "var(--btn-bg)",
              color: "var(--btn-bg)",
            }}
            className="px-8 py-2.5 rounded-full font-medium hover:bg-[var(--btn-bg)] hover:text-black transition-colors border-2"
          >
            {blogSection.callToAction}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
