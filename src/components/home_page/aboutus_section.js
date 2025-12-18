const AboutCompany = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#E4EBCD] mx-4 rounded-[3rem] sm:rounded-[2rem] dark:bg-[#6F8F6A] overflow-hidden"
    >
      {/* ================= TEXT ================= */}
      <div className="px-6 pt-16 lg:p-0 flex flex-col gap-6 lg:block">
        <span className="static lg:absolute lg:top-16 lg:left-24 bg-primary px-6 py-2 rounded-full text-sm font-medium tracking-wide w-fit">
          ABOUT OUR COMPANY
        </span>

        <h2 className="static lg:absolute lg:top-32 lg:left-24 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
          Yielding
          <br className="hidden lg:block" />
          Results Together
        </h2>

        <p className="static lg:absolute lg:top-16 lg:right-24 w-full sm:w-[90%] lg:w-[380px] text-text-light text-sm leading-relaxed">
          We are a comprehensive agricultural business dedicated to modern farming,
          dairy production, and agricultural machinery solutions. Combining over
          years of hands-on expertise with the latest technology, we ensure
          sustainable crop cultivation, healthy and hygienic dairy operations, and
          reliable tractor trading and equipment rental services. Our farms are
          equipped with solar-powered systems, CCTV monitoring, drone spraying,
          and submersible pumps, allowing us to maximize productivity and
          efficiency.
        </p>
      </div>

      {/* ================= MOBILE IMAGES (GRID) ================= */}
      {/* Mobile ONLY: 2 images per row, max 6 images */}
      <div className="lg:hidden mt-10 px-6">
        <div className="grid grid-cols-2 gap-4 place-items-center">
          {[
            "/home_page/about_section/image_1.svg",
            "/home_page/about_section/image_3.svg",
            "/home_page/about_section/image_4.svg",
            "/home_page/about_section/image_6.svg",
            "/home_page/about_section/image_5.svg",
            "/home_page/about_section/image_2.svg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP IMAGES (UNCHANGED) ================= */}
      <div className="hidden lg:block">
        <img
          src="/home_page/about_section/image_1.svg"
          className="absolute bottom-24 left-12 w-48 h-48 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_3.svg"
          className="absolute top-[50%] left-[20%] w-36 h-36 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_4.svg"
          className="absolute top-[75%] left-[16%] w-36 h-36 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_6.svg"
          className="absolute top-[64%] left-[29%] w-56 h-56 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_5.svg"
          className="absolute top-[47%] left-[43%] w-40 h-40 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_2.svg"
          className="absolute top-[70%] left-[50%] w-44 h-44 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_7.svg"
          className="absolute top-[57%] left-[65%] w-44 h-44 rounded-full object-cover"
          alt=""
        />
        <img
          src="/home_page/about_section/image_8.svg"
          className="absolute top-[60%] left-[80%] w-56 h-56 rounded-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutCompany;
