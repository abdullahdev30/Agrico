import { FaPhone } from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";

const iconPacks = {
  Fa: FaIcons,
  Fa6: Fa6Icons,
  Ai: AiIcons,
};

const footerData = {
  links: {
    heading: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "Information", href: "#" },
      { label: "Services", href: "#" },
      { label: "Support", href: "#" },
    ],
  },

  contact: {
    heading: "Contact",
    address: {
      line1: "Agrico Farmhouse",
      line2: "Ferozepur Road, Near Kahna Nau,",
      line3: "Lahore, Pakistan",
    },
    phones: [
      { number: "0300-1234567", href: "tel:03001234567" },
      { number: "0311-1122334", href: "tel:03111122334" },
    ],
  },

  socials: {
    heading: "Socials",
    items: [
      { icon: "Fa.FaFacebook", href: "#" },
      { icon: "Ai.AiFillInstagram", href: "#" },
      { icon: "Fa6.FaLinkedin", href: "#" },
      { icon: "Fa6.FaXTwitter", href: "#" },
      { icon: "Fa.FaWhatsapp", href: "#" },
    ],
  },

  logoText: "AGRICO",
};


const Footer = () => {
  const { links, contact, socials, logoText } = footerData;

  return (
    <footer className="relative min-h-screen bg-secondary flex flex-col justify-between overflow-hidden">
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-16 md:pt-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-text-light font-bold text-xl mb-6">
              {links.heading}
            </h3>
            <ul className="space-y-4">
              {links.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-text-light hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-text-light font-bold text-xl mb-6">
              {contact.heading}
            </h3>

            <address className="not-italic text-text-light space-y-2 mb-6">
               <p><a 
              href={`https://www.google.com/maps/place/Camp+Jail/@31.541288,74.3192979,1131m/data=!3m1!1e3!4m6!3m5!1s0x391904a306aaaaab:0x4e5cb66ede3cfb95!8m2!3d31.5410449!4d74.3209874!16s%2Fg%2F11txmz9dk5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}

              className="border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">{contact.address.line1}</a>
              </p>
               <p>
              <a 
                href={`https://www.google.com/maps/place/Camp+Jail/@31.541288,74.3192979,1131m/data=!3m1!1e3!4m6!3m5!1s0x391904a306aaaaab:0x4e5cb66ede3cfb95!8m2!3d31.5410449!4d74.3209874!16s%2Fg%2F11txmz9dk5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
               className="border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">{contact.address.line2}</a>
              </p>
               <p>
              <a
             href={`https://www.google.com/maps/place/Camp+Jail/@31.541288,74.3192979,1131m/data=!3m1!1e3!4m6!3m5!1s0x391904a306aaaaab:0x4e5cb66ede3cfb95!8m2!3d31.5410449!4d74.3209874!16s%2Fg%2F11txmz9dk5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
             className="border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-300">{contact.address.line3}</a>
             </p>
            </address>

            <div className="space-y-3">
              {contact.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.number}`}
                  className="flex items-center gap-3 text-text-light hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary transition-all duration-300"
                >
                  <FaPhone className="w-5 h-5" />
                  {phone.number}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-text-light font-bold text-xl mb-6">
              {socials.heading}
            </h3>

            <div className="flex flex-col gap-5">
              {socials.items.map((social, index) => {
                const [pack, iconName] = social.icon.split(".");
                const IconComponent = iconPacks[pack]?.[iconName];

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-light hover:text-primary transition-colors "
                  >
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 " />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-end  left-0 justify-center mt-auto">
        <h2
          className="font-display font-black  text-[80px] md:text-[140px] lg:text-[200px] xl:text-[240px] leading-none tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `url(/home_page/footer_bg.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {logoText}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
