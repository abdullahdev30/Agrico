const AboutCompany = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#E4EBCD] mx-4 rounded-[3rem] sm:rounded-[2rem] dark:bg-[#6F8F6A] overflow-hidden"
    >
      {/* ================= TEXT CONTENT ================= */}
<div className="px-6 pt-16 lg:p-0 flex flex-col gap-6 lg:block">

  {/* Badge */}
  <span className="static lg:absolute lg:top-16 lg:left-24 bg-primary px-6 py-2 rounded-full text-sm font-medium tracking-wide w-fit">
    ABOUT OUR COMPANY
  </span>

  {/* Heading */}
  <h2 className="static lg:absolute lg:top-32 lg:left-24 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
    Yielding
    <br className="hidden lg:block" />
    Results Together
  </h2>

  {/* Paragraph */}
  <p className="static lg:absolute lg:top-16 lg:right-24 w-full sm:w-[90%] lg:w-[380px] text-text-light text-sm leading-relaxed">
    We are a comprehensive agricultural business dedicated to modern farming,
    dairy production, and agricultural machinery solutions. Combining over years
    of hands-on expertise with the latest technology, we ensure sustainable crop
    cultivation, healthy and hygienic dairy operations, and reliable tractor
    trading and equipment rental services. Our farms are equipped with
    solar-powered systems, CCTV monitoring, drone spraying, and submersible
    pumps, allowing us to maximize productivity and efficiency. Through our
    integrated approach, we help farmers and businesses achieve higher yields,
    healthier livestock, and consistent, dependable results — all while
    providing professional, customer-focused services in both English and Urdu.
  </p>

</div>


      {/* ================= IMAGES ================= */}
      {/* Mobile: row | Desktop: absolute layout */}
      <div className="absolute bottom-6 left-0 right-0 lg:static">
        <div className="flex lg:block gap-4 px-4 overflow-x-auto lg:overflow-visible">

          <img
            src="/home_page/about_section/image_1.svg"
            alt=""
            className="w-32 h-32 rounded-full object-cover shrink-0
              lg:absolute lg:bottom-24 lg:left-12 lg:w-48 lg:h-48"
          />

          <img
            src="/home_page/about_section/image_3.svg"
            alt=""
            className="w-24 h-24 rounded-full object-cover shrink-0
              lg:absolute lg:top-[50%] lg:left-[20%] lg:w-36 lg:h-36"
          />

          <img
            src="/home_page/about_section/image_4.svg"
            alt=""
            className="w-24 h-24 rounded-full object-cover shrink-0
              lg:absolute lg:top-[75%] lg:left-[16%] lg:w-36 lg:h-36"
          />

          <img
            src="/home_page/about_section/image_6.svg"
            alt=""
            className="w-32 h-32 rounded-full object-cover shrink-0
              lg:absolute lg:top-[64%] lg:left-[29%] lg:w-56 lg:h-56"
          />

          <img
            src="/home_page/about_section/image_5.svg"
            alt=""
            className="w-28 h-28 rounded-full object-cover shrink-0
              lg:absolute lg:top-[47%] lg:left-[43%] lg:w-40 lg:h-40"
          />

          <img
            src="/home_page/about_section/image_2.svg"
            alt=""
            className="w-28 h-28 rounded-full object-cover shrink-0
              lg:absolute lg:top-[70%] lg:left-[50%] lg:w-44 lg:h-44"
          />

          <img
            src="/home_page/about_section/image_7.svg"
            alt=""
            className="w-28 h-28 rounded-full object-cover shrink-0
              lg:absolute lg:top-[57%] lg:left-[65%] lg:w-44 lg:h-44"
          />

          <img
            src="/home_page/about_section/image_8.svg"
            alt=""
            className="w-32 h-32 rounded-full object-cover shrink-0
              lg:absolute lg:top-[60%] lg:left-[80%] lg:w-56 lg:h-56"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
