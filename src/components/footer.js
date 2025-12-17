"use client";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import footerData from "../data/footer.json"; 

const iconPacks = { Fa: FaIcons, Fa6: Fa6Icons };

//  fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const Footer = () => {
  const { links, contact, socials, logoTextLarge, grassImage } = footerData;

  return (
    <footer className="relative bg-secondary flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-16 md:pt-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* QUICK LINKS */}
          <div>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible"
              className="text-text-light font-bold text-xl mb-6">
              {links.heading}
            </motion.h3>

            <ul className="space-y-4">
              {links.items.map((item, index) => (
                <motion.li key={index} variants={fadeUp} initial="hidden" whileInView="visible">
                  <a href={item.href} className="text-text-light hover:text-primary border-b-2 border-transparent hover:border-primary transition-all duration-300">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible"
              className="text-text-light font-bold text-xl mb-6">
              {contact.heading}
            </motion.h3>

            <address className="not-italic text-text-light space-y-2 mb-6">
              {contact.address.map((addr, i) => (
                <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="visible">
                  <a href={addr.href} className="border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">
                    {addr.location}
                  </a>
                </motion.p>
              ))}
            </address>

            <div className="space-y-3">
              {contact.phones.map((phone, index) => (
                <motion.a key={index} href={phone.href} variants={fadeUp} initial="hidden" whileInView="visible"
                  className="flex items-center gap-3 text-text-light hover:text-primary border-b-2 border-transparent hover:border-primary transition-all duration-300">
                  <FaPhone className="w-5 h-5" />
                  {phone.number}
                </motion.a>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible"
              className="text-text-light font-bold text-xl mb-6">
              {socials.heading}
            </motion.h3>

            <div className="flex flex-col gap-5">
              {socials.items.map((social, index) => {
                const [pack, iconName] = social.icon.split(".");
                const IconComponent = iconPacks[pack]?.[iconName];

                return (
                  <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="text-text-light hover:text-primary transition-colors"
                    variants={fadeUp} initial="hidden" whileInView="visible">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Background Logo */}
      <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden">
        <h2 className="font-display font-black text-[80px] md:text-[140px] lg:text-[200px] xl:text-[240px] leading-none tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `url(${grassImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
          {logoTextLarge}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
