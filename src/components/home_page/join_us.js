import siteData from "../../data/home.json";

const NewsletterSection = () => {
  const data = siteData.newsletterSection;

  return (
    <section  className="relative   rounded-[3rem] sm:rounded-[2rem] md:rounded-[2rem]
 m-4 overflow-hidden bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
      
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center w-full max-w-3xl px-6">
          <h2 className="text-[#E4EBCD] text-2xl md:text-3xl lg:text-4xl font-display font-semibold tracking-wide mb-8">
            {data.heading}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="your email here"
              className="w-full sm:w-[420px]  px-6 bg-[#30511D] dark:bg-primary py-3 rounded-full text-text-light placeholder:text-cream/70 placeholder:center outline-none"
            />

            <button className="px-8 py-3 rounded-full bg-[#E4EBCD]  dark:bg-primary font-medium text-text-light hover:bg-cream/90 transition">
              {data.buttonText}
            </button>
          </div>
        </div>
    </section>
  );
};

export default NewsletterSection;
