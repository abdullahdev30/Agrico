
const AboutCompany = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden bg-[#E4EBCD]  mx-4  rounded-[3rem] sm:rounded-[2rem] md:rounded-[2rem] dark:bg-[#6F8F6A]">
      <span className="absolute top-16 left-12 lg:left-24 bg-primary  px-6 py-2 rounded-full text-sm font-medium tracking-wide">
        ABOUT OUR COMPANY
      </span>

      <h2 className="absolute top-32 left-12 lg:left-24 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
        Yielding
        <br />
        Results Together
      </h2>

      <p className="absolute top-16 right-12 lg:right-24 w-[300px] lg:w-[380px] text-text-light text-sm leading-relaxed">
        We are a comprehensive agricultural business dedicated to modern farming, dairy production, and agricultural machinery solutions. Combining over years of hands-on expertise with the latest technology, we ensure sustainable crop cultivation, healthy and hygienic dairy operations, and reliable tractor trading and equipment rental services. Our farms are equipped with solar-powered systems, CCTV monitoring, drone spraying, and submersible pumps, allowing us to maximize productivity and efficiency. Through our integrated approach, we help farmers and businesses achieve higher yields, healthier livestock, and consistent, dependable results — all while providing professional, customer-focused services in both English and Urdu.
      </p>

      
      <img
        src="/home_page/about_section/image_1.svg"
        alt="Golden wheat field"
        className="absolute bottom-24 left-4 lg:left-12 w-48 h-32 lg:w-48 lg:h-48 rounded-full object-cover"
      />

      <img
        src="/home_page/about_section/image_2.svg"
        alt="Green citrus fruits"
        className="absolute top-[45%] left-24 lg:left-36 w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover"
      />

      <img
        src="/home_page/about_section/image_3.svg"
        alt="Green fruits with blossoms"
        className="absolute top-[50%] left-35 lg:left-[20%] w-16 h-16 lg:w-32 lg:h-32 rounded-full object-cover"
      />

      <img
        src="/home_page/about_section/image_4.svg"
        alt="Fresh harvested potatoes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover z-10"
      />

      <img
        src="/home_page/about_section/image_5.svg"
        alt="Yellow corn cob"
        className="absolute top-[55%] left-[45%] w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
      />

      <img
        src="/home_page/about_section/image_6.svg"
        alt="Green crop field rows"
        className="absolute top-[40%] right-[20%] lg:right-[25%] w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover"
      />

      <img
        src="/home_page/about_section/image_7.svg"
        alt="Red agricultural tractor"
        className="absolute bottom-0 right-8 lg:right-16 w-36 h-36 lg:w-48 lg:h-48 rounded-full object-cover"
      />
    </section>
  );
};

export default AboutCompany;
