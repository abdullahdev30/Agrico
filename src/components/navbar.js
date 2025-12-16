import Image from "next/image";
import Theme from "../components/toggle"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const Header = () => {
  return (
    <header className="relative w-full">
      {/* Background Image */}
      <div
        className="w-full h-32 md:h-40 bg-cover bg-center rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Navigation Container - positioned over the background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image
              src="/home_page/logo/logo.png" // replace with your logo path
              alt="Logo"
              width={300}
              height={300}
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center bg-[#3d4f2f]/95 dark:bg-[#0A120D] rounded-full px-8 py-3">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white text-sm font-medium hover:text-[#c5d6a8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
               <Theme className="m-8"/>

          {/* Contact Button */}
          <button className="bg-[#30511D]/95 dark:bg-[#9AD97B] rounded-full py-2 px-3 text-white hover:bg-[#3d4f2f]/95 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
