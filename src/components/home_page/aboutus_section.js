// src/components/AboutSection.jsx

const dummyImages = [
    { src: "/home_page/about_section/image_1.svg", alt: "Wheat crop at sunset" },
    { src: "/home_page/about_section/image_2.svg", alt: "Green apples on a branch" },
    { src: "/home_page/about_section/image_3.svg", alt: "Unripe olives/fruit" },
    { src: "/home_page/about_section/image_4.svg", alt: "Young corn/green crops" },
    { src: "/home_page/about_section/image_5.svg", alt: "Potatoes in dirt" },
    { src: "/home_page/about_section/image_6.svg", alt: "Corn cob" },
    { src: "/home_page/about_section/image_7.svg", alt: "Tractor in field" },
];

const AboutSection = ({ data }) => {

  return (
    <section className="bg-[#E4EBCD] dark:bg-[#6F8F6A] py-16 md:py-24 mx-4 md:mx-auto lg:max-w-7xl rounded-3xl md:rounded-[4rem] my-10 md:my-20 px-6 md:px-12">

        <button className="w-60 h-8 rounded-full bg-[#83a439] ">ABOUT OUR COMPANY</button> 
          
         

         

         
        
       
    </section>
  );
};

export default AboutSection;