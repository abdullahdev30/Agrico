"use client"

import { motion } from "framer-motion"
import Navbar from "../navbar"

const HeroSection = ({ data }) => {
  return (
    <section
      className="
        relative
        h-screen sm:min-h-[580px]
        bg-cover bg-center
        rounded-[3rem] sm:rounded-[2rem] md:rounded-[2rem]
        mx-6
        bg-bg text-text
        flex flex-col  items-center
        px-6
      "
      style={{ backgroundImage: `url("/home_page/hero_bg.svg")` }}
    >
      <Navbar className="m-6 md:m-10 w-full" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
         mt-[12%]
          text-center font-semibold 
          text-3xl sm:text-4xl md:text-5xl
          leading-tight tracking-wide
          max-w-[1100px] w-full
        "
      >
        {data.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
        className="
          mt-4
          text-center font-medium
          text-base sm:text-lg md:text-xl
          leading-relaxed tracking-wide
          max-w-[850px] w-full
        "
      >
        {data.description}
      </motion.p>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <a
          href="/"
          className="
            px-4 py-2
            border-transparent
            backdrop-blur-sm
            rounded-md
            text-sm md:text-base
            hover:opacity-80 transition
          "
        >
          Explore Now
        </a>

        <div
          className="
            w-5 h-11 sm:w-3 sm:h-12 
            rounded-full
            bg-white
            flex items-center justify-center
            text-sm md:text-base
          "
        />
      </motion.div>
    </section>
  )
}

export default HeroSection
