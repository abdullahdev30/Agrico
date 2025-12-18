"use client";
import { motion } from "framer-motion";

const WhyChooseAgrico = ({ data }) => {
  return (
    <section className="relative bg-[#30511D] dark:bg-[#6F8F6A] min-h-screen rounded-[2rem] px-4 sm:px-6 md:px-14 mx-2 sm:mx-4 md:mx-8 overflow-hidden">

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="lg:hidden flex flex-col gap-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-cream">
          WHY CHOOSE AGRICO.
        </h2>

        {data.reasons.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#466333] border-4 border-cream-dark/30 dark:bg-[#1C2A22] rounded-3xl p-6"
          >
            <h3 className="text-cream text-lg sm:text-xl font-semibold mb-3">
              {card.title}
            </h3>
            <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden lg:block h-screen relative max-w-[1600px] mx-auto">

        {/* Top-left card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            absolute
            top-1 2xl:top-4
            left-24 xl:left-32 2xl:left-48
            bg-[#466333] dark:bg-[#1C2A22]
            border-4 border-cream-dark/30
            md:w-[500px] xl:w-[550px] 2xl:w-[600px]
            md:h-[210px] xl:h-[250px] 2xl:h-[300px]
            rounded-3xl p-6 xl:p-8
            backdrop-blur-sm
          "
        >
          <h3 className="text-text-light text-xl xl:text-2xl font-bold mt-3">
            Expert Agricultural Knowledge
          </h3>
          <p className="text-text-light text-lg xl:text-xl leading-relaxed">
            Our team brings decades of farming expertise to help you maximize crop
            yields and implement sustainable practices.
          </p>
        </motion.div>

        {/* Center heading */}
        <div className="absolute top-[55%] -translate-y-1/2">
          <h2 className="text-[44px] xl:text-[44px] 2xl:text-[56px] font-bold text-text-light">
            WHY CHOOSE AGRICO.
          </h2>
        </div>

        {/* Middle-right card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="
            absolute
            top-[25%]
            left-[45%] xl:left-[42%] 2xl:left-[40%]
            bg-[#466333] dark:bg-[#1C2A22]
            border-4 border-cream-dark/30
            md:w-[500px] xl:w-[550px] 2xl:w-[600px]
            md:h-[210px] xl:h-[250px] 2xl:h-[300px]
            rounded-3xl p-6 xl:p-8
          "
        >
          <h3 className="text-text-light text-xl xl:text-2xl font-bold mt-3">
            Cutting-Edge Technology
          </h3>
          <p className="text-text-light text-lg xl:text-xl leading-relaxed">
            We utilize the latest agricultural technology and equipment to ensure
            efficient and modern farming solutions.
          </p>
        </motion.div>

        {/* Bottom-right card */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="
            absolute
            top-[60%] 2xl:top-[55%]
            left-[59%] xl:left-[58%] 2xl:left-[60%]
            bg-[#466333] dark:bg-[#1C2A22]
            border-4 border-cream-dark/30
            w-[400px] md:w-[500px] xl:w-[550px] 2xl:w-[600px]
            md:h-[210px] xl:h-[250px] 2xl:h-[300px]
            rounded-3xl p-6 xl:p-8
            backdrop-blur-sm
          "
        >
          <h3 className="text-text-light text-xl xl:text-2xl font-bold mt-3">
            Sustainable Practices
          </h3>
          <p className="text-text-light text-lg xl:text-xl mt-4">
            Environmental responsibility is at our core. We promote eco-friendly
            farming methods that protect our planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseAgrico;
